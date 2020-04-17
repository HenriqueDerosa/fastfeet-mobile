import React, { useCallback, useMemo } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import colors from '~/utils/colors'
import Layout from '../_layout/Detail'
import {
  BigTitle,
  Title,
  Text,
  Row,
  Touchable,
  TextTouchable,
  Card,
  Line,
  ButtonsCollection,
} from './styles'

import { ButtonTheme } from '~/components/Button'
import Icon from 'react-native-vector-icons/MaterialIcons'
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons'
import { View, Alert } from 'react-native'
import { format, parseISO } from 'date-fns'
import pt from 'date-fns/locale/pt'
import * as Navigator from '~/routes/navigator'
import { ROUTES_APP, ORDER_STATUS } from '~/utils/constants'
import { getOrderStatus } from '~/utils/helpers'
import { updateOrderRequest } from '~/store/modules/orders/actions'

const Details = ({ route }) => {
  const dispatch = useDispatch()
  const order = useSelector((state) =>
    state.orders.list.find((i) => i.id === route.params.order.id),
  )

  const status = useMemo(() => getOrderStatus(order), [order])

  const formatedStartDate = useMemo(() => {
    return !order.startDate
      ? '-- / -- / --'
      : format(parseISO(order.startDate), 'dd/MM/yyyy', { locale: pt })
  }, [order])

  const formatedEndDate = useMemo(() => {
    return !order.endDate
      ? '-- / -- / --'
      : format(parseISO(order.endDate), 'dd/MM/yyyy', { locale: pt })
  }, [order])

  const recipient = useMemo(() => order.recipient.name, [])
  const address = useMemo(() => {
    const { address, address2, number, state, city, zipcode } = order.recipient

    return `${address}, ${number}, ${city} - ${state}, ${zipcode}\n${address2}`
  }, [order])

  const handleWithdraw = useCallback(() => {
    dispatch(
      updateOrderRequest(order.id, {
        startDate: new Date(),
      }),
    )
  }, [])

  const handlePressConfirm = useCallback(() => {
    if (status === ORDER_STATUS.WITHDRAWN) {
      Navigator.navigate(ROUTES_APP.CONFIRM_DELIVERY, { order })
    } else {
      Alert.alert(
        'Marcar como retirada',
        'Você vai marcar esta encomenda como retirada, está certo disso?',
        [
          {
            text: 'Cancelar',
          },
          {
            text: 'Sim',
            onPress: handleWithdraw,
          },
        ],
      )
    }
  }, [])

  return (
    <Layout padding={35}>
      <Card>
        <Row>
          <Icon name="local-shipping" size={24} color={colors.royalBlue} />
          <BigTitle>Informações da entrega</BigTitle>
        </Row>
        <Title>Destinatário</Title>
        <Text>{recipient}</Text>
        <Title>Endereço da entrega</Title>
        <Text>{address}</Text>
        <Title>Produto</Title>
        <Text>{order?.product}</Text>
      </Card>
      <Card>
        <Row>
          <Icon name="event" size={24} color={colors.royalBlue} />
          <BigTitle>Situação da entrega</BigTitle>
        </Row>

        <Title>Status</Title>
        <Text>{status}</Text>
        <Row>
          <View style={{ flex: 1 }}>
            <Title>Data de retirada</Title>
            <Text>{formatedStartDate}</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Title>Data de entrega</Title>
            <Text>{formatedEndDate}</Text>
          </View>
        </Row>
      </Card>
      <ButtonsCollection>
        <Touchable
          theme={ButtonTheme.DARK_TEXT}
          onPress={() => Navigator.navigate(ROUTES_APP.PROBLEM, { order })}>
          <IconMCI
            name="close-circle-outline"
            color={colors.cinnabar}
            size={20}
          />
          <TextTouchable>Informar Problema</TextTouchable>
        </Touchable>
        <Line />
        <Touchable
          theme={ButtonTheme.DARK_TEXT}
          onPress={() =>
            Navigator.navigate(ROUTES_APP.VIEW_PROBLEMS, { order })
          }>
          <Icon name="info-outline" color={colors.tulipTree} size={20} />
          <TextTouchable>Visualizar Problemas</TextTouchable>
        </Touchable>
        <Line />
        <Touchable theme={ButtonTheme.DARK_TEXT} onPress={handlePressConfirm}>
          <IconMCI
            name="check-circle-outline"
            color={colors.royalBlue}
            size={20}
          />
          <TextTouchable>
            {status === ORDER_STATUS.WITHDRAWN
              ? 'Confirmar entrega'
              : 'Fazer a retirada'}
          </TextTouchable>
        </Touchable>
      </ButtonsCollection>
    </Layout>
  )
}

export default Details

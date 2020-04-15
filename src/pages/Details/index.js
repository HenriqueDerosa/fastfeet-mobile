import React, { useCallback, useMemo } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { signOut } from '~/store/modules/auth/actions'
import { getUser } from '~/store/modules/auth/selectors'
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
  ButtonsCollection,
} from './styles'
import { ButtonTheme } from '~/components/Button'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { View } from 'react-native'
import { isPast, format, parseISO } from 'date-fns'
import pt from 'date-fns/locale/pt'
import * as Navigator from '~/routes/navigator'
import { ROUTES_APP } from '~/utils/constants'

const Details = ({ route }) => {
  const order = useMemo(() => route.params.order, [route])

  const status = useMemo(() => {
    const { startDate, endDate } = order
    if (isPast(new Date(startDate))) {
      return 'pendente'
    }
    if (isPast(new Date(endDate))) return 'Entregue'

    return 'Retirada'
  }, [])

  const formatedStartDate = useMemo(() => {
    return !order.startDate
      ? '-- / -- / --'
      : format(parseISO(order.startDate), 'dd/MM/yyyy', { locale: pt })
  }, [])

  const formatedEndDate = useMemo(() => {
    return !order.endDate
      ? '-- / -- / --'
      : format(parseISO(order.endDate), 'dd/MM/yyyy', { locale: pt })
  }, [])

  const recipient = useMemo(() => order.recipient.name, [])
  const address = useMemo(() => {
    const { address, address2, number, state, city, zipcode } = order.recipient

    return `${address}, ${number}, ${city} - ${state}, ${zipcode}\n${address2}`
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
          <TextTouchable>Informar Problema</TextTouchable>
        </Touchable>
        <Touchable theme={ButtonTheme.DARK_TEXT} onPress={() => {}}>
          <TextTouchable>Visualizar Problemas</TextTouchable>
        </Touchable>
        <Touchable theme={ButtonTheme.DARK_TEXT} onPress={() => {}}>
          <TextTouchable>Confirmar entrega</TextTouchable>
        </Touchable>
      </ButtonsCollection>
    </Layout>
  )
}

export default Details

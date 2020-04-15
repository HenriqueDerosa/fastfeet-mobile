import React, { useCallback } from 'react'

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
  Card,
  ButtonsCollection,
} from './styles'
import { ButtonTheme } from '~/components/Button'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { View } from 'react-native'

const Details = () => {
  const handleLogout = useCallback(() => {}, [])

  return (
    <Layout padding={35}>
      <Card>
        <Row>
          <Icon name="local-shipping" size={24} color={colors.royalBlue} />
          <BigTitle>Informações da entrega</BigTitle>
        </Row>
        <Title>Destinatário</Title>
        <Text>Tesste</Text>
        <Title>Endereço da entrega</Title>
        <Text>Tesste</Text>
        <Title>Produto</Title>
        <Text>Teste</Text>
      </Card>
      <Card>
        <Row>
          <Icon name="event" size={24} color={colors.royalBlue} />
          <BigTitle>Situação da entrega</BigTitle>
        </Row>

        <Title>Status</Title>
        <Text>Pend</Text>
        <Row>
          <View style={{ flex: 1 }}>
            <Title>Data de retirada</Title>
            <Text>-- / -- / --</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Title>Data de entrega</Title>
            <Text>-- / -- / --</Text>
          </View>
        </Row>
      </Card>
      <ButtonsCollection>
        <Touchable theme={ButtonTheme.DARK_TEXT} onPress={handleLogout}>
          Informar Problema
        </Touchable>
        <Touchable theme={ButtonTheme.DARK_TEXT} onPress={handleLogout}>
          Visualizar Problemas
        </Touchable>
        <Touchable theme={ButtonTheme.DARK_TEXT} onPress={handleLogout}>
          Confirmar entrega
        </Touchable>
      </ButtonsCollection>
    </Layout>
  )
}

export default Details

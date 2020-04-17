import React, { useMemo, useCallback } from 'react'
import { parseISO, format } from 'date-fns'
import pt from 'date-fns/locale/pt'
import { Text, View } from 'react-native'
import PropTypes from 'prop-types'
import Button, { ButtonTheme } from '~/components/Button'

import {
  Container,
  StatusContainer,
  DetailsContainer,
  TitleContainer,
  Title,
  ItemContainer,
  ItemTitle,
  ItemValue,
} from './styles'
import { DetailButton, DetailButtonText } from './DetailButton'
import Steps from './Steps'
import Icon from 'react-native-vector-icons/MaterialIcons'
import * as Navigator from '~/routes/navigator'
import colors from '~/utils/colors'
import { ROUTES_APP } from '~/utils/constants'
import { getOrderStatus } from '~/utils/helpers'

const OrderCard = ({ order }) => {
  const dateParsed = useMemo(
    () => format(parseISO(order.createdAt), 'dd/MM/yyyy', { locale: pt }),
    [],
  )

  const handleClickDetails = useCallback(() => {
    Navigator.navigate(ROUTES_APP.DETAILS, { order })
  }, [])

  return (
    <Container>
      <TitleContainer>
        <Icon name="local-shipping" size={24} color={colors.royalBlue} />
        <Title>Encomenda {order.id}</Title>
      </TitleContainer>
      <StatusContainer>
        <Steps status={getOrderStatus(order)} />
      </StatusContainer>

      <DetailsContainer>
        <ItemContainer>
          <ItemTitle>Data</ItemTitle>
          <ItemValue>{dateParsed}</ItemValue>
        </ItemContainer>
        <ItemContainer>
          <ItemTitle>Cidade</ItemTitle>
          <ItemValue>{order.recipient.city}</ItemValue>
        </ItemContainer>
        <DetailButton onPress={handleClickDetails}>
          <DetailButtonText>Ver detalhes</DetailButtonText>
        </DetailButton>
      </DetailsContainer>
    </Container>
  )
}

OrderCard.propTypes = {
  order: PropTypes.shape(),
}
OrderCard.defaultProps = {
  order: null,
}

export default OrderCard

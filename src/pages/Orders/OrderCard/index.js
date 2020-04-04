// TODO FIX ALL function() to const func = () => {}
import React, { useMemo } from 'react'
import { parseISO, format } from 'date-fns'
import pt from 'date-fns/locale/pt'
import { Text, View } from 'react-native'
import PropTypes from 'prop-types'
import Button, { ButtonTheme } from '~/components/Button'

import {
  Container,
  StatusContainer,
  DetailsContainer,
  Title,
  ItemContainer,
  ItemTitle,
  ItemValue,
} from './styles'
import { DetailButton, DetailButtonText } from './DetailButton'

const OrderCard = ({ order }) => {
  const dateParsed = useMemo(
    () => format(parseISO(order.createdAt), 'dd/MM/yyyy', { locale: pt }),
    [],
  )

  return (
    <Container>
      <StatusContainer>
        <Title>Encomenda {order.id}</Title>
        <ItemValue>status</ItemValue>
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
        <DetailButton>
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

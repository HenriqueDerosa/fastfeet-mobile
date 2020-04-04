// TODO FIX ALL function() to const func = () => {}
import React from 'react'
import { Text, View } from 'react-native'
import PropTypes from 'prop-types'
import Button from '~/components/Button'
// import {useSelector, useDispatch} from 'react-redux'

// import { Container } from './styles'

const OrderCard = ({ order }) => {
  return (
    <View>
      <Text>Encomenda {order.id}</Text>
      <View>
        <Text>status</Text>
      </View>

      <View>
        <Text>data</Text>
        <Text>cidade</Text>
        <Button>cidade</Button>
      </View>
    </View>
  )
}

OrderCard.propTypes = {
  order: PropTypes.shape(),
}
OrderCard.defaultProps = {
  order: null,
}

export default OrderCard

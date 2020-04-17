import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import Layout from '~/pages/_layout/default'
import { getOrdersRequest } from '~/store/modules/orders/actions'
import OrderCard from './OrderCard'
import { getUser } from '~/store/modules/auth/selectors'
import Header from './Header'
import { Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

const Orders = () => {
  const dispatch = useDispatch()
  const user = useSelector(getUser())
  const orders = useSelector((state) => state.orders.list)

  useEffect(() => {
    if (user) {
      dispatch(getOrdersRequest(user.id))
    }
  }, [dispatch])

  if (!user) return null

  return (
    <Layout>
      <Header user={user} />
      {orders?.list ? (
        <Text>Aguarde ...</Text>
      ) : (
        <FlatList
          style={{ width: '100%' }}
          data={orders}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <OrderCard order={item} />}
        />
      )}
    </Layout>
  )
}

export default Orders

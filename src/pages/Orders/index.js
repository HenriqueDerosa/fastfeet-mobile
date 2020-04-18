import React, { useEffect, useState, useMemo } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import Layout from '~/pages/_layout/default'
import { getOrdersRequest } from '~/store/modules/orders/actions'
import OrderCard from './OrderCard'
import { getUser } from '~/store/modules/auth/selectors'
import Header from './Header'
import { Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { ORDER_STATUS } from '~/utils/constants'
import { getOrderStatus } from '~/utils/helpers'

const Orders = () => {
  const dispatch = useDispatch()
  const user = useSelector(getUser())
  const orders = useSelector((state) => state.orders.list)
  const [filter, setFilter] = useState([
    ORDER_STATUS.PENDING,
    ORDER_STATUS.WITHDRAWN,
  ])
  const filteredItems = useMemo(
    () => orders.filter((item) => filter.includes(getOrderStatus(item))),
    [orders, filter],
  )

  useEffect(() => {
    if (user) {
      dispatch(getOrdersRequest(user.id))
    }
  }, [dispatch])

  if (!user) return null

  return (
    <Layout>
      <Header user={user} filter={filter} setFilter={setFilter} />
      {orders?.list ? (
        <Text>Aguarde ...</Text>
      ) : (
        <FlatList
          style={{ width: '100%' }}
          data={filteredItems}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <OrderCard order={item} />}
        />
      )}
    </Layout>
  )
}

export default Orders

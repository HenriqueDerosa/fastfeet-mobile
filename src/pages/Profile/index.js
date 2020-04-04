import React, { useCallback } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { Title, Text, Touchable, TextTouchable } from './styles'
import { signOut } from '~/store/modules/auth/actions'
import { getUser } from '~/store/modules/auth/selectors'
import Avatar from '~/components/Avatar'
import Layout from '../_layout/default'
import * as Navigator from '~/routes/navigator'

const Orders = () => {
  const dispatch = useDispatch()

  const user = useSelector(getUser())

  const handleLogout = useCallback(() => {
    dispatch(signOut())
  }, [])

  if (!user) {
    return null
  }

  return (
    <Layout padding={35}>
      <Avatar user={user} />
      <Title>Nome completo</Title>
      <Text>{user.name}</Text>
      <Title>Email</Title>
      <Text>{user.email}</Text>
      <Title>Data de cadastro</Title>
      <Text>{user.createdAt}</Text>
      <Touchable onPress={handleLogout}>Logout</Touchable>
    </Layout>
  )
}

export default Orders

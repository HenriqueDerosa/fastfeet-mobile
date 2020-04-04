import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialIcons'

import Avatar from '~/components/Avatar'
import { signOut } from '~/store/modules/auth/actions'
import colors from '~/utils/colors'

import {
  Container,
  UserContainer,
  TitleContainer,
  Welcome,
  Title,
  IconContainer,
} from './styles'
import { View, TouchableOpacity, Text } from 'react-native'
import Menu from '~/components/Menu'

const Header = ({ user }) => {
  const dispatch = useDispatch()

  const handleLogout = useCallback(() => {
    dispatch(signOut())
  }, [])

  return (
    <Container>
      <UserContainer>
        <Avatar user={user} size={68} />
        <TitleContainer>
          <Welcome>Bem vindo de volta,</Welcome>
          <Title>{user.name}</Title>
        </TitleContainer>
        <IconContainer onPress={handleLogout}>
          <Icon name="exit-to-app" size={20} color={colors.cinnabar} />
        </IconContainer>
      </UserContainer>
      <Menu />
    </Container>
  )
}

Header.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
}

export default Header

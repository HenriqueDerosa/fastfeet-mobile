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
import Menu from '~/components/Menu'

const Header = ({ user, filter, setFilter }) => {
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
      <Menu selected={filter} setSelected={setFilter} />
    </Container>
  )
}

Header.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
  filter: PropTypes.arrayOf(PropTypes.string),
  setFilter: PropTypes.func,
}

Header.defaultProps = {
  filter: [],
  setFilter: () => {},
}

export default Header

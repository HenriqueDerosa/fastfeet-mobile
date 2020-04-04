import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { Icon } from 'react-native-vector-icons/MaterialIcons'
import Avatar from '~/components/Avatar'
// import {useSelector, useDispatch} from 'react-redux'

// import { Container } from './styles'

const Header = ({ user }) => {
  return (
    <View>
      <Avatar user={user} />
      {/* <Welcome>Bem vindo de volta,</Welcome>
      <Title>{user.name}</Title> */}
      <Icon name="logout" />
    </View>
  )
}

Header.propTypes = {
  user: PropTypes.shape,
}

Header.defaultProps = {
  user: null,
}

export default Header

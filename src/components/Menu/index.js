import React from 'react'
import PropTypes from 'prop-types'

import { MenuContainer, MenuItems, Title } from './styles'
import MenuButton from './MenuButton'
import { useSelector } from 'react-redux'

const Menu = () => {
  // const filter = useSelector((state) => state.orders.filter)

  return (
    <MenuContainer>
      <Title>Entregas</Title>
      <MenuItems>
        <MenuButton selected>Pendentes</MenuButton>
        <MenuButton>Entregues</MenuButton>
      </MenuItems>
    </MenuContainer>
  )
}

Menu.propTypes = {}

Menu.defaultProps = {}

export default Menu

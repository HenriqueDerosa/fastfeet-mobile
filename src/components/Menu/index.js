import React, { useCallback } from 'react'
import PropTypes from 'prop-types'

import { MenuContainer, MenuItems, Title } from './styles'
import MenuButton from './MenuButton'
import { ORDER_STATUS } from '~/utils/constants'

const Menu = ({ selected, setSelected }) => {
  const handleSelection = useCallback(
    (status) => () => {
      setSelected(status)
    },
    [],
  )

  return (
    <MenuContainer>
      <Title>Entregas</Title>
      <MenuItems>
        <MenuButton
          onPress={handleSelection([
            ORDER_STATUS.PENDING,
            ORDER_STATUS.WITHDRAWN,
          ])}
          selected={selected.includes(ORDER_STATUS.PENDING)}>
          Pendentes
        </MenuButton>
        <MenuButton
          onPress={handleSelection([ORDER_STATUS.DELIVERED])}
          selected={selected.includes(ORDER_STATUS.DELIVERED)}>
          Entregues
        </MenuButton>
      </MenuItems>
    </MenuContainer>
  )
}

Menu.propTypes = {
  selected: PropTypes.arrayOf(PropTypes.string).isRequired,
  setSelected: PropTypes.func.isRequired,
}

Menu.defaultProps = {}

export default Menu

import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import { Container, Line, Bullet, ContainerNames, StatusName } from './styles'
import { getOrderStatus } from '~/utils/helpers'
import { ORDER_STATUS } from '~/utils/constants'

const Steps = ({ status }) => {
  const bullets = useMemo(
    () => [
      true,
      status !== ORDER_STATUS.PENDING,
      status === ORDER_STATUS.DELIVERED,
    ],
    [],
  )

  return (
    <>
      <Container>
        {bullets.map((item, i) => (
          <Bullet key={`item${i}`} filled={item} />
        ))}
      </Container>
      <ContainerNames>
        <StatusName key="waiting">Aguardando Retirada</StatusName>
        <StatusName key="progress">Retirada</StatusName>
        <StatusName key="delivered">Entregue</StatusName>
      </ContainerNames>
    </>
  )
}

Steps.propTypes = {}

Steps.defaultProps = {}

export default Steps

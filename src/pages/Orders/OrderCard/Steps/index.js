import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import { Container, Line, Bullet, ContainerNames, StatusName } from './styles'

export const ORDER_STATUS = ['waiting', 'progress', 'delivered']

const Steps = ({ status }) => {
  const bullets = useMemo(() => [1, 1, 0], [])

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

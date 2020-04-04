import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import { Image } from './styles'

export default function Avatar({ user }) {
  const username = useMemo(() => user?.name?.replace(' ', '+'), [user])
  return (
    <Image
      source={{
        uri:
          user?.avatar?.url ||
          `https://ui-avatars.com/api/?name=${username}&size=128&color=A28FD0&background=F4EFFC`,
      }}
    />
  )
}

Avatar.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    avatar: PropTypes.shape({
      url: PropTypes.string,
    }),
  }).isRequired,
}

import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import Icon from 'react-native-vector-icons/MaterialIcons'

import { Container, TInput } from './styles'
import colors from '~/utils/colors'

const Input = ({ ...props }, ref) => <TInput {...props} />

export default Input

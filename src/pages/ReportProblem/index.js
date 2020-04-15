import React, { useCallback, useMemo } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { signOut } from '~/store/modules/auth/actions'
import { getUser } from '~/store/modules/auth/selectors'
import colors from '~/utils/colors'
import Layout from '../_layout/Detail'
import {
  BigTitle,
  Title,
  Text,
  Row,
  Touchable,
  TextTouchable,
  Card,
  TextField,
  ButtonsCollection,
} from './styles'
import Button, { ButtonTheme } from '~/components/Button'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { View } from 'react-native'
import { isPast, format, parseISO } from 'date-fns'
import pt from 'date-fns/locale/pt'

const ReportProblem = ({ route }) => {
  const handleSend = useCallback(() => {
    // dispatch sendProblemRequest
  }, [])

  const order = useMemo(() => route.params.order, [route])

  return (
    <Layout padding={35}>
      <Card>
        <TextField
          mode="flat"
          multiline={true}
          placeholder="Inclua aqui o problema que ocorreu na entrega"
        />
      </Card>
      <Button theme={ButtonTheme.DEFAULT}>Enviar</Button>
    </Layout>
  )
}

export default ReportProblem

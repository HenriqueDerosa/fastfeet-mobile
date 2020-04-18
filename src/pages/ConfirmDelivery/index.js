import React, { useCallback, useMemo, useState, useEffect } from 'react'

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
import Camera from '~/components/Camera'
import api from '~/services/api'

const ConfirmDelivery = ({ route }) => {
  const order = useMemo(() => route.params.order, [route])
  const [image, setImage] = useState(null)

  const handleSendPhoto = useCallback(() => {
    const formData = new FormData()
    formData.append('file', {
      uri: image.uri,
      type: 'image/jpeg',
      name: `signature-${order.id}`,
    })

    const sendFile = async () => {
      try {
        const response = await api.post('files', formData)
        console.log(response.data)
        // TODO call api => /order/id/deliver => { endDate, signatureId }
      } catch (err) {
        console.log(err)
      }
    }

    if (image.uri) {
      sendFile()
    }
  }, [])

  return (
    <Layout padding={35}>
      <Card>
        <Camera image={image} setImage={setImage} />
      </Card>
      <Button onPress={handleSendPhoto}>Enviar</Button>
    </Layout>
  )
}

export default ConfirmDelivery

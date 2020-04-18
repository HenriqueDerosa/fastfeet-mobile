import React, { useCallback, useMemo, useState, useEffect } from 'react'

import { useDispatch } from 'react-redux'

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
import Camera from '~/components/Camera'
import api from '~/services/api'
import { deliverOrderRequest } from '~/store/modules/orders/actions'

const ConfirmDelivery = ({ route }) => {
  const dispatch = useDispatch()
  const order = useMemo(() => route.params.order, [route])
  const [image, setImage] = useState(null)

  const handleSendPhoto = useCallback(() => {
    console.log(image)
    const sendFile = async () => {
      const formData = new FormData()
      formData.append('file', {
        uri: image.uri,
        type: 'image/jpeg',
        name: `signature-${order.id}`,
      })

      try {
        const response = await api.post('files', formData)
        console.log(response.data)
        const { id: signatureId } = response.data
        dispatch(deliverOrderRequest(order.id, signatureId))
      } catch (err) {
        console.log(err)
      }
    }

    if (image?.uri) {
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

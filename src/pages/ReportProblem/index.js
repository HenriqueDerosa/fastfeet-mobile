import React, { useCallback, useMemo, useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import Layout from '../_layout/Detail'
import { Card, TextField } from './styles'
import Button, { ButtonTheme } from '~/components/Button'
import { createProblemRequest } from '~/store/modules/problems/actions'

const ReportProblem = ({ route }) => {
  const dispatch = useDispatch()
  const [description, setDescription] = useState('')
  const order = useMemo(() => route.params.order, [route])

  const handleSendProblem = useCallback(() => {
    dispatch(createProblemRequest(order.id, description))
  }, [description])

  const handleChangeDescription = useCallback((text) => {
    setDescription(text)
  }, [])

  return (
    <Layout padding={35}>
      <Card>
        <TextField
          mode="flat"
          multiline={true}
          placeholder="Inclua aqui o problema que ocorreu na entrega"
          value={description}
          onChangeText={handleChangeDescription}
        />
      </Card>
      <Button theme={ButtonTheme.DEFAULT} onPress={handleSendProblem}>
        Enviar problema
      </Button>
    </Layout>
  )
}

export default ReportProblem

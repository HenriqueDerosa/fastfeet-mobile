import React, { useCallback, useState } from 'react'
import { Image } from 'react-native'

import { useDispatch, useSelector } from 'react-redux'
import Logo from '~/assets/logo.png'

import { Container, Form, FormInput, SubmitButton } from './styles'
import { signInRequest } from '~/store/modules/auth/actions'
import { ButtonTheme } from '~/components/Button'
import Input from '~/components/Input'

const SignIn = () => {
  const dispatch = useDispatch()

  const isLoading = useSelector((state) => state.auth.loading)

  const [id, setId] = useState('')

  const handleSubmit = useCallback(() => {
    console.log('id', id)
    if (id === null || id === '') {
      return
    }
    dispatch(signInRequest(id))
  }, [dispatch, id])

  return (
    <Container>
      <Image source={Logo} />

      <Form>
        <Input
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Informe seu ID de cadastro"
          returnKeyType="send"
          value={id}
          onChangeText={setId}
          onSubmitEditing={handleSubmit}
          style={{ marginBottom: 10 }}
        />

        <SubmitButton
          theme={ButtonTheme.INITIAL}
          onPress={handleSubmit}
          // loading={isLoading}>
        >
          Entrar no sistema
        </SubmitButton>
      </Form>
    </Container>
  )
}

export default SignIn

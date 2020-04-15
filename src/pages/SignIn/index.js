import React, { useCallback, useState } from 'react'
import { Image } from 'react-native'

import { useDispatch, useSelector } from 'react-redux'
import Logo from '~/assets/logo.png'

import { Container, Form, FormInput, SubmitButton } from './styles'
import { signInRequest } from '~/store/modules/auth/actions'
import { ButtonTheme } from '~/components/Button'

const SignIn = () => {
  const dispatch = useDispatch()

  const isLoading = useSelector((state) => state.auth.loading)

  const [id, setId] = useState('')

  const handleSubmit = useCallback(() => {
    dispatch(signInRequest(id))
  }, [dispatch, id])

  return (
    <Container>
      <Image source={Logo} />

      <Form>
        <FormInput
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Informe seu ID de cadastro"
          returnKeyType="send"
          value={id}
          onChangeText={setId}
          onSubmitEditing={handleSubmit}
        />

        <SubmitButton
          theme={ButtonTheme.INITIAL}
          onPress={handleSubmit}
          loading={isLoading}>
          Entrar no sistema
        </SubmitButton>
      </Form>
    </Container>
  )
}

export default SignIn

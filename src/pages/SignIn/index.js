import React, {useCallback} from 'react'
import PropTypes from 'prop-types'
import {Image} from 'react-native'

import Logo from '~/assets/logo.png'

import {Container, Form, FormInput, SubmitButton} from './styles'

const SignIn = ({navigation}) => {
  const handleSubmit = useCallback(() => {
    navigation.navigate('App')
  }, [navigation])

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
          onSubmitEditing={handleSubmit}
        />

        <SubmitButton onPress={handleSubmit}>Entrar no sistema</SubmitButton>
      </Form>
    </Container>
  )
}

SignIn.propTypes = {
  navigation: PropTypes.shape().isRequired,
}

export default SignIn

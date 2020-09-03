/* eslint-disable no-undef */
import React, {useState} from 'react'
import {View, ActivityIndicator} from 'react-native'
// import {RectButton, ScrollView} from 'react-native-gesture-handler'
import {
  Button,
  Text,
  Input,
  FormValidationMessage,
  Divider
} from 'react-native-elements'
import _ from 'lodash'
import domain from '../instance'

export default function LoginScreen({navigation, route}) {
  // const [user, setUser] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(undefined)
  const [loading, setLoading] = useState(undefined)

  function goToRegister() {
    this.props.navigation.navigate('Register') //eslint-disable-line
  }

  function login() {
    console.log('login init')
    domain
      .get('login_users_use_case')
      .execute({email, password})
      .then(user => {
        console.log('login success')
        navigation.navigate('Home')
      })
      .catch(error => {
        console.log({message: 'error', error})
        setError(error.message)
      })
  }

  function renderButton() {
    if (loading) {
      return (
        <View>
          <ActivityIndicator />
        </View>
      )
    } else return <Button title="Login" onPress={login} /> // eslint-disable-line
  }

  return (
    <View>
      <Input
        label="Email"
        placeholder="something@something.es"
        value={email}
        onChangeText={value => setEmail(value)}
      />
      <Input
        label="Password"
        placeholder="password"
        value={password}
        secureTextEntry
        onChangeText={value => setPassword(value)}
        errorMessage={error}
        renderErrorMessage={error}
      />
      {renderButton()}
      <Divider style={{height: 40, backgroundColor: 'transparent'}} />
      <Button small title="Registro" onPress={goToRegister} />
    </View>
  )
}
/* eslint-disable no-undef */
import React, {useState} from 'react'
import {View, ActivityIndicator, TextInput, Text} from 'react-native'
// import {RectButton, ScrollView} from 'react-native-gesture-handler'
import {Button, Input, Divider} from 'react-native-elements'

import _ from 'lodash'

import {AuthContext} from '../contexts/AuthContext'

export default function LoginScreen({navigation, route}) {
  // const [user, setUser] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(undefined)
  const [loading, setLoading] = useState(undefined)
  const {signIn} = React.useContext(AuthContext)
  function goToRegister() {
    this.props.navigation.navigate('Register') //eslint-disable-line
  }

  function login() {
    console.log('login init')
    try {
      signIn({email, password})
    } catch (error) {
      setError(error.message)
    }
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
      <Text>Email *</Text>
      <TextInput
        autoCapitalize="none"
        autoCompleteType="email"
        placeholder="test@someprovider.es"
        onChangeText={setEmail}
        value={email}
        textContentType="emailAddress"
      />
      <Divider style={{height: 40, backgroundColor: 'transparent'}} />
      <Text>Password *</Text>
      <TextInput
        autoCapitalize="none"
        autoCompleteType="password"
        placeholder="password"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
        textContentType="password"
      />
      {renderButton()}
      <Divider style={{height: 40, backgroundColor: 'transparent'}} />
    </View>
  )
}

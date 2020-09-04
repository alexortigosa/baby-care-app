import * as React from 'react'
import {Platform, StatusBar, StyleSheet, View} from 'react-native'
import {SplashScreen} from 'expo'
import * as Font from 'expo-font'
import {Ionicons} from '@expo/vector-icons'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import BottomTabNavigator from './navigation/BottomTabNavigator'
import useLinking from './navigation/useLinking'
import domain from './instance'

import {AuthContext} from './contexts/AuthContext'

const Stack = createStackNavigator()

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false)
  const [initialNavigationState, setInitialNavigationState] = React.useState()
  const containerRef = React.useRef()
  const {getInitialState} = useLinking(containerRef)

  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      console.log({message: 'useReducer', prevState, action})
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            user: action.user,
            isLoading: false
          }
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            user: action.user
          }
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            user: null
          }
      }
    },
    {
      isLoading: true,
      isSignout: false,
      user: null
    }
  )

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      let user
      try {
        SplashScreen.preventAutoHide()

        // Load our initial navigation state
        setInitialNavigationState(await getInitialState())

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf')
        })

        user = await domain.get('current_users_use_case').execute()
        if (user) {
          dispatch({type: 'RESTORE_TOKEN', user: user})
        }
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e)
      } finally {
        setLoadingComplete(true)
        SplashScreen.hide()
      }
    }

    loadResourcesAndDataAsync()
  }, [getInitialState])

  const authContext = React.useMemo(
    () => ({
      signIn: async ({email, password}) => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token
        const user = await domain
          .get('login_users_use_case')
          .execute({email, password})
        console.log({message: 'authContext', user, email, password})
        dispatch({type: 'SIGN_IN', user})
      },
      signOut: () => dispatch({type: 'SIGN_OUT'}),
      signUp: async ({email, password}) => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        const user = await domain
          .get('create_users_use_case')
          .execute({email, password})
        dispatch({type: 'SIGN_IN', user})
      }
    }),
    []
  )
  console.log({message: 'App', state})
  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null
  } else {
    return (
      <AuthContext.Provider value={authContext}>
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <NavigationContainer
            ref={containerRef}
            initialState={initialNavigationState}
          >
            <Stack.Navigator>
              <Stack.Screen name="Root">
                {props => <BottomTabNavigator {...props} user={state.user} />}
              </Stack.Screen>
            </Stack.Navigator>
          </NavigationContainer>
        </View>
      </AuthContext.Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})

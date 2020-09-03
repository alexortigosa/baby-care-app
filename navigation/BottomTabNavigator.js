import React, {useState, useEffect} from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import TabBarIcon from '../components/TabBarIcon'
import HomeScreen from '../screens/HomeScreen'
import TomasScreen from '../screens/TomasScreen'
import LoginScreen from '../screens/LoginScreen'
import domain from '../instance'

const BottomTab = createBottomTabNavigator()
const INITIAL_ROUTE_NAME = 'Home'

const INITIAL_ROUTE_NAME_LOGIN = 'Login'

export default function BottomTabNavigator({navigation, route}) {
  const [isLogged, setIsLogged] = useState(false)

  useEffect(() => {
    domain
      .get('current_users_use_case')
      .execute()
      .then(user => {
        setIsLogged(true)
      })
      .catch(error => {
        console.log({message: 'error', error})
        setIsLogged(false)
      })
  })
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({headerTitle: getHeaderTitle(route)})

  function renderNoLogged() {
    return (
      <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME_LOGIN}>
        <BottomTab.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: 'Login',
            tabBarIcon: ({focused}) => (
              <TabBarIcon focused={focused} name="md-book" />
            )
          }}
        />
      </BottomTab.Navigator>
    )
  }

  function renderLogged() {
    return (
      <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
        <BottomTab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Home',
            tabBarIcon: ({focused}) => (
              <TabBarIcon focused={focused} name="md-code-working" />
            )
          }}
        />
        <BottomTab.Screen
          name="Tomas"
          component={TomasScreen}
          options={{
            title: 'Tomas',
            tabBarIcon: ({focused}) => (
              <TabBarIcon focused={focused} name="md-book" />
            )
          }}
        />
        <BottomTab.Screen
          name="Cacas"
          component={TomasScreen}
          options={{
            title: 'Cacas',
            tabBarIcon: ({focused}) => (
              <TabBarIcon focused={focused} name="md-book" />
            )
          }}
        />
        <BottomTab.Screen
          name="Pipis"
          component={TomasScreen}
          options={{
            title: 'Pipis',
            tabBarIcon: ({focused}) => (
              <TabBarIcon focused={focused} name="md-book" />
            )
          }}
        />
      </BottomTab.Navigator>
    )
  }

  return isLogged ? renderLogged() : renderNoLogged()
}

function getHeaderTitle(route) {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME

  switch (routeName) {
    case 'Home':
      return 'How to get started'
    case 'Tomas':
      return 'Links to learn more'
    case 'Cacas':
      return 'Links to learn more'
    case 'Pipis':
      return 'Links to learn more'
    case 'Login':
      return 'Login'
  }
}

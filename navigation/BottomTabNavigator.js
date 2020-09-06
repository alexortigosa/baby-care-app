import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import TabBarIcon from '../components/TabBarIcon'
import HomeScreen from '../screens/HomeScreen'
import TomasScreen from '../screens/TomasScreen'
import LoginScreen from '../screens/LoginScreen'
import CacasScreen from '../screens/CacasScreen'

const BottomTab = createBottomTabNavigator()

export default function BottomTabNavigator({navigation, route, user}) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({headerTitle: getHeaderTitle(route, user)})

  function renderNoLogged() {
    return (
      <>
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
      </>
    )
  }

  function renderLogged() {
    return (
      <>
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
          component={CacasScreen}
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
      </>
    )
  }
  return (
    <BottomTab.Navigator>
      {user && user !== null ? renderLogged() : renderNoLogged()}
    </BottomTab.Navigator>
  )
}

function getHeaderTitle(route, isLogged) {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? isLogged ? 'Home' : 'Login'

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

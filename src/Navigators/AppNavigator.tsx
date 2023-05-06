import React from 'react'
import { StatusBar } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { Home, Main, Startup } from '../Screens'
import { navigationRef } from './utils'

const Stack = createStackNavigator()

export const AppNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar barStyle='dark-content' />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Startup" component={Startup} />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            animationEnabled: false,
          }}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            animationEnabled: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
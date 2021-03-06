import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import { Home } from '../screens/Home'
import { AppointmentDetails } from "../screens/AppointmentDetails"
import { AppointmentCreate } from "../screens/AppointmentCreate"
import { ProfileScreen } from "../screens/ProfileScreen"

import { theme } from "../global/styles/theme"

const { Navigator, Screen } = createStackNavigator()

export const AppRoutes = () => {
  return (
    <Navigator
      headerMode='none'
      screenOptions={{
        cardStyle: {
          backgroundColor: theme.colors.secondary100
        }
      }}
    >
      <Screen name={'Home'} component={Home} />
      <Screen name={'AppointmentDetails'} component={AppointmentDetails} />
      <Screen name={'AppointmentCreate'} component={AppointmentCreate} />
      <Screen name={'ProfileScreen'} component={ProfileScreen} />
    </Navigator>
  )
}
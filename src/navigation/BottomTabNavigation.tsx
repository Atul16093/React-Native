import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Property } from '../screens/OwnerScreens/HomeScreen';
const Tab = createBottomTabNavigator();
const BottomTabNavigation = () => {
  return (
      <Tab.Navigator initialRouteName='Property'>
            <Tab.Screen name='Property' component={Property}/>
      </Tab.Navigator>
  )
}

export default BottomTabNavigation
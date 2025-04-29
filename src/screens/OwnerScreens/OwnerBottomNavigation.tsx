import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Property} from './Home';
const Tab = createBottomTabNavigator();
const OwnerBottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Property">
      <Tab.Screen name="Property" component={Property} />
    </Tab.Navigator>
  );
};

export default OwnerBottomNavigation;

import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import OwnerBottomNavigation from '../screens/OwnerScreens/OwnerBottomNavigation';
const Tab = createBottomTabNavigator();
const OwnerNavigation = [
  {name: 'OwnerBottomNavigation', component: OwnerBottomNavigation},
];
const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false, tabBarStyle: {display: 'none'}}}
      initialRouteName="OwnerBottomNavigation">
      {OwnerNavigation.map((item, index) => (
        <Tab.Screen key={index} name={item.name} component={item.component} />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;

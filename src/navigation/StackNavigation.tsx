import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import OnBoardCommon from '../screens/BoardingScreen/OnBoardCommon';
import SignIn from '../screens/Auth/SignInScreen/SignIn';
import SignUp from '../screens/Auth/SignUpScreen/SignUp';
import OtpVerfication from '../screens/Auth/OtpVerficationScreen/OtpVerfication';
import SetPassword from '../screens/Auth/SetPasswordScreen/SetPassword';
import Role from '../screens/InformationScreens/RoleScreen/Role';
import {
  Address,
  Gender,
  Have,
  AddPicture,
} from '../screens/InformationScreens/InfoScreen/Index';
import {
  AddFamilyPicture,
  AddRenterPicture,
  Pet,
  RenterGender,
  StayWith,
} from '../screens/InformationScreens/RenterScreen';
const Stack = createStackNavigator();

const AuthNavigator = [
  {name: 'OnBoardCommon', component: OnBoardCommon},
  {name: 'SignIn', component: SignIn},
  {name: 'SignUp', component: SignUp},
  {name: 'OtpVerification', component: OtpVerfication},
  {name: 'SetPassword', component: SetPassword},
  {name: 'Role', component: Role},
  {name: 'Address', component: Address},
  {name: 'Gender', component: Gender},
  {name: 'Have', component: Have},
  {name: 'AddPicture', component: AddPicture},
  {name: 'RenterGender', component: RenterGender},
  {name: 'StayWith', component: StayWith},
  {name: 'Pet', component: Pet},
  {name: 'AddRenterPicture', component: AddRenterPicture},
  {name: 'AddFamilyPicture', component: AddFamilyPicture},
];

const StackNavigation = () => {
  return (
    <>
      <Stack.Navigator
        initialRouteName="OnBoardCommon"
        screenOptions={{headerShown: false}}>
        {AuthNavigator.map((item, index) => (
          <Stack.Screen name={item?.name} component={item?.component} />
        ))}
        {/* <Stack.Screen name="OnBoardCommon" component={OnBoardCommon} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="OtpVerification" component={OtpVerfication} />
        <Stack.Screen name="SetPassword" component={SetPassword} />
        <Stack.Screen name="Role" component={Role} />
        <Stack.Screen name="Address" component={Address} />
        <Stack.Screen name="Gender" component={Gender} />
        <Stack.Screen name="Have" component={Have} />
        <Stack.Screen name="AddPicture" component={AddPicture} />
        <Stack.Screen name="RenterGender" component={RenterGender} />
        <Stack.Screen name="StayWith" component={StayWith} />
        <Stack.Screen name="Pet" component={Pet} />
        <Stack.Screen name="AddRenterPicture" component={AddRenterPicture} />
        <Stack.Screen name="AddFamilyPicture" component={AddFamilyPicture} /> */}
      </Stack.Navigator>
    </>
  );
};

export default StackNavigation;

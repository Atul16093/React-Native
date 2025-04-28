import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import OnBoardCommon from '../screens/BoardingScreen/OnBoardCommon';
import SignIn from '../screens/Auth/SignInScreen/SignIn';
import SignUp from '../screens/Auth/SignUpScreen/SignUp';
import OtpVerification from '../screens/Auth/OtpVerificationScreen/OtpVerification';
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
  {name: 'OtpVerification', component: OtpVerification},
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
          <Stack.Screen
            key={index}
            name={item?.name}
            component={item?.component}
          />
        ))}
      </Stack.Navigator>
    </>
  );
};

export default StackNavigation;

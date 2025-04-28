import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/navigation/StackNavigation.tsx';
import OnBoardCommon from './src/screens/BoardingScreen/OnBoardCommon.tsx';
import SplashScreen from 'react-native-splash-screen';
const App = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </>
  );
};

export default App;

import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Colors from '../../utils/Colors';

const SafeContainer = ({children}: any) => {
  return <SafeAreaView style={style.body}>{children}</SafeAreaView>;
};

export default SafeContainer;

const style = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: Colors.PRIMARY_WHITE,
  },
});

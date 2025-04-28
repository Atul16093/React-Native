import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const SafeContainer = ({Children}: any) => {
  return <SafeAreaView style={style.body}>{Children}</SafeAreaView>;
};

export default SafeContainer;

const style = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'black',
  },
});

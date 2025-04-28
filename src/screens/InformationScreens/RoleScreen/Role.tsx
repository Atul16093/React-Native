import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Colors from '../../../utils/Colors';
import {roleConstant} from '../../../utils/Strings';
import Fonts from '../../../utils/Fonts';
import {Role1, Role1Blue, Role2, Role2Blue} from '../../../../assets';
import {NavigationProp, useNavigation} from '@react-navigation/native';

const Role = () => {
  const [isFirstSelect, setIsFirstSelect] = useState(false);
  const [isSecondSelect, setIsSecondSelect] = useState(false);
  const navigate = useNavigation<NavigationProp<any>>();
  return (
    <SafeAreaView style={style.body}>
      <View style={style.roleHeader}>
        <Text style={style.headerText}>{roleConstant.HEADER_TEXT}</Text>
      </View>
      <View style={style.mainContainer}>
        <View style={style.firstImgContainer}>
          <TouchableOpacity
            onPress={() => {
              setIsFirstSelect(!isFirstSelect);
              setIsSecondSelect(false);
            }}>
            {isFirstSelect ? <Role1Blue /> : <Role1 />}
          </TouchableOpacity>
          <View style={style.mainContainerOfText}>
            <Text style={style.mainText}>{roleConstant.FIRST_IMG_TEXT}</Text>
            <Text style={style.subText}>{roleConstant.FIRST_IMG_SUBTEXT}</Text>
          </View>
        </View>
        {/* Second Img */}
        <View style={style.secondImgContainer}>
          <TouchableOpacity
            onPress={() => {
              setIsSecondSelect(!isSecondSelect);
              setIsFirstSelect(false);
            }}>
            {isSecondSelect ? <Role2Blue /> : <Role2 />}
          </TouchableOpacity>
          <View style={style.mainContainerOfText}>
            <Text style={style.mainText}>{roleConstant.SECOND_IMG_TEXT}</Text>
            <Text style={style.subText}>{roleConstant.SECOND_IMG_SUBTEXT}</Text>
          </View>
        </View>
      </View>
      {isFirstSelect || isSecondSelect ? (
        <TouchableOpacity
          onPress={() => {
            isFirstSelect
              ? navigate.navigate('Address')
              : isSecondSelect
              ? navigate.navigate('RenterGender')
              : '';
          }}
          style={
            isFirstSelect || isSecondSelect
              ? style.continueContainerActive
              : style.continueContainer
          }>
          <Text style={style.continueText}>Continue</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          disabled
          style={
            isFirstSelect || isSecondSelect
              ? style.continueContainerActive
              : style.continueContainer
          }>
          <Text style={style.continueText}>Continue</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity
        onPress={() => {
          isFirstSelect
            ? navigate.navigate('Address')
            : isSecondSelect
            ? navigate.navigate('RenterGender')
            : '';
        }}
        style={
          isFirstSelect || isSecondSelect
            ? style.continueContainerActive
            : style.continueContainer
        }>
        <Text style={style.continueText}>Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Role;

const style = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: Colors.PRIMARY_BACKGROUND_COLOR,
  },
  roleHeader: {
    marginTop: 12,
    alignItems: 'center',
  },
  headerText: {
    fontFamily: Fonts.MONTSERRAT_BOLD,
    fontSize: 21,
    fontWeight: 'semibold',
    color: Colors.SECONDARY_TEXT_COLOR,
  },
  mainContainer: {
    marginTop: 77,
    alignItems: 'center',
    marginHorizontal: 94,
  },
  firstImgContainer: {
    alignItems: 'center',
  },
  mainContainerOfText: {
    marginTop: 14,
    alignItems: 'center',
    marginHorizontal: 16,
  },
  mainText: {
    fontFamily: Fonts.MONTSERRAT_BOLD,
    color: Colors.BLACK,
    fontWeight: 'semibold',
  },
  subText: {
    textAlign: 'center',
    color: Colors.Text_COLOR,
    fontSize: 14,
  },
  secondImgContainer: {
    alignItems: 'center',
    marginTop: 45,
  },
  continueContainer: {
    backgroundColor: Colors.BUTTON_CONTAINER_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 86,
    paddingTop: 17,
    marginHorizontal: 14,
    paddingBottom: 17,
    paddingLeft: 136,
    paddingRight: 136,
    borderRadius: 10,
  },
  continueText: {
    color: Colors.PRIMARY_TEXT_COLOR,
    fontFamily: Fonts.MONTSERRAT_REGULAR,
    fontWeight: '700',
  },
  continueContainerActive: {
    backgroundColor: Colors.BLUE_PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 86,
    paddingTop: 17,
    marginHorizontal: 14,
    paddingBottom: 17,
    paddingLeft: 136,
    paddingRight: 136,
    borderRadius: 10,
  },
});

import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {boardingStringConstant} from '../../utils/Strings.tsx';
import {SafeAreaView} from 'react-native-safe-area-context';
import Colors from '../../utils/Colors.tsx';
import {ButtonIcon} from '../../../assets';
import {NavigationProp, useNavigation} from '@react-navigation/native';
const image1 = '../../../assets/images/OnBoardingFirst/OnBoardingFirst.png';
const image2 = '../../../assets/images/OnBoardingSecond/OnBoardingSecond.png';
const image3 = '../../../assets/images/OnBoardingThird/OnBoardingThird.png';
const OnBoardCommon = () => {
  const [counter, setCounter] = useState(1);
  const navigate = useNavigation<NavigationProp<any>>();
  const increaseCounter = () => {
    setCounter(counter + 1);
  };
  const skipFunc = () => {
    setCounter(3);
  };
  useEffect(() => {
    if (counter == 4) {
      navigate.navigate('SignIn');
    }
  }, [counter]);
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor={'black'}></StatusBar>
      <ImageBackground
        style={{height: '100%'}}
        source={
          counter == 1
            ? require(image1)
            : counter == 2
            ? require(image2)
            : counter == 3
            ? require(image3)
            : ''
        }>
        <View style={{flex: 1, justifyContent: 'space-between'}}>
          <View style={style.headerContainer}>
            <Text style={style.headerText}>
              {boardingStringConstant.headerText}
            </Text>
          </View>
          <View style={style.mainTextContainer}>
            <Text style={style.mainText}>
              {counter == 1
                ? boardingStringConstant.FirstPageMainText
                : counter == 2
                ? boardingStringConstant.SecondPageMainText
                : counter == 3
                ? boardingStringConstant.ThirdPageMainText
                : ''}
            </Text>
            <View style={style.subTextContainer}>
              <Text style={style.subText}>
                {counter == 1
                  ? boardingStringConstant.FirstPageSubText
                  : counter == 2
                  ? boardingStringConstant.SecondPageSubText
                  : counter == 3
                  ? boardingStringConstant.ThirdPageSubText
                  : ''}
              </Text>
            </View>
          </View>
        </View>
        <View style={style.bottomContainer}>
          <TouchableOpacity onPress={skipFunc}>
            {counter == 3 ? (
              ''
            ) : (
              <Text aria-hidden={true} style={style.skip}>
                Skip
              </Text>
            )}
          </TouchableOpacity>
          <View
            style={
              counter == 3 ? style.barContainerForThird : style.barContainer
            }>
            {/* Creating three horizontal line */}
            <View style={counter == 1 ? style.barWithColor : style.bar}></View>
            <View style={counter == 2 ? style.barWithColor : style.bar}></View>
            <View style={counter == 3 ? style.barWithColor : style.bar}></View>
          </View>
          <TouchableOpacity onPress={increaseCounter}>
            <ButtonIcon />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default OnBoardCommon;

const style = StyleSheet.create({
  backgroundImage: {
    height: '100%',
  },
  headerContainer: {
    marginTop: 25,
    alignItems: 'center',
  },
  headerText: {
    fontFamily: 'Montserrat-Medium',
    fontWeight: '600',
    fontSize: 24,
    color: Colors.PRIMARY_TEXT_COLOR,
  },
  mainTextContainer: {
    marginLeft: 20,
    marginRight: 61,
  },
  mainText: {
    fontFamily: 'Inter',
    color: Colors.PRIMARY_TEXT_COLOR,
    fontSize: 40,
    fontWeight: '500',
  },
  subTextContainer: {
    marginTop: 16,
    borderColor: 'white',
  },
  subText: {
    fontFamily: 'Inter_18pt-Light',
    fontWeight: '400',
    fontSize: 16,
    color: Colors.PRIMARY_TEXT_COLOR,
  },
  bottomContainer: {
    marginTop: 50,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  skip: {
    color: Colors.PRIMARY_TEXT_COLOR,
    marginTop: 20,
  },
  bar: {
    height: 2,
    width: 30,
    backgroundColor: Colors.PRIMARY_TEXT_COLOR,
    marginRight: 4,
  },
  barWithColor: {
    height: 2,
    width: 30,
    backgroundColor: Colors.BOARDING_BAR_COLOR,
    marginRight: 4,
  },
  barWithColor3: {
    height: 2,
    width: 30,
    backgroundColor: Colors.BOARDING_BAR_COLOR,
  },
  barContainer: {
    flexDirection: 'row',
    marginTop: 30,
  },
  barContainerForThird: {
    flexDirection: 'row',
    marginTop: 30,
    marginLeft: '7%',
  },
});

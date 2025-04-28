import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ArrowLeft, Verification} from '../../../../assets';
import Colors from '../../../utils/Colors';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {verificationConstant} from '../../../utils/Strings';
import Fonts from '../../../utils/Fonts';
import OtpInputs from 'react-native-otp-inputs';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {styleOtp} from './Style';
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
const OtpVerfication = () => {
  const navigate = useNavigation<NavigationProp<any>>();
  const [otpLength, setOtpLength] = useState<string>('');

  return (
    <SafeAreaView style={styleOtp.body}>
      <TouchableOpacity onPress={() => navigate.navigate('SignUp')}>
        <ArrowLeft style={styleOtp.arrowStyling} />
      </TouchableOpacity>
      <KeyboardAwareScrollView>
        <View style={styleOtp.mainContainer}>
          <Verification />
          <View style={styleOtp.textContainer}>
            <View>
              <Text style={styleOtp.highlightedText}>
                {verificationConstant.verificationText}
              </Text>
            </View>
            <Text style={styleOtp.subText}>
              {verificationConstant.sampleText}
            </Text>
          </View>
          <View style={styleOtp.inputContainer}>
            <OtpInputs
              handleChange={current => setOtpLength(current)}
              numberOfInputs={6}
              style={styleOtp.otpContainer}
              autofillFromClipboard={false}
              inputStyles={styleOtp.input}
            />
            <View style={styleOtp.questionContainer}>
              <Text style={styleOtp.question}>
                {verificationConstant.QUESTION}
                <Text style={styleOtp.resend}>
                  {' '}
                  {verificationConstant.RESEND}
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
      <KeyboardAvoidingScrollView
        stickyFooter={
          otpLength.length == 6 ? (
            <TouchableOpacity
              onPress={() => {
                navigate.navigate('SetPassword');
              }}
              style={styleOtp.continueContainer}>
              <Text style={styleOtp.continueText}>Continue</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              disabled
              style={styleOtp.continueContainerDisabled}>
              <Text style={styleOtp.continueText}>Continue</Text>
            </TouchableOpacity>
          )
        }></KeyboardAvoidingScrollView>
    </SafeAreaView>
  );
};

export default OtpVerfication;

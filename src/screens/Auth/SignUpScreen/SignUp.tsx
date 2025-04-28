import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {style} from '../Style';
import {
  signInConstant,
  signInEmailConstant,
  singUpConstant,
} from '../../../utils/Strings';
import {
  ArrowLeft,
  CaretDown,
  Checkbox,
  Checked,
  Facebook,
  Google,
} from '../../../../assets';
import {SignupStyle} from './Style';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {TextInput} from 'react-native-gesture-handler';
import Colors from '../../../utils/Colors';
import CountryCodePicker from '../CountryCodePicker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useForm} from 'react-hook-form';
import FormInput from '../ValidationHooks/FormInput';
const SignUp = () => {
  const {
    handleSubmit,
    control,
    formState: {errors},
    watch,
  } = useForm({mode: 'onChange'});

  const navigate = useNavigation<NavigationProp<any>>();
  const [isChecked, setIsChecked] = useState(false);
  const navigateTo = () => {
    navigate.navigate('OtpVerification');
  };

  //Status function
  const checkedStatus = () => {
    setIsChecked(!isChecked);
  };
  const onSubmit = (data: any) => {
    console.log('Sign In data -', data);
    navigate.navigate('OtpVerification');
  };
  const numberInput = watch('number', '');
  const emailInput = watch('email', '');
  const username = watch('username', '');
  return (
    <SafeAreaView style={style.body}>
      <View style={style.signInHeaderContainer}>
        <View style={SignupStyle.arrowStyling}>
          <TouchableOpacity
            onPress={() => {
              navigate.navigate('SignIn');
            }}>
            <ArrowLeft />
          </TouchableOpacity>
        </View>
        <Text style={style.signInHeaderText}>{singUpConstant.signUp}</Text>
      </View>
      <KeyboardAwareScrollView>
        <View style={SignupStyle.mainContainer}>
          <View>
            <View>
              <Text style={style.labelText}>Full Name</Text>
              {/*
              <Controller
                control={control}
                name="username"
                rules={{
                  minLength: {
                    value: 3,
                    message: 'Username must be at least 3 characters',
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9]+$/,
                    message: 'Username can only contain letters and numbers',
                  },
                  required: 'UserName is required',
                }}
                render={({field: {onChange, onBlur, value}}) => (
                  <TextInput
                    style={style.passwordInput}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    placeholder="Enter your full name"
                    placeholderTextColor={Colors.PLACEHOLDER_COLOR}
                  />
                )}
              />
              {errors.username && (
                <Text style={SignupStyle.errorStyle}>
                  {errors.username.message}
                </Text>
              )}
              */}
              {/* Full Name Section  */}
              <FormInput
                control={control}
                name="username"
                showError={true}
                rules={{
                  minLength: {
                    value: 3,
                    message: 'Username must be at least 3 characters',
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9]+$/,
                    message: 'Username can only contain letters and numbers',
                  },
                  required: 'Username is required',
                }}
                error={errors.username}
                placeholder="Enter your full name"
              />
            </View>
            {/* Number Section  */}
            <Text style={SignupStyle.label}>{signInConstant.numberLabel}</Text>
            <View style={style.numberInputSection}>
              <CountryCodePicker />
              <CaretDown />
              <View style={style.partician}></View>
              <FormInput
                control={control}
                showError={false}
                name="number"
                error={errors.number}
                placeholder="1234567890"
                rules={{
                  required: 'Number is required',
                  validate: {
                    isNumeric: (value: string) =>
                      /^\d+$/.test(value) || 'Only digits are allowed',
                    isTenDigits: (value: string | any[]) =>
                      value.length === 10 || 'Number must be exactly 10 digits',
                    noLeadingZero: (value: string) =>
                      !/^0/.test(value) || 'Number cannot start with 0',
                  },
                }}
              />
            </View>
            {errors.number && (
              <Text style={{marginTop: 5, color: 'red'}}>
                {errors.number.message}
              </Text>
            )}

            {/* Email Section */}
            <View>
              <Text style={SignupStyle.label}>{signInEmailConstant.email}</Text>
              <FormInput
                control={control}
                showError={true}
                name="email"
                error={errors.email}
                placeholder="Enter your email"
                rules={{
                  required: 'Email is required',
                  pattern: {value: /^\S+@\S+$/i, message: 'Invalid email'},
                }}
              />
            </View>
          </View>

          {/* Terms and codition contaienr  */}
          <View style={SignupStyle.TCContainer}>
            <View style={style.subContainer}>
              <TouchableOpacity onPress={checkedStatus}>
                {isChecked ? (
                  <Checked style={style.rememberBox} />
                ) : (
                  <Checkbox style={style.rememberBox} />
                )}
              </TouchableOpacity>
              <Text style={SignupStyle.termsText}>
                {singUpConstant.Terms}{' '}
                <Text style={style.forgetText}>{singUpConstant.TOfS}</Text> and
                <Text style={style.forgetText}> Privacy Policy</Text>
              </Text>
            </View>
          </View>
          {/* Continue Button  */}
          {isChecked &&
          numberInput.length == 10 &&
          username.length >= 3 &&
          emailInput ? (
            <TouchableOpacity
              onPress={handleSubmit(onSubmit)}
              style={style.continueContainerActive}>
              <Text style={style.continueText}>Continue</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity disabled style={style.continueContainer}>
              <Text style={style.continueText}>Continue</Text>
            </TouchableOpacity>
          )}
          {/* OR section  */}

          <View style={style.orContainer}>
            <View style={style.leftLine}></View>
            <Text>OR</Text>
            <View style={style.rightLine}></View>
          </View>
          {/* Google and facebook button  */}
          <View style={style.continueWithContainer}>
            <TouchableOpacity style={style.continueWithFB}>
              <Facebook style={{marginRight: 7}} />
              <Text style={style.btnText}>
                {signInConstant.CONTINUE_WITH_FB}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.continueWithGoogle}>
              <Google style={{marginRight: 7}} />
              <Text style={style.btnText}>
                {signInConstant.CONTINUE_WITH_GOOGLE}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={SignupStyle.bottomContainer}>
          <Text style={style.question}>{singUpConstant.QUESTION} </Text>
          <TouchableOpacity
            onPress={() => {
              navigate.navigate('SignIn');
            }}>
            <Text style={style.signUpText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

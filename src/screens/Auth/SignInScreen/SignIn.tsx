import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Fonts from '../../../utils/Fonts';
import Colors from '../../../utils/Colors';
import {signInConstant, signInEmailConstant} from '../../../utils/Strings';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import CountryCodePicker from '../CountryCodePicker';
import {
  CaretDown,
  Checkbox,
  Checked,
  Facebook,
  Google,
} from '../../../../assets';
import {style} from '../Style';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import FormInput from '../ValidationHooks/FormInput';
import {useForm} from 'react-hook-form';
const SignIn = () => {
  const [dial_code, setDialCode] = useState('');
  const [select, setSelect] = useState('phone');
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigation<NavigationProp<any>>();
  const {
    handleSubmit,
    control,
    formState: {errors},
    watch,
  } = useForm({mode: 'onChange'});
  const changeSelection = () => {
    setSelect('email');
  };

  //Checked
  const checkedStatus = () => {
    setIsChecked(!isChecked);
  };
  const onSubmit = (data: any) => {
    console.log('Sign In data -', data);
    // navigate.navigate()
  };
  const number = watch('number', '');
  const pass = watch('password', '');
  return (
    <SafeAreaView style={style.body}>
      {/* Sign In */}
      <View style={style.signInHeaderContainer}>
        <Text style={style.signInHeaderText}>{signInConstant.signIn}</Text>
      </View>
      {/* Main Container */}
      <KeyboardAwareScrollView indicatorStyle="white">
        <View style={style.mainContainer}>
          <View style={style.mainContainerHeader}>
            <TouchableOpacity
              onPress={() => {
                return setSelect('phone');
              }}>
              <Text
                style={
                  select == 'phone'
                    ? style.selectedHeaderText
                    : style.headerText
                }>
                {signInConstant.phone}
              </Text>
            </TouchableOpacity>
            <View style={style.line}></View>
            <TouchableOpacity onPress={changeSelection}>
              <Text
                style={
                  select == 'email'
                    ? style.selectedHeaderText
                    : style.headerText
                }>
                {signInConstant.email}
              </Text>
            </TouchableOpacity>
          </View>
          {/* Label and input section */}
          <View style={style.inputSectionContainer}>
            {select == 'phone' ? (
              <>
                <Text style={style.labelText}>
                  {signInConstant.numberLabel}
                </Text>
                <View style={style.numberInputSection}>
                  <CountryCodePicker />
                  <CaretDown />
                  <View style={style.partician}></View>
                  <FormInput
                    control={control}
                    name="number"
                    showError={false}
                    error={errors.number}
                    placeholder="1234567890"
                    rules={{
                      required: 'Number is required',
                      validate: {
                        isNumeric: (value: string) =>
                          /^\d+$/.test(value) || 'Only digits are allowed',
                        isTenDigits: (value: string | any[]) =>
                          value.length === 10 ||
                          'Number must be exactly 10 digits',
                        noLeadingZero: (value: string) =>
                          !/^0/.test(value) || 'Number cannot start with 0',
                      },
                    }}
                  />
                  {/* <TextInput
                    style={style.numberInput}
                    placeholder="1234567890"
                    placeholderTextColor={Colors.PLACEHOLDER_COLOR}></TextInput> */}
                </View>
                {errors.number && (
                  <Text style={{marginTop: 5, color: 'red'}}>
                    {errors.number.message}
                  </Text>
                )}
              </>
            ) : (
              <View>
                <Text style={style.labelText}>{signInEmailConstant.email}</Text>
                <FormInput
                  control={control}
                  name="email"
                  showError={true}
                  error={errors.email}
                  placeholder="Enter your email"
                  rules={{
                    required: 'Email is required',
                    pattern: {value: /^\S+@\S+$/i, message: 'Invalid email'},
                  }}
                />
              </View>
            )}
            <View>
              <Text style={style.passLabel}>{signInConstant.pass}</Text>
              <FormInput
                control={control}
                showError={true}
                name="password"
                error={errors.password}
                placeholder="Enter your password"
                rules={{
                  required: 'Password is required',
                }}
              />
            </View>
            <View style={style.rfContainer}>
              <View style={style.subContainer}>
                <TouchableOpacity onPress={checkedStatus}>
                  {isChecked ? (
                    <Checked style={style.rememberBox} />
                  ) : (
                    <Checkbox style={style.rememberBox} />
                  )}
                </TouchableOpacity>
                <Text style={style.rememberText}>
                  {signInConstant.remember}
                </Text>
              </View>
              <Text style={style.forgetText}>{signInConstant.forget}</Text>
            </View>
            {number.length == 10 && pass ? (
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

            <View style={style.orContainer}>
              <View style={style.leftLine}></View>
              <Text>OR</Text>
              <View style={style.rightLine}></View>
            </View>
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
            <View style={style.bottomContainer}>
              <Text style={style.question}>{signInConstant.QUESTION} </Text>
              <TouchableOpacity
                onPress={() => {
                  navigate.navigate('SignUp');
                }}>
                <Text style={style.signUpText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

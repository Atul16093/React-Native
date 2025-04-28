import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Colors from '../../../utils/Colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import Fonts from '../../../utils/Fonts';
import {setPasswordConstant} from '../../../utils/Strings';
import {TextInput} from 'react-native-gesture-handler';
import FormInput from '../ValidationHooks/FormInput';
import {useForm} from 'react-hook-form';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const SetPassword = () => {
  const {
    control,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm({mode: 'onChange'});
  const submit = (data: any) => {
    navigate.navigate('Role');
  };
  const navigate = useNavigation<NavigationProp<any>>();
  const pass = watch('password', '');
  const confirmPass = watch('confirmPassword', '');
  return (
    <SafeAreaView style={style.body}>
      <View style={style.setHeaderContainer}>
        <Text style={style.setHeaderText}>
          {setPasswordConstant.HEADER_TEXT}
        </Text>
      </View>
      <View style={style.setMainContainer}>
        <View style={style.setPasswordLabelContainer}>
          <Text style={style.setPasswordLabel}>
            {setPasswordConstant.PASSWORD_LABEL}
          </Text>
          <FormInput
            control={control}
            showError={true}
            name="password"
            error={errors.password}
            placeholder={setPasswordConstant.PASSWORD_PLACEHOLDER}
            rules={{
              required: 'Password is required',
              validate: {
                minLength: (value: string | any[]) =>
                  value.length >= 8 || 'Password must be at least 8 characters',
                hasUpper: (value: string) =>
                  /[A-Z]/.test(value) ||
                  'Password must have at least one uppercase letter',
                hasLower: (value: string) =>
                  /[a-z]/.test(value) ||
                  'Password must have at least one lowercase letter',
                hasNumber: (value: string) =>
                  /\d/.test(value) || 'Password must have at least one number',
                hasSpecial: (value: string) =>
                  /[@$!%*?&]/.test(value) ||
                  'Password must have at least one special character (@$!%*?&)',
              },
            }}
          />
        </View>

        {/* Confirm password label */}
        <View style={style.setPasswordLabelContainer}>
          <Text style={style.setPasswordLabel}>
            {setPasswordConstant.CONFIRM_LABEL}
          </Text>
          <FormInput
            control={control}
            showError={true}
            name="confirmPassword"
            error={errors.confirmPassword}
            placeholder={setPasswordConstant.CONFIRM_LABEL}
            rules={{
              required: 'Password is required',
            }}
          />
        </View>
      </View>
      {pass && confirmPass && !errors.password && !errors.confirmPassword ? (
        <KeyboardAvoidingScrollView
          stickyFooter={
            <TouchableOpacity
              onPress={handleSubmit(submit)}
              style={style.continueContainerActive}>
              <Text style={style.continueText}>Continue</Text>
            </TouchableOpacity>
          }></KeyboardAvoidingScrollView>
      ) : (
        <KeyboardAvoidingScrollView
          stickyFooter={
            <TouchableOpacity
              disabled
              onPress={handleSubmit(submit)}
              style={style.continueContainer}>
              <Text style={style.continueText}>Continue</Text>
            </TouchableOpacity>
          }></KeyboardAvoidingScrollView>
      )}
    </SafeAreaView>
  );
};

export default SetPassword;

const style = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: Colors.PRIMARY_BACKGROUND_COLOR,
  },
  setHeaderContainer: {
    marginTop: 12,
    alignItems: 'center',
  },
  setHeaderText: {
    fontFamily: Fonts.MONTSERRAT_BOLD,
    fontSize: 21,
    fontWeight: 'semibold',
    color: Colors.SECONDARY_TEXT_COLOR,
  },
  setMainContainer: {
    marginTop: 36,
    marginHorizontal: 14,
  },
  setPasswordLabelContainer: {
    marginBottom: 11,
  },
  setPasswordLabel: {
    fontWeight: '700',
    marginBottom: 11,
    fontSize: 15,
    fontFamily: Fonts.MONTSERRAT_REGULAR,
    color: Colors.SECONDARY_TEXT_COLOR,
  },
  continueContainer: {
    backgroundColor: Colors.BUTTON_CONTAINER_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    paddingTop: 17,
    marginHorizontal: 14,
    paddingBottom: 17,
    paddingLeft: 136,
    paddingRight: 136,
    borderRadius: 10,
  },
  continueContainerActive: {
    backgroundColor: Colors.BLUE_PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
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
});

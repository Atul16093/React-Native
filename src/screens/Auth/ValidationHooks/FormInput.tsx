import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Controller} from 'react-hook-form';
import {TextInput} from 'react-native-gesture-handler';
import Colors from '../../../utils/Colors';

interface validationType {
  control: any;
  name: string;
  rules: any;
  error: any;
  placeholder: string;
  showError: boolean;
}
const FormInput = ({
  control,
  name,
  rules = {},
  error,
  placeholder,
  showError = true,
}: validationType) => {
  return (
    <View>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.inputStyle}
            placeholder={placeholder}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            placeholderTextColor={Colors.PLACEHOLDER_COLOR}
          />
        )}
      />
      {showError && error && (
        <Text style={styles.errorText}>{error.message}</Text>
      )}
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  errorText: {
    color: 'red',
    marginTop: 5,
  },
  inputStyle: {
    backgroundColor: '#F1F1F1',
    fontSize: 14,
    fontWeight: '500',
    borderRadius: 10,
    paddingLeft: 10,
  },
});

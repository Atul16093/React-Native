import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {CountryPicker} from 'react-native-country-codes-picker';
import Colors from '../../utils/Colors';
const CountryCodePicker = () => {
  const [show, setShow] = useState(false);
  const [flag, setFlag] = useState('🇮🇳');
  const [countryCode, setCountryCode] = useState('+91');
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setShow(true)}
        style={styles.touchableContainer}>
        <Text style={styles.text}>
          {flag}
          {countryCode}
        </Text>
      </TouchableOpacity>
      <CountryPicker
        show={show}
        pickerButtonOnPress={item => {
          setFlag(item.flag);
          setCountryCode(item.dial_code);
          setShow(false);
        }}
        lang={''}
        style={{modal: {height: 500}}}
      />
    </View>
  );
};

export default CountryCodePicker;

const styles = StyleSheet.create({
  container: {},
  touchableContainer: {
    width: '100%',
    justifyContent: 'center',
  },
  text: {
    color: Colors.SECONDARY_TEXT_COLOR,
    fontWeight: '500',
    fontSize: 16,
  },
});

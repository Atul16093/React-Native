import {StyleSheet} from 'react-native';
import Fonts from '../../../utils/Fonts';
import Colors from '../../../utils/Colors';

export const SignupStyle = StyleSheet.create({
  arrowStyling: {
    position: 'absolute',
    left: 14,
  },
  mainContainer: {
    marginTop: 35,
    marginHorizontal: 14,
    borderColor: 'black',
  },
  label: {
    fontWeight: '700',
    marginBottom: 11,
    marginTop: 20,
    fontSize: 15,
    fontFamily: Fonts.MONTSERRAT_REGULAR,
    color: Colors.SECONDARY_TEXT_COLOR,
  },
  TCContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 14,
  },
  rememberBox: {
    marginRight: 6,
    borderWidth: 1,
    width: '5%',
    height: '50%',
    borderRadius: 4,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 90,
  },
  termsText: {
    fontFamily: Fonts.MONTSERRAT_MEDIUM,
    fontSize: 14,
    color: Colors.SECONDARY_TEXT_COLOR,
    fontWeight: '700',
  },
  errorStyle: {
    color: Colors.ERROR_TEXT_COLOR,
    fontFamily: Fonts.MONTSERRAT_MEDIUM,
    fontSize: 14,
    fontWeight: '700',
  },
});

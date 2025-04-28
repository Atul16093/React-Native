import {StyleSheet} from 'react-native';
import Colors from '../../../utils/Colors';
import Fonts from '../../../utils/Fonts';

export const styleOtp = StyleSheet.create({
  arrowStyling: {
    marginLeft: 14,
  },
  body: {
    flex: 1,
    backgroundColor: Colors.PRIMARY_BACKGROUND_COLOR,
  },
  mainContainer: {
    alignItems: 'center',
  },
  textContainer: {
    marginTop: 31,
    alignItems: 'center',
    paddingHorizontal: 50,
  },
  highlightedText: {
    fontSize: 21,
    fontFamily: Fonts.MONTSERRAT_BOLD,
    color: Colors.SECONDARY_TEXT_COLOR,
    fontWeight: 'semibold',
  },
  subTextContainer: {
    marginTop: 16,
  },
  subText: {
    fontFamily: Fonts.MONTSERRAT_MEDIUM,
    fontWeight: 'medium',
    marginTop: 15,
    color: Colors.SECONDARY_TEXT_COLOR,
    fontSize: 14,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    borderWidth: 2,
    borderColor: Colors.OTP_BOX_BACKGROUND,
    backgroundColor: Colors.OTP_BOX_BACKGROUND,
    marginRight: 13,
    width: 45,
    height: 45,
    borderRadius: 9,
    fontSize: 20,
    textAlign: 'center',
  },
  inputContainer: {
    marginTop: 45,
    alignItems: 'center',
  },
  questionContainer: {
    marginTop: 28,
  },
  resend: {
    fontWeight: '600',
    fontSize: 14,
    color: Colors.BLUE_PRIMARY,
  },
  question: {
    fontFamily: Fonts.MONTSERRAT_MEDIUM,
    fontSize: 16,
    fontWeight: '500',
    color: Colors.SECONDARY_TEXT_COLOR,
  },
  continueContainer: {
    backgroundColor: Colors.BLUE_PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: 230,
    marginBottom: 10,
    marginHorizontal: 14,
    paddingTop: 17,
    paddingBottom: 17,
    width: '92%',
    paddingLeft: 136,
    paddingRight: 136,
    borderRadius: 10,
  },
  continueContainerDisabled: {
    backgroundColor: Colors.BUTTON_CONTAINER_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: 230,
    marginBottom: 10,
    marginHorizontal: 14,
    paddingTop: 17,
    paddingBottom: 17,
    width: '92%',
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

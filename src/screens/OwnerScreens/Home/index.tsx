import {View, Text, StyleSheet} from 'react-native';
import SafeContainer from '../../../Components/CommonComponent/SafeContainer';
import {Bell, Oops, Plus} from '../../../../assets';
import Colors from '../../../utils/Colors';
import Fonts from '../../../utils/Fonts';
import {propertyConstant} from '../../../utils/Strings';

export const Property = () => {
  return (
    <SafeContainer>
      <View style={style.body}>
        <View style={style.headerContainer}>
          <Text style={style.headerText}>{propertyConstant.HEADING_TEXT}</Text>
          <Bell />
        </View>
        <View style={style.imgContainer}>
          <Oops />
        </View>
        <View style={style.textContainer}>
          <Text style={style.error}>{propertyConstant.ERROR_MESSAGE}</Text>
          <Text style={style.message}>{propertyConstant.MESSAGE}</Text>
          <Text style={style.message}>{propertyConstant.MESSAGE1}</Text>
        </View>
        <View style={style.plusContainer}>
          <Plus style={{position: 'absolute', right: 0}} />
        </View>
      </View>
    </SafeContainer>
  );
};

const style = StyleSheet.create({
  headerContainer: {
    borderWidth: 1,
    justifyContent: 'space-between',
    marginTop: 8,
    flexDirection: 'row',
  },
  body: {
    marginHorizontal: 14,
  },
  headerText: {
    fontWeight: '700',
    fontSize: 21,
    color: Colors.SECONDARY_TEXT_COLOR,
    fontFamily: Fonts.MONTSERRAT_REGULAR,
  },
  imgContainer: {
    alignItems: 'center',
    marginTop: '50%',
    justifyContent: 'center',
  },
  textContainer: {
    alignItems: 'center',
  },
  error: {
    fontWeight: 'bold',
    fontSize: 21,
    color: Colors.PRIMARY_BLACK,
    marginTop: 58,
    fontFamily: Fonts.POPPINS_BOLD,
  },
  message: {
    fontSize: 14,
    alignItems: 'center',
    fontWeight: '600',
    color: Colors.PLACEHOLDER_COLOR,
  },
  plusContainer: {
    marginTop: 81,
    position: 'relative',
  },
});

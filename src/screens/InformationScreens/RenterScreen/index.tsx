import {NavigationProp, useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import * as Progress from 'react-native-progress';
import {
  Add,
  AddPictureBar,
  AddressBar,
  ArrowLeft,
  GenderBar,
  HaveBar,
  Remove,
} from '../../../../assets';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {
  addPictureConstant,
  genderConstant,
  petConstant,
  stayWithConstant,
} from '../../../utils/Strings';
import Colors from '../../../utils/Colors';
import Fonts from '../../../utils/Fonts';
import {useState} from 'react';
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';
import {launchImageLibrary} from 'react-native-image-picker';

export const RenterGender = () => {
  const navigate = useNavigation<NavigationProp<any>>();
  const [choice, setChoice] = useState<Number>(0);
  return (
    <SafeAreaView style={style.body}>
      <View style={style.headerBarContainer}>
        <Progress.Bar
          progress={0.2}
          color="#0FD500"
          borderRadius={0}
          unfilledColor="#F1F1F1"
          borderColor="#F1F1F1"
          width={450}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          navigate.navigate('Role');
        }}
        style={style.arrow}>
        <ArrowLeft />
      </TouchableOpacity>
      <View style={style.mainContainer}>
        <View>
          <Text style={style.labelText}>{genderConstant.GENDER_LABEL}</Text>
        </View>
        <View style={style.optionMainContainer}>
          <TouchableOpacity
            onPress={() => {
              setChoice(1);
            }}
            style={
              choice == 1
                ? style.optionSubContainerActive
                : style.optionSubContainer
            }>
            <Text
              style={choice == 1 ? style.optionTextActive : style.optionText}>
              {genderConstant.FEMALE}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setChoice(2);
            }}
            style={
              choice == 2
                ? style.optionSubContainerActive
                : style.optionSubContainer
            }>
            <Text
              style={choice == 2 ? style.optionTextActive : style.optionText}>
              {genderConstant.MALE}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setChoice(3);
            }}
            style={
              choice == 3
                ? style.optionSubContainerActive
                : style.optionSubContainer
            }>
            <Text
              style={choice == 3 ? style.optionTextActive : style.optionText}>
              {genderConstant.OTHER}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {choice == 0 ? (
        <KeyboardAvoidingScrollView
          stickyFooter={
            <TouchableOpacity disabled style={style.continueContainerCommon}>
              <Text style={style.continueText}>Continue</Text>
            </TouchableOpacity>
          }></KeyboardAvoidingScrollView>
      ) : (
        <KeyboardAvoidingScrollView
          stickyFooter={
            <TouchableOpacity
              onPress={() => {
                navigate.navigate('StayWith');
              }}
              style={style.continueContainerCommonActive}>
              <Text style={style.continueText}>Continue</Text>
            </TouchableOpacity>
          }
        />
      )}
    </SafeAreaView>
  );
};

export const StayWith = () => {
  const navigate = useNavigation<NavigationProp<any>>();
  const [choice, setChoice] = useState<Number>(0);
  return (
    <SafeAreaView style={style.body}>
      <View style={style.headerBarContainer}>
        <Progress.Bar
          progress={0.4}
          color="#0FD500"
          borderRadius={0}
          unfilledColor="#F1F1F1"
          borderColor="#F1F1F1"
          width={450}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          navigate.navigate('RenterGender');
        }}
        style={style.arrow}>
        <ArrowLeft />
      </TouchableOpacity>
      <View style={style.mainContainer}>
        <View>
          <Text style={style.labelText}>{stayWithConstant.HEADING}</Text>
        </View>
        <View style={style.optionMainContainer}>
          <TouchableOpacity
            onPress={() => {
              setChoice(1);
            }}
            style={
              choice == 1
                ? style.optionSubContainerActive
                : style.optionSubContainer
            }>
            <Text
              style={choice == 1 ? style.optionTextActive : style.optionText}>
              {stayWithConstant.FAMILY}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setChoice(2);
            }}
            style={
              choice == 2
                ? style.optionSubContainerActive
                : style.optionSubContainer
            }>
            <Text
              style={choice == 2 ? style.optionTextActive : style.optionText}>
              {stayWithConstant.MYSELF}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {choice == 0 ? (
        <KeyboardAvoidingScrollView
          stickyFooter={
            <TouchableOpacity disabled style={style.continueContainerCommon}>
              <Text style={style.continueText}>Continue</Text>
            </TouchableOpacity>
          }></KeyboardAvoidingScrollView>
      ) : (
        <KeyboardAvoidingScrollView
          stickyFooter={
            <TouchableOpacity
              onPress={() => {
                navigate.navigate('Pet');
              }}
              style={style.continueContainerCommonActive}>
              <Text style={style.continueText}>Continue</Text>
            </TouchableOpacity>
          }
        />
      )}
    </SafeAreaView>
  );
};

export const Pet = () => {
  const navigate = useNavigation<NavigationProp<any>>();
  const [choice, setChoice] = useState<Number>(0);
  return (
    <SafeAreaView style={style.body}>
      <View style={style.headerBarContainer}>
        <Progress.Bar
          progress={0.6}
          color="#0FD500"
          borderRadius={0}
          unfilledColor="#F1F1F1"
          borderColor="#F1F1F1"
          width={450}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          navigate.navigate('StayWith');
        }}
        style={style.arrow}>
        <ArrowLeft />
      </TouchableOpacity>
      <View style={style.mainContainer}>
        <View>
          <Text style={style.labelText}>{petConstant.HEADING}</Text>
        </View>
        <View style={style.optionMainContainer}>
          <TouchableOpacity
            onPress={() => {
              setChoice(1);
            }}
            style={
              choice == 1
                ? style.optionSubContainerActive
                : style.optionSubContainer
            }>
            <Text
              style={choice == 1 ? style.optionTextActive : style.optionText}>
              {petConstant.YES}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setChoice(2);
            }}
            style={
              choice == 2
                ? style.optionSubContainerActive
                : style.optionSubContainer
            }>
            <Text
              style={choice == 2 ? style.optionTextActive : style.optionText}>
              {petConstant.NO}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setChoice(3);
            }}
            style={
              choice == 3
                ? style.optionSubContainerActive
                : style.optionSubContainer
            }>
            <Text
              style={choice == 3 ? style.optionTextActive : style.optionText}>
              {petConstant.FUTURE}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {choice == 0 ? (
        <KeyboardAvoidingScrollView
          stickyFooter={
            <TouchableOpacity disabled style={style.continueContainerCommon}>
              <Text style={style.continueText}>Continue</Text>
            </TouchableOpacity>
          }></KeyboardAvoidingScrollView>
      ) : (
        <KeyboardAvoidingScrollView
          stickyFooter={
            <TouchableOpacity
              onPress={() => {
                navigate.navigate('AddRenterPicture');
              }}
              style={style.continueContainerCommonActive}>
              <Text style={style.continueText}>Continue</Text>
            </TouchableOpacity>
          }
        />
      )}
    </SafeAreaView>
  );
};

export const AddRenterPicture = () => {
  const navigate = useNavigation<NavigationProp<any>>();
  const [imageUri, setImageUri] = useState(null);

  // Here response is an object, where assets is the key and it's value is an array of objects
  const pickImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        selectionLimit: 1,
      },
      response => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.errorCode) {
          console.error('ImagePicker Error: ', response.errorMessage);
        } else if (response.assets && response.assets.length > 0) {
          setImageUri(response.assets[0].uri);
        }
        console.log("It's a uri of image ", response);
      },
    );
  };

  const removeImage = () => {
    setImageUri(null);
  };
  return (
    <SafeAreaView style={style.body}>
      <View style={style.headerBarContainer}>
        <Progress.Bar
          progress={0.8}
          color="#0FD500"
          borderRadius={0}
          unfilledColor="#F1F1F1"
          borderColor="#F1F1F1"
          width={450}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          navigate.navigate('Pet');
        }}
        style={style.arrow}>
        <ArrowLeft />
      </TouchableOpacity>
      <View style={style.mainContainer}>
        <View>
          <Text style={style.labelText}>{addPictureConstant.LABEL_TEXT}</Text>
        </View>
        <View
          style={{
            marginTop: -44,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={imageUri ? removeImage : pickImage}
            style={imageUri ? style.imgContainerWithImage : style.imgContainer}>
            {imageUri ? '' : <Add />}
            {imageUri && (
              <>
                <ImageBackground
                  source={{uri: imageUri}}
                  style={style.imageStyle}>
                  <Remove />
                </ImageBackground>
              </>
            )}
          </TouchableOpacity>
        </View>
      </View>
      {imageUri ? (
        <TouchableOpacity
          onPress={() => {
            navigate.navigate('AddFamilyPicture');
          }}
          style={style.continueContainerAddPicture}>
          <Text style={style.continueText}>Continue</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity disabled style={style.continueContainerDisabled}>
          <Text style={style.continueText}>Continue</Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

export const AddFamilyPicture = () => {
  const navigate = useNavigation<NavigationProp<any>>();
  const [imageUri, setImageUri] = useState(null);

  // Here response is an object, where assets is the key and it's value is an array of objects
  const pickImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        selectionLimit: 1,
      },
      response => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.errorCode) {
          console.error('ImagePicker Error: ', response.errorMessage);
        } else if (response.assets && response.assets.length > 0) {
          setImageUri(response.assets[0].uri);
        }
        console.log("It's a uri of image ", response);
      },
    );
  };

  const removeImage = () => {
    setImageUri(null);
  };
  return (
    <SafeAreaView style={style.body}>
      <View style={style.headerBarContainer}>
        <Progress.Bar
          progress={1}
          color="#0FD500"
          borderRadius={0}
          unfilledColor="#F1F1F1"
          borderColor="#F1F1F1"
          width={450}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          navigate.navigate('AddRenterPicture');
        }}
        style={style.arrowContainer}>
        <ArrowLeft />
        <TouchableOpacity
          onPress={() => {
            navigate.navigate('Property');
          }}>
          <Text style={{color: Colors.BLUE_PRIMARY, marginRight: '4%'}}>
            Skip
          </Text>
        </TouchableOpacity>
      </TouchableOpacity>
      <View style={style.mainContainer}>
        <View>
          <Text style={style.labelText}>{addPictureConstant.FAMILY_LABEL}</Text>
        </View>
        <View
          style={{
            marginTop: -44,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={imageUri ? removeImage : pickImage}
            style={
              imageUri
                ? style.familyImgContainerWithImage
                : style.familyImgContainer
            }>
            {imageUri ? '' : <Add />}
            {imageUri && (
              <>
                <ImageBackground
                  source={{uri: imageUri}}
                  style={style.imageStyle}>
                  <Remove />
                </ImageBackground>
              </>
            )}
          </TouchableOpacity>
        </View>
      </View>
      {imageUri ? (
        <KeyboardAvoidingScrollView
          stickyFooter={
            <TouchableOpacity style={style.continueContainerAddPicture}>
              <Text style={style.continueText}>Continue</Text>
            </TouchableOpacity>
          }></KeyboardAvoidingScrollView>
      ) : (
        <KeyboardAvoidingScrollView
          stickyFooter={
            <TouchableOpacity disabled style={style.continueContainerDisabled}>
              <Text style={style.continueText}>Continue</Text>
            </TouchableOpacity>
          }></KeyboardAvoidingScrollView>
      )}
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: Colors.PRIMARY_BACKGROUND_COLOR,
  },
  headerBarContainer: {
    marginTop: 7,
  },
  arrow: {
    marginLeft: 14,
    marginTop: 1,
  },
  arrowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  mainContainer: {
    marginTop: 28,
    marginHorizontal: 14,
  },
  labelText: {
    color: Colors.SECONDARY_TEXT_COLOR,
    fontSize: 32,
    fontWeight: '600',
  },
  optionMainContainer: {
    marginTop: 24,
  },
  optionSubContainer: {
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    borderColor: Colors.PLACEHOLDER_COLOR,
  },
  optionSubContainerActive: {
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.BLUE_PRIMARY,
    marginBottom: 10,
  },
  continueText: {
    color: Colors.PRIMARY_TEXT_COLOR,
    fontFamily: Fonts.MONTSERRAT_REGULAR,
    fontWeight: '700',
  },

  continueContainerCommon: {
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
  optionText: {
    fontWeight: '600',
    fontSize: 16,
    color: Colors.PLACEHOLDER_COLOR,
    marginVertical: 17,
  },
  optionTextActive: {
    fontWeight: '600',
    fontSize: 16,
    color: Colors.BLUE_PRIMARY,
    marginVertical: 17,
  },
  continueContainerCommonActive: {
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
  continueContainerAddPicture: {
    backgroundColor: Colors.BLUE_PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 17,
    marginBottom: 10,
    marginHorizontal: 14,
    paddingBottom: 17,
    paddingLeft: 136,
    paddingRight: 136,
    borderRadius: 10,
  },
  continueContainerDisabled: {
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
  imgContainer: {
    width: '100%',
    height: '78%',
    borderRadius: 9,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: Colors.BLUE_PRIMARY,
    backgroundColor: '#F1F1F1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  familyImgContainer: {
    width: '100%',
    height: '65%',
    borderRadius: 9,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: Colors.BLUE_PRIMARY,
    backgroundColor: '#F1F1F1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgContainerWithImage: {
    width: '100%',
    height: '78%',
    backgroundColor: '#F1F1F1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  familyImgContainerWithImage: {
    width: '100%',
    height: '65%',
    backgroundColor: '#F1F1F1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
});

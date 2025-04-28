import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Colors from '../../../utils/Colors';
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
  addPictureConstant,
  addressConstant,
  genderConstant,
  haveConstant,
} from '../../../utils/Strings';
import Fonts from '../../../utils/Fonts';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import FormInput from '../../Auth/ValidationHooks/FormInput';
import {useForm} from 'react-hook-form';
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';
import {ScrollView} from 'react-native-gesture-handler';
import {launchImageLibrary} from 'react-native-image-picker';
export const Address = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
    watch,
  } = useForm({mode: 'onChange'});
  const navigate = useNavigation<NavigationProp<any>>();

  const submit = (data: any) => {
    console.log('Address section data -', data);
    navigate.navigate('Gender');
  };
  const addressText = watch('address', '');
  return (
    <SafeAreaView style={style.body}>
      <View style={style.addressBarContainer}>
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
      <ScrollView>
        <View style={style.mainContainer}>
          <View style={style.labelContainer}>
            <Text style={style.labelText}>{addressConstant.ADDRESS}</Text>
          </View>
          <View style={style.textInput}>
            <FormInput
              control={control}
              name="address"
              rules={{
                required: 'Address is required',
              }}
              showError={false}
              placeholder="Enter your address"
              error={errors.address}
            />
          </View>
          {errors.address && (
            <Text style={style.errorText}> {errors.address.message}</Text>
          )}
        </View>
      </ScrollView>
      {errors.address && !addressText ? (
        <KeyboardAvoidingScrollView
          keyboardShouldPersistTaps="always"
          stickyFooter={
            <TouchableOpacity
              disabled
              onPress={handleSubmit(submit)}
              style={style.continueContainer}>
              <Text style={style.continueText}>Continue</Text>
            </TouchableOpacity>
          }></KeyboardAvoidingScrollView>
      ) : (
        <KeyboardAvoidingScrollView
          keyboardShouldPersistTaps="always"
          stickyFooter={
            <TouchableOpacity
              onPress={handleSubmit(submit)}
              style={style.continueContainerCommonActive}>
              <Text style={style.continueText}>Continue</Text>
            </TouchableOpacity>
          }></KeyboardAvoidingScrollView>
      )}
    </SafeAreaView>
  );
};

export const Gender = () => {
  const navigate = useNavigation<NavigationProp<any>>();
  const [choice, setChoice] = useState<Number>(0);
  return (
    <SafeAreaView style={style.body}>
      <View style={style.genderBarContainer}>
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
          navigate.navigate('Address');
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
        <TouchableOpacity disabled style={style.continueContainerCommon}>
          <Text style={style.continueText}>Continue</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => {
            navigate.navigate('Have');
          }}
          style={style.continueContainerCommonActive}>
          <Text style={style.continueText}>Continue</Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

export const Have = () => {
  const navigate = useNavigation<NavigationProp<any>>();
  const [counter, setCounter] = useState(2);
  const [choice, setChoice] = useState<Number>(0);
  return (
    <SafeAreaView style={style.body}>
      <View style={style.genderBarContainer}>
        <Progress.Bar
          progress={0.7}
          color="#0FD500"
          borderRadius={0}
          unfilledColor="#F1F1F1"
          borderColor="#F1F1F1"
          width={450}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          navigate.navigate('Gender');
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
              style={
                choice == 1 ? style.optionTextHaveActive : style.optionTextHave
              }>
              {haveConstant.FIRST}
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
              style={
                choice == 2 ? style.optionTextHaveActive : style.optionTextHave
              }>
              {haveConstant.SECOND}
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
              style={
                choice == 3 ? style.optionTextHaveActive : style.optionTextHave
              }>
              {haveConstant.THIRD}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {choice == 0 ? (
        <TouchableOpacity disabled style={style.continueContainerCommon}>
          <Text style={style.continueText}>Continue</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => {
            navigate.navigate('AddPicture');
          }}
          style={style.continueContainerCommonActive}>
          <Text style={style.continueText}>Continue</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity
        onPress={() => {
          navigate.navigate('AddPicture');
        }}
        style={style.continueContainerCommon}>
        <Text style={style.continueText}>Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export const AddPicture = () => {
  const navigate = useNavigation<NavigationProp<any>>();
  const [imageUri, setImageUri] = useState(null);

  // response is an object, where assets is the key and it's value is an array of objects
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
      <View style={style.genderBarContainer}>
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
          navigate.navigate('Have');
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
        <TouchableOpacity style={style.continueContainerAddPicture}>
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
const style = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: Colors.PRIMARY_BACKGROUND_COLOR,
  },
  addressBarContainer: {
    marginTop: 7,
  },
  arrow: {
    marginLeft: 14,
    marginTop: 1,
  },
  mainContainer: {
    marginTop: 28,
    marginHorizontal: 14,
  },
  labelContainer: {},
  labelText: {
    color: Colors.SECONDARY_TEXT_COLOR,
    fontSize: 28,
    fontWeight: '600',
  },
  textInput: {
    backgroundColor: '#F1F1F1',
    marginTop: 24,
    fontSize: 14,
    fontWeight: '500',
    borderRadius: 10,
    paddingLeft: 10,
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
  continueText: {
    color: Colors.PRIMARY_TEXT_COLOR,
    fontFamily: Fonts.MONTSERRAT_REGULAR,
    fontWeight: '700',
  },

  continueContainerCommon: {
    backgroundColor: Colors.BUTTON_CONTAINER_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 384,
    paddingTop: 17,
    marginHorizontal: 14,
    paddingBottom: 17,
    paddingLeft: 136,
    paddingRight: 136,
    borderRadius: 10,
  },
  continueContainerCommonActive: {
    backgroundColor: Colors.BLUE_PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 384,
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
    paddingTop: 17,
    marginHorizontal: 14,
    paddingBottom: 17,
    paddingLeft: 136,
    paddingRight: 136,
    borderRadius: 10,
  },

  genderBarContainer: {
    marginTop: 7,
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
  optionText: {
    fontWeight: '600',
    fontSize: 16,
    color: Colors.PLACEHOLDER_COLOR,
    marginVertical: 17,
    marginHorizontal: 144,
  },
  optionTextActive: {
    fontWeight: '600',
    fontSize: 16,
    color: Colors.BLUE_PRIMARY,
    marginVertical: 17,
    marginHorizontal: 144,
  },
  optionTextHaveActive: {
    fontWeight: '600',
    fontSize: 16,
    color: Colors.BLUE_PRIMARY,
    marginVertical: 17,
    marginHorizontal: 107,
  },
  optionTextHave: {
    fontWeight: '600',
    fontSize: 16,
    color: Colors.PLACEHOLDER_COLOR,
    marginVertical: 17,
    marginHorizontal: 107,
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
  imgContainerWithImage: {
    width: '100%',
    height: '78%',
    backgroundColor: '#F1F1F1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
  imageStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
});

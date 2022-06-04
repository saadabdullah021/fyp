import React, {useState} from 'react';
import {
  ImageBackground,
  TouchableOpacity,
  Text,
  View,
  Pressable,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {moderateScale} from '../assets/components/Dimensions';
import '../i18n';
import {useTranslation} from 'react-i18next';

const {width, height} = Dimensions.get('window');

export default SplashScreen = ({navigation}) => {
  const {t, i18n} = useTranslation();

  const [currentLanguage, setLanguage] = useState('en');

  const changeLanguage = value => {
    i18n
      .changeLanguage(value)
      .then(() => {
        setLanguage(value);
      })

      .catch(err => console.log(err));
  };
  return (
    <ImageBackground
      source={require('../assets/images/background.png')}
      style={styles.mainContainer}>
      <View style={styles.Contanier1}>
        <View style={styles.Contanier2}>
          <TouchableOpacity
            onPress={() => changeLanguage('en')}
            style={[
              styles.englishBtnStyle,
              {
                backgroundColor: currentLanguage == 'en' ? '#1AB92A' : '#fff',
                paddingHorizontal: 20,
              },
            ]}>
            <Text
              style={{
                textAlign: 'center',
                color: currentLanguage == 'en' ? '#fff' : '#1AB92A',
                fontSize: 15,
                fontWeight: 'bold',
              }}>
              English
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => changeLanguage('hi')}
            style={[
              styles.englishBtnStyle,
              {
                backgroundColor: currentLanguage == 'hi' ? '#1AB92A' : '#fff',
                paddingHorizontal: 26,
              },
            ]}>
            <Text
              style={{
                textAlign: 'center',
                color: currentLanguage == 'hi' ? '#fff' : '#1AB92A',
                fontSize: 15,
                fontWeight: 'bold',
              }}>
              اردو
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() =>
          navigation.replace('HomeScreen', {language: currentLanguage})
        }
        style={styles.buttonContainer}>
        <Text style={styles.buttonTag}>{t('hello')} </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: height / 7,
  },
  Contanier1: {
    paddingBottom: '80%',
    position: 'absolute',
    right: 50,
    top: 20,
    borderRadius: 20,
  },
  Contanier2: {
    flex: 0.01,
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderRadius: 20,
  },
  englishBtnStyle: {
    height: '100%',
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  buttonContainer: {
    width: '80%',
    height: moderateScale(60),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1AB92A',
    borderRadius: 100,
  },

  buttonTag: {
    height: moderateScale(60),
    lineHeight: moderateScale(51),
    fontSize: moderateScale(30),
    fontFamily: 'kasheeda',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

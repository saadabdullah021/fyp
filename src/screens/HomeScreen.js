import {Icon} from '@rneui/base';
import React, {useEffect} from 'react';
import {
  ImageBackground,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  View,
} from 'react-native';
import {moderateScale} from '../assets/components/Dimensions';
import {useTranslation} from 'react-i18next';

const {width, height} = Dimensions.get('window');

export default HomeScreen = ({navigation, route}) => {
  const {t, i18n} = useTranslation();
  const {language} = route.params;

  return (
    <ImageBackground
      source={require('../assets/images/background.png')}
      style={styles.mainContainer}>
      <View style={styles.header}>
        <Icon
          name="arrowleft"
          type="antdesign"
          color={'white'}
          style={{
            borderWidth: 1,
            borderColor: 'white',
            padding: 2,
            borderRadius: 50,
          }}
          size={moderateScale(22)}
          onPress={() => navigation.replace('SplashScreen')}
        />
        <Text style={styles.headerTag}>{t('h1')} </Text>
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Guidance')}
          style={styles.buttonContainer}>
          <Text style={styles.buttonTag}>{t('h2')} </Text>
          <Icon
            name={language == 'hi' ? 'arrowleft' : 'arrowright'}
            type="antdesign"
            color={'#1AB92A'}
            size={moderateScale(25)}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Health')}
          style={styles.buttonContainer}>
          <Text style={styles.buttonTag}>{t('h3')} </Text>
          <Icon
            name={language == 'hi' ? 'arrowleft' : 'arrowright'}
            type="antdesign"
            color={'#1AB92A'}
            size={moderateScale(25)}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Information')}
          style={styles.buttonContainer}>
          <Text style={styles.buttonTag}>{t('h4')} </Text>
          <Icon
            name={language == 'hi' ? 'arrowleft' : 'arrowright'}
            type="antdesign"
            color={'#1AB92A'}
            size={moderateScale(25)}
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: height / 10,
  },

  header: {
    width: '100%',

    height: moderateScale(60),
    backgroundColor: '#1AB92A',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    paddingLeft: moderateScale(0),
  },
  headerTag: {
    color: 'white',
    fontFamily: 'kasheeda',
    fontSize: moderateScale(32),
    position: 'relative',
    marginLeft: 0,
    marginRight: 80,

    display: 'flex',
    justifyContent: 'center',
    lineHeight: moderateScale(48),
  },
  bottomContainer: {
    width: '90%',

    backgroundColor: 'white',
    borderRadius: moderateScale(10),
    marginBottom: 20,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: moderateScale(10),
    alignSelf: 'center',
    flexDirection: 'row',
    paddingVertical: 3,
  },
  buttonTag: {
    color: '#1AB92A',
    fontFamily: 'urdu',
    fontSize: moderateScale(28),
    paddingRight: moderateScale(10),
    width: '85%',
  },
});

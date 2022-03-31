import React from 'react';
import {
  ImageBackground,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {moderateScale} from '../assets/components/Dimensions';

const {width, height} = Dimensions.get('window');

export default SplashScreen = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../assets/images/background.png')}
      style={styles.mainContainer}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => navigation.replace('HomeScreen')}
        style={styles.buttonContainer}>
        <Text style={styles.buttonTag}>آگے بڑھیں</Text>
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
  buttonContainer: {
    width: '80%',
    height: moderateScale(60),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1AB92A',
    borderRadius: 100,
    elevation: moderateScale(10),
  },
  buttonTag: {
    fontSize: moderateScale(30),
    fontFamily: 'kasheeda',
    color: 'white',
  },
});

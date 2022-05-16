import {Icon} from '@rneui/base';
import React from 'react';
import {
  ImageBackground,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  View,
} from 'react-native';
import {moderateScale} from '../assets/components/Dimensions';

const {width, height} = Dimensions.get('window');

export default HomeScreen = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../assets/images/background.png')}
      style={styles.mainContainer}>
      <View style={styles.header}>
        <Icon
          name="arrowleft"
          type="antdesign"
          color={'white'}
          size={moderateScale(25)}
          onPress={() => navigation.replace('SplashScreen')}
        />
        <Text style={styles.headerTag}>گاۓ کی بیماریو ں کی تشخیص</Text>
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Guidance')}
          style={styles.buttonContainer}>
          <Text style={styles.buttonTag}>گاۓ کے متعلق رہنمائ-</Text>
          <Icon
            name="arrowleft"
            type="antdesign"
            color={'#1AB92A'}
            size={moderateScale(25)}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Health')}
          style={styles.buttonContainer}>
          <Text style={styles.buttonTag}>گاۓ کی صحت کے بارے میں جانیے-</Text>
          <Icon
            name="arrowleft"
            type="antdesign"
            color={'#1AB92A'}
            size={moderateScale(25)}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Information')}
          style={styles.buttonContainer}>
          <Text style={styles.buttonTag}>گاۓ کی معلومات-</Text>
          <Icon
            name="arrowleft"
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
    paddingHorizontal: moderateScale(14),
  },
  headerTag: {
    color: 'white',
    fontFamily: 'kasheeda',
    fontSize: moderateScale(32),
  },
  bottomContainer: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: moderateScale(10),
    elevation: moderateScale(10),
    paddingVertical: moderateScale(15),
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: moderateScale(10),
    alignSelf: 'flex-end',
  },
  buttonTag: {
    color: '#1AB92A',
    fontFamily: 'urdu',
    fontSize: moderateScale(28),
    paddingRight: moderateScale(10),
    width: '85%',
  },
});

import React from 'react';
import {Image, View, Text, StyleSheet, Dimensions} from 'react-native';
import {moderateScale} from '../assets/components/Dimensions';
import {Icon} from '@rneui/base';

const {width, height} = Dimensions.get('window');

export default Result = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <Icon
          name="arrowleft"
          type="antdesign"
          color={'white'}
          size={moderateScale(25)}
          onPress={() => navigation.goBack()}
        />
        <Text numberOfLines={1} style={styles.headerTag}>
          نتیجہ
        </Text>
      </View>
      <Image
        source={require('../assets/images/symptom.jpg')}
        style={styles.imageStyle}
        resizeMode="cover"
      />
      <Text
        style={{
          color: '#1AB92A',
          fontSize: moderateScale(25),
          fontFamily: 'urdu',
          textAlign: 'right',
          width: '90%',
          borderTopWidth: 1,
          borderColor: 'gray',
          marginTop: moderateScale(30),
          paddingTop: moderateScale(3),
          paddingHorizontal: moderateScale(10),
        }}>
        بیماری کا نام
      </Text>
      <Text
        style={{
          color: '#1AB92A',
          fontSize: moderateScale(25),
          fontFamily: 'urdu',
          textAlign: 'right',
          width: '90%',
          borderTopWidth: 1,
          borderColor: 'gray',
          marginTop: moderateScale(30),
          paddingTop: moderateScale(3),
          paddingHorizontal: moderateScale(10),
        }}>
        بیماری کی وجہ
      </Text>
      <Text
        style={{
          color: '#1AB92A',
          fontSize: moderateScale(25),
          fontFamily: 'urdu',
          textAlign: 'right',
          width: '90%',
          borderTopWidth: 1,
          borderColor: 'gray',
          marginTop: moderateScale(30),
          paddingTop: moderateScale(3),
          paddingHorizontal: moderateScale(10),
        }}>
        بیماری کا علاج
      </Text>
      <Text
        style={{
          color: '#1AB92A',
          fontSize: moderateScale(25),
          fontFamily: 'urdu',
          textAlign: 'right',
          width: '90%',
          borderTopWidth: 1,
          borderColor: 'gray',
          marginTop: moderateScale(30),
          paddingTop: moderateScale(3),
          paddingHorizontal: moderateScale(10),
        }}>
        بیماری کا دیسی علاج
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  header: {
    width: '100%',
    height: moderateScale(60),
    backgroundColor: '#1AB92A',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: moderateScale(14),
  },
  headerTag: {
    color: 'white',
    fontFamily: 'kasheeda',
    fontSize: moderateScale(30),
    width: '90%',
  },
  imageStyle: {
    width: width / 2,
    height: width / 2,
    borderRadius: moderateScale(10),
    marginTop: moderateScale(50),
  },
});

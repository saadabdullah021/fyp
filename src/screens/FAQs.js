import {Icon} from '@rneui/base';
import React from 'react';
import {
  ImageBackground,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  View,
  FlatList,
  Image,
} from 'react-native';
import {useState} from 'react';
import {moderateScale} from '../assets/components/Dimensions';
import {useTranslation} from 'react-i18next';
const {width, height} = Dimensions.get('window');

const FAQs = ({navigation, route}) => {
  const {t, i18n} = useTranslation();
  const {language} = route.params;

  const changeLanguage = value => {
    i18n
      .changeLanguage(value)
      .then(() => {
        setLanguage(value);
      })

      .catch(err => console.log(err));
  };
  const data = [
    {
      id: '1',
      data: t('faqtitle1'),
    },
    {id: '2', data: t('faqtitle2')},
    {id: '3', data: t('faqtitle3')},
    {id: '4', data: t('faqtitle4')},
    {id: '5', data: t('faqtitle5')},
    {id: '6', data: t('faqtitle6')},
    {id: '7', data: t('faqtitle7')},
  ];
  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          if (item.id == 1) {
            navigation.navigate('HousingManagement');
          } else if (item.id == 2) {
            navigation.navigate('CerealFodder');
          } else if (item.id == 3) {
            navigation.navigate('GrassFodder');
          } else if (item.id == 4) {
            navigation.navigate('TreeFodder');
          }
        }}
        activeOpacity={1}
        style={styles.card}>
        <Text style={styles.cardTag}>{item.data}</Text>
        <Icon
          name={language == 'hi' ? 'arrowleft' : 'arrowright'}
          type="antdesign"
          color={'#1AB92A'}
          style={{
            borderWidth: 1,
            borderColor: '#1AB92A',
            padding: 2,
            borderRadius: 50,
            marginLeft: 8,
          }}
          size={moderateScale(25)}
        />
      </TouchableOpacity>
    );
  };
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
            marginLeft: 5,
          }}
          size={moderateScale(22)}
          onPress={() => navigation.replace('Guidance')}
        />
        <Text numberOfLines={1} style={styles.headerTag}>
          {t('h25')}{' '}
        </Text>
      </View>
      <View style={{marginBottom: 150}}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={1}
          contentContainerStyle={{
            paddingBottom: 10,
          }}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
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
    paddingLeft: moderateScale(10),
  },
  headerTag: {
    color: 'white',
    fontFamily: 'kasheeda',
    fontSize: moderateScale(32),
    position: 'relative',
    marginLeft: 0,
    marginRight: 220,
    display: 'flex',
    justifyContent: 'center',
    lineHeight: moderateScale(47),
  },
  card: {
    width: '95%',
    borderRadius: moderateScale(10),
    alignItems: 'center',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'row',

    backgroundColor: 'white',
    marginVertical: moderateScale(10),
    textAlign: 'center',
    border: 0,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  cardTag: {
    color: 'white',
    fontFamily: 'urdu',
    textAlign: 'center',
    width: '80%',
    height: 50,
    backgroundColor: '#1AB92A',
    fontSize: moderateScale(22),
  },
});

export default FAQs;

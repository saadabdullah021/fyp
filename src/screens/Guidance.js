import {Icon} from '@rneui/base';
import React from 'react';
import {useState} from 'react';
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
import {moderateScale} from '../assets/components/Dimensions';
import {useTranslation} from 'react-i18next';
const {width, height} = Dimensions.get('window');

export default HomeScreen = ({navigation}) => {
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
  const data = [
    {
      id: '1',
      data: t('h21'),
      image: require('../assets/images/housing.png'),
    },
    {id: '2', data: t('h22'), image: require('../assets/images/fodder.png')},
    {id: '3', data: t('h23')},
    {id: '4', data: t('h24')},
    {id: '5', data: t('h25')},
    {id: '6', data: t('h26')},
  ];
  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          if (item.id == 1) {
            navigation.navigate('Housing');
          } else if (item.id == 2) {
            navigation.navigate('Fodder', {language: currentLanguage});
          }
        }}
        activeOpacity={1}
        style={styles.card}>
        <Image
          source={item.image}
          style={{height: moderateScale(280), width: moderateScale(200)}}
        />

        <Text style={styles.cardTag}>{item.data}</Text>
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
          onPress={() => navigation.goBack({routeName: 'HomeScreen'})}
        />
        <Text numberOfLines={1} style={styles.headerTag}>
          {t('h2')}{' '}
        </Text>
      </View>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: 'space-evenly',
          width: width,
          elevation: 0,
        }}
        contentContainerStyle={{
          paddingBottom: 10,
        }}
      />
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
    paddingLeft: moderateScale(10),
  },
  headerTag: {
    color: 'white',
    fontFamily: 'kasheeda',
    fontSize: moderateScale(32),
    position: 'relative',
    marginLeft: 0,
    marginRight: 50,

    display: 'flex',
    justifyContent: 'center',
    lineHeight: moderateScale(50),
  },
  card: {
    width: width / 2 - (width / 100) * 2,

    borderRadius: moderateScale(10),
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    elevation: moderateScale(10),
    backgroundColor: 'white',
    marginVertical: moderateScale(10),
    textAlign: 'center',
  },
  cardTag: {
    color: 'white',
    fontFamily: 'urdu',
    textAlign: 'center',
    width: '100%',
    backgroundColor: '#1AB92A',
    fontSize: moderateScale(20),
  },
});

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
} from 'react-native';
import {moderateScale} from '../assets/components/Dimensions';

const {width, height} = Dimensions.get('window');
import {useTranslation} from 'react-i18next';


export default HomeScreen = ({navigation}) => {
  const {t, i18n} = useTranslation();


const data = [
  {
    id: '1',
    data:  t('h21'),
  },
  {id: '2', data: t('h22')},
  {id: 3, data: t('h23')},
  {id: 4, data: t('h24')},
  {id: 5, data: t('h25')},
  {id: 6, data: t('h26')},
];
  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          if (item.id == 1) {
            navigation.navigate('Housing');
          }
        }}
        activeOpacity={1}
        style={styles.card}>
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
          size={moderateScale(25)}
          onPress={() => navigation.replace('HomeScreen')}
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
  card: {
    width: width / 2 - (width / 100) * 5,
    height: width / 2 - (width / 100) * 5,
    borderRadius: moderateScale(10),
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    elevation: moderateScale(10),
    backgroundColor: '#1AB92A',
    marginVertical: moderateScale(10),
  },
  cardTag: {
    color: 'white',
    fontFamily: 'urdu',
    fontSize: moderateScale(25),
  },
});

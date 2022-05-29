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
import {moderateScale} from '../assets/components/Dimensions';

const {width, height} = Dimensions.get('window');
import {useTranslation} from 'react-i18next';




export default Health = ({navigation}) => {
  const {t, i18n} = useTranslation();

  const data = [
    t('h21'),
    t('h22'),
    t('h23'),
    t('h24'),
    t('h25'),
    t('h26')
  ];
  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('HealthSymptoms')}
        activeOpacity={1}
        style={styles.card}>
        <Image
          style={{
            width: '100%',
            height: '75%',
          }}
          source={require('../assets/images/symptom.jpg')}
        />
        <View
          style={{
            width: '100%',
            height: '25%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={styles.cardTag}>{t('h018')}{' '}</Text>
        </View>
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
          onPress={() => navigation.goBack()}
        />
        <Text numberOfLines={1} style={styles.headerTag}>
        {t('h019')}{' '}
        </Text>
      </View>
      <Text
        style={{
          color: '#1AB92A',
          fontFamily: 'urdu',
          fontSize: moderateScale(25),
          textAlign: 'right',
          borderBottomWidth: 1,
          borderColor: '#1AB92A',
        }}>
     {t('h020')}{' '}
      </Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => (item + index).toString()}
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
    overflow: 'hidden',
    elevation: moderateScale(10),
    backgroundColor: '#1AB92A',
    marginVertical: moderateScale(10),
  },
  cardTag: {
    color: 'white',
    fontFamily: 'urdu',
    fontSize: moderateScale(25),
    top: moderateScale(-5),
  },
});

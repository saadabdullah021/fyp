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
import {SafeAreaView} from 'react-native-safe-area-context';
import {moderateScale} from '../assets/components/Dimensions';

const {width, height} = Dimensions.get('window');
import {useTranslation} from 'react-i18next';

const Housing = ({navigation}) => {
  const {t, i18n} = useTranslation();
  const data = [
    {
      id: '1',
      data:  t('h211'),
    },
    {id: '2', data:  t('h212')},
    {id: '3', data:  t('h213')},
    {id: 4, data:  t('h214')},
    {id: 5, data:  t('h215')},
    {id: 6, data: t('h216')},
  ];
  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          if (item.id == 1) {
            navigation.replace('FlourSpace');
          } else if (item.id == 2) {
            navigation.navigate('Roof');
          } else if (item.id == 3) {
            navigation.navigate('Feed');
          }
          else if(item.id == '4')
          {
            navigation.navigate('HousingMethods');
          } else if(item.id == '5')
          {
            navigation.navigate('BuildingUnit');
          } else if(item.id == '6')
          {
            navigation.navigate('SpaceFloor');
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
          onPress={() => navigation.goBack()}
        />
        <Text numberOfLines={1} style={styles.headerTag}>
        {t('h2')}{' '}
        </Text>
      </View>
      <SafeAreaView style={styles.main}>
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
      </SafeAreaView>
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
    padding: 10,
    fontFamily: 'urdu',
    fontSize: moderateScale(25),
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});
export default Housing;

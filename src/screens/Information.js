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
import {useTranslation} from 'react-i18next';

const {width, height} = Dimensions.get('window');

export default Information = ({navigation}) => {
  const {t, i18n} = useTranslation();
  const data = [t('h21'), t('h22'), t('h23'), t('h24'), t('h25'), t('h26')];

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.replace('GuidanceDetail', {
            headerTag: item,
          })
        }
        activeOpacity={1}
        style={styles.card}>
        <Text style={styles.cardTag}>{item}</Text>
        <Icon
          name="circle"
          type="font-awesome"
          color="#1AB92A"
          size={moderateScale(25)}
        />
      </TouchableOpacity>
    );
  };

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
          {t('h5')}{' '}
        </Text>
      </View>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => (item + index).toString()}
        contentContainerStyle={{
          paddingBottom: 10,
          width: width,
        }}
      />
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
  card: {
    width: '90%',
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderColor: 'gray',
    alignItems: 'center',
    paddingHorizontal: moderateScale(5),
    marginTop: moderateScale(10),
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingVertical: moderateScale(3),
  },
  cardTag: {
    color: '#1AB92A',
    fontFamily: 'urdu',
    fontSize: moderateScale(25),
    paddingRight: moderateScale(10),
  },
});

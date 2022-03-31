import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

import {moderateScale} from '../assets/components/Dimensions';
import {Icon} from '@rneui/base';

const data = [
  'فرش کی جگہ کی ضرورت',
  'چھت پے رکھنے کے لیے ',
  'کھانا کھلانے اور پانی پلانے کے لیے جگہ کی ضرورت',
];

export default GuidanceDetail = ({navigation, route}) => {
  const {headerTag} = route.params;

  const renderItem = ({item, index}) => {
    return (
      <View
        style={{
          width: '90%',
          alignSelf: 'center',
          paddingVertical: moderateScale(10),
          borderBottomWidth: 1,
          borderColor: 'gray',
          alignItems: 'center',
          paddingHorizontal: moderateScale(5),
        }}>
        <Text
          style={{
            color: '#1AB92A',
            fontFamily: 'urdu',
            fontSize: moderateScale(25),
          }}>
          {item}
        </Text>
      </View>
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
          {headerTag}
        </Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => (item + index).toString()}
        style={{
          marginTop: 100,
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
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
});

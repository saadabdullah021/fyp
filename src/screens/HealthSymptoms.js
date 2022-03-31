import {Icon, CheckBox} from '@rneui/base';
import React, {useState} from 'react';
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

const data = [
  {
    text: 'گاۓ رکھنے کی جگہ',
    checked: false,
  },
  {
    text: 'گاۓ  کی نسل ',
    checked: false,
  },
  {
    text: 'گاۓ  کی افزائش',
    checked: false,
  },
  {
    text: 'گاۓ  کا چارہ',
    checked: false,
  },
  {
    text: 'سوال جواب',
    checked: false,
  },
  {
    text: 'دودھ کی پیداوار',
    checked: false,
  },
];

export default HealthSymptoms = ({navigation}) => {
  const [renderData, setRenderData] = useState(data);
  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          let temp = renderData.map((k, kInex) => {
            if (kInex === index) {
              return {
                ...k,
                checked: !item.checked,
              };
            } else return k;
          });
          setRenderData(temp);
        }}
        activeOpacity={1}
        style={styles.card}>
        <Text style={styles.cardTag}>{item.text}</Text>
        <CheckBox checked={item.checked} checkedColor="#1AB92A" />
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
          ان میں سے کونسی علامات گا ۓ میں ہے؟
        </Text>
      </View>

      <FlatList
        data={renderData}
        renderItem={renderItem}
        keyExtractor={(item, index) => (item + index).toString()}
        contentContainerStyle={{
          paddingBottom: 10,
          width: width,
        }}
        style={{
          marginBottom: moderateScale(25),
        }}
      />

      <TouchableOpacity
        activeOpacity={1}
        onPress={() => navigation.replace('HealthHistory')}
        style={styles.buttonContainer}>
        <Text style={styles.buttonTag}>آگے بڑھیں</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    paddingBottom: moderateScale(25),
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

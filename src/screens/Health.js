import {Icon} from '@rneui/base';
import React from 'react';
import {useState, useEffect} from 'react';
import {
  ImageBackground,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  View,
  FlatList,
  Pressable,
} from 'react-native';

import {moderateScale} from '../assets/components/Dimensions';

const {width, height} = Dimensions.get('window');
import {useTranslation} from 'react-i18next';

export default Health = ({navigation}) => {
  const {t, i18n} = useTranslation();
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch('http://127.0.0.1:8000/api/diseases', requestOptions)
      .then(response => response.json())
      .then(result => {
        /*    setData(result.diseases); */
      })
      .catch(error => console.log('error', error))
      .finally(() => setLoading(false));
  }, []);

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity activeOpacity={1}>
        {/* <Image
          source={item.image}
          style={{height: moderateScale(280), width: moderateScale(200)}}
        /> */}

        <Text>{item.id}</Text>
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
          onPress={() => navigation.goBack()}
        />
        <Text numberOfLines={1} style={styles.headerTag}>
          {t('h3')}
        </Text>
      </View>
      <View
        style={{
          // flex: 1
          padding: 24,
        }}>
        {isLoading ? (
          <Text>Loading...</Text>
        ) : (
          <View
            style={{
              // flex: 1,
              // flexDirection: 'column',
              // justifyContent: 'space-between',
              backgroundColor: 'red',
              width: 200,
              height: 200,
            }}>
            {/*  <Text style={{fontSize: 18, color: 'green', textAlign: 'center'}}>
              {data.title}
            </Text> */}
            {/* <Text
              style={{
                fontSize: 14,
                color: 'green',
                textAlign: 'center',
                paddingBottom: 10,
              }}></Text> */}
            {/* <View style={{backgroundColor: 'yellow', width: 200}}> */}
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
            {/* </View> */}
            {/*  */}
          </View>
        )}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'space-between',
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
    fontSize: moderateScale(32),
    position: 'relative',
    marginLeft: 0,
    marginRight: 120,

    display: 'flex',
    justifyContent: 'center',
    lineHeight: moderateScale(50),
  },
});

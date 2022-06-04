import {Icon} from '@rneui/base';
import React, {useState} from 'react';
import {
  ImageBackground,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  View,
  FlatList,
  TextInput,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {moderateScale} from '../assets/components/Dimensions';

const {width, height} = Dimensions.get('window');
import {useTranslation} from 'react-i18next';

const Feed = ({navigation}) => {
  const {t, i18n} = useTranslation();
  const [WArea, setWarea] = useState(' - ');
  const [FArea, setFarea] = useState(' - ');

  const [WPArea, setWParea] = useState(' - ');
  const [FPArea, setFParea] = useState(' - ');

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
          {t('h213')}{' '}
        </Text>
      </View>
      <SafeAreaView style={styles.mainWrapper}>
        <Text style={styles.title}> {t('h010')} </Text>
        <TextInput
          placeholderTextColor={'#FFF'}
          maxLength={10}
          style={styles.input}
          keyboardType="numeric"
          onChangeText={newText => {
            setWarea(newText * 7.5);
            setFarea(newText * 75);
          }}
        />
      </SafeAreaView>
      {/*   <SafeAreaView style={styles.mainWrapper2}>
      <Text style={styles.title}> {t('h011')} </Text>
        <TextInput
          placeholderTextColor={'#FFF'}
          maxLength={10}
          style={styles.input}
          keyboardType="numeric"
          onChangeText={newt => {
            setFParea(newt * 80);
            setWParea(newt * 8.0);

            if (newt == '' || newt == 0) {
              setFParea('-');
              setWParea('-');
            }
          }}
        />
       
      </SafeAreaView> */}
      <View style={styles.maintitle}>
        <View style={styles.subview}>
          <Text style={styles.subtext}> {t('h016')}</Text>
        </View>
        <View style={styles.subview}>
          <Text style={styles.subtext}>{t('h017')} </Text>
        </View>
      </View>
      <View style={styles.maintitle}>
        <View style={styles.subview}>
          <Text style={styles.subtext}> {FArea} </Text>
        </View>
        <View style={styles.subview}>
          <Text style={styles.subtext}>{WArea} </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    flex: 1,
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
    marginLeft: 10,
    marginRight: 40,
    display: 'flex',
    justifyContent: 'center',
    lineHeight: moderateScale(50),
  },
  mainWrapper: {
    width: '100%',
    marginTop: 25,
    height: moderateScale(60),
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: moderateScale(14),
    color: '#1AB92A',
    fontSize: moderateScale(20),
  },

  title: {
    fontSize: moderateScale(15),
    color: '#1AB92A',
  },
  input: {
    width: moderateScale(120),
    height: moderateScale(40),
    borderBottomColor: 'white',
    borderBottomWidth: 1.3,
    backgroundColor: '#1AB92A',
    color: 'white',
    fontSize: moderateScale(20),
    borderRadius: 50,
    paddingHorizontal: 10,
  },
  maintitle: {
    width: '100%',
    padding: 10,
    height: moderateScale(100),
    flexDirection: 'row',
    fontSize: moderateScale(20),
    backgroundColor: '#1AB92A',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  subview: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
    textAlign: 'center',
  },
  subtext: {
    width: 110,
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
    fontSize: moderateScale(17),
  },
});
export default Feed;

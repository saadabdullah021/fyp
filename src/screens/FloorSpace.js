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

const FlourSpace = ({navigation}) => {
  const {t, i18n} = useTranslation();
  const [CArea, setCarea] = useState(' - ');
  const [OArea, setOarea] = useState(' - ');
  const [PArea, setParea] = useState(' - ');
  const [PCArea, setPCarea] = useState(' - ');
  const [POArea, setPOarea] = useState(' - ');
  const [PPArea, setPParea] = useState(' - ');
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
          onPress={() => navigation.replace('Housing')}
        />

        <Text numberOfLines={1} style={styles.headerTag}>
          {t('h009')}{' '}
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
            setCarea(newText * 3.5);
            setOarea(newText * 7);

            if (newText => 1 && newText < 50) {
              setParea(1);
            }
            if (newText >= 50 && newText < 100) {
              setParea(2);
            }
            if (newText >= 101 && newText < 150) {
              setParea(3);
            }
            if (newText >= 150 && newText < 200) {
              setParea(4);
            }
            12;
            if (newText >= 200 && newText < 250) {
              setParea(5);
            }
            if (newText >= 250 && newText < 300) {
              setParea(6);
            }
            if (newText >= 300 && newText < 350) {
              setParea(7);
            }
            if (newText >= 350 && newText < 400) {
              setParea(8);
            }
            if (newText >= 400 && newText < 450) {
              setParea(9);
            }
            if (newText >= 450 && newText < 500) {
              setParea(10);
            }
            if (newText == '' || newText == 0 || newText >= 500) {
              setParea('-');
            }
            if (newText == '' || newText == 0) {
              setOarea('-');
              setCarea('-');
            }
          }}
        />
      </SafeAreaView>
      <SafeAreaView style={styles.mainWrapper2}>
        <Text style={styles.title}> {t('h011')} </Text>
        <TextInput
          placeholderTextColor={'#FFF'}
          maxLength={10}
          style={styles.input}
          keyboardType="numeric"
          onChangeText={newt => {
            setPCarea(newt * 12);
            setPOarea(newt * 12);
            setPParea(newt);
            if (newt == '' || newt == 0) {
              setPCarea('-');
              setPOarea('-');
              setPParea('-');
            }
          }}
        />
      </SafeAreaView>
      <View style={styles.maintitle}>
        <View style={styles.subview}>
          <Text style={styles.subtext}> {t('h012')} </Text>
        </View>
        <View style={styles.subview}>
          <Text style={styles.subtext}> {t('h013')} </Text>
        </View>

        <View style={styles.subview}>
          <Text style={styles.subtext}>{t('h014')} </Text>
        </View>
      </View>
      <View style={styles.maintitle}>
        <View style={styles.subview}>
          <Text style={styles.subtext}> {CArea} </Text>
        </View>
        <View style={styles.subview}>
          <Text style={styles.subtext}>{OArea} </Text>
        </View>

        <View style={styles.subview}>
          <Text style={styles.subtext}> {PArea} </Text>
        </View>
      </View>
      <View style={styles.maintitle}>
        <View style={styles.subview}>
          <Text style={styles.subtext}>{PCArea}</Text>
        </View>
        <View style={styles.subview}>
          <Text style={styles.subtext}> {POArea}</Text>
        </View>

        <View style={styles.subview}>
          <Text style={styles.subtext}> {PPArea} </Text>
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
    marginRight: 50,

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

  mainWrapper2: {
    width: '100%',

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
    borderRadius:50,
    paddingHorizontal:10
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
export default FlourSpace;

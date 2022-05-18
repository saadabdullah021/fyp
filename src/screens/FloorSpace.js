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

const FlourSpace = ({navigation}) => {
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
          size={moderateScale(25)}
          onPress={() => navigation.replace('Housing')}
        />

        <Text numberOfLines={1} style={styles.headerTag}>
      گاۓ کے فرش کی جگہ کی معلومات         
        </Text>
      </View>
      <SafeAreaView style={styles.mainWrapper}>
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
        <Text style={styles.title}>گائے کی تعداد درج کریں :</Text>
      </SafeAreaView>
      <SafeAreaView style={styles.mainWrapper2}>
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
        <Text style={styles.title}> حاملہ گائے کی تعداد درج کریں :</Text>
      </SafeAreaView>
      <View style={styles.maintitle}>
        <View style={styles.subview}>
          <Text style={styles.subtext}>احاطہ شدہ علاقہ ( مربع میٹر)</Text>
        </View>
        <View style={styles.subview}>
          <Text style={styles.subtext}>کھلا علاقہ (مربع میٹر) </Text>
        </View>

        <View style={styles.subview}>
          <Text style={styles.subtext}>کھُرلی کی تعداد</Text>
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
    fontSize: moderateScale(24),
    width: '90%',
  },
  mainWrapper: {
    width: '100%',
    marginTop: 25,
    height: moderateScale(60),
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: moderateScale(14),
    color: 'white',
    fontSize: moderateScale(20),
  },

  mainWrapper2: {
    width: '100%',
    marginTop: 5,
    height: moderateScale(60),
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: moderateScale(14),
    color: 'white',
    fontSize: moderateScale(20),
  },
  title: {
    fontSize: moderateScale(20),
    color: 'white',
  },
  input: {
    width: moderateScale(120),
    borderBottomColor: 'white',
    borderBottomWidth: 1.3,

    color: 'white',
    fontSize: moderateScale(20),
    marginTop: -40,
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
import {Icon} from '@rneui/base';
import React, {useState, useMemo, useEffect} from 'react';
import {
  ImageBackground,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  View,
  SectionList,
} from 'react-native';

import Unorderedlist from 'react-native-unordered-list';

import DropDownPicker from 'react-native-dropdown-picker';

import {moderateScale} from '../assets/components/Dimensions';
const {width, height} = Dimensions.get('window');
import {useTranslation} from 'react-i18next';

const HousingMethods = ({navigation}) => {
  const {t, i18n} = useTranslation();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: t('h007'), value: t('h007')},
    {label: t('roofpattern2submenu1'), value: t('roofpattern2submenu1')},
    {label: t('roofpattern2submenu2'), value: t('roofpattern2submenu2')},
  ]);
  const [state, setState] = useState('');

  const changeCity = item => {
    setState(item);
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
          {t('h008')}{' '}
        </Text>
      </View>
      <View>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder={t('h007')}
          style={styles.dropdownmenu1}
          onChangeValue={item => changeCity(item)}
          placeholderStyle={{
            color: 'white',
            fontSize: moderateScale(22),

            fontWeight: 'bold',
          }}
          selectedItemContainerStyle={{
            borderColor: 'white',
            borderWidth: 1,
            borderRadius: 10,
            paddingLeft: 10,
            zIndex: 999,
          }}
          listMode="FLATLIST"
          listItemLabelStyle={{
            color: 'white',
            fontSize: moderateScale(20),
          }}
          categorySelectable={true}
          arrowIconStyle={{
            width: 30,
            zIndex: 999,
            backgroundColor: 'white',
            height: 30,
            borderRadius: 50,
          }}
          dropDownContainerStyle={{
            backgroundColor: '#1AB92A',
            marginTop: 20,
            borderWidth: 0,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderTopWidth: 0,
            color: 'white',
            fontSize: moderateScale(30),
            width: moderateScale(300),
            borderRadius: 30,
            padding: 10,
            zIndex: 9999,
          }}
        />
      </View>
      <View style={{marginVertical: '5%'}}>
        {state == t('roofpattern2submenu1') ? (
          <View style={styles.submenuContainer}>
            <View>
              <Image
                source={require('../assets/images/LooseHousing.png')}
                style={{maxWidth: '100%', maxHeight: '100%'}}
              />
            </View>
            <View style={styles.cardTag}>
              <Unorderedlist bulletUnicode={0x25aa} style={{color: 'white'}}>
                <Text style={styles.submenuText}>
                  {t('roofpattern2submenu1text1')}
                </Text>
              </Unorderedlist>
              <Unorderedlist bulletUnicode={0x25aa} style={{color: 'white'}}>
                <Text style={styles.submenuText}>
                  {t('roofpattern2submenu1text2')}
                </Text>
              </Unorderedlist>
            </View>
          </View>
        ) : state == t('roofpattern2submenu2') ? (
          <View style={styles.submenuContainer}>
            <View style={styles.cardTag1}>
              <Unorderedlist bulletUnicode={0x25aa} style={{color: 'white'}}>
                <Text style={styles.submenuText}>
                  {t('roofpattern2submenun2text1')}
                </Text>
              </Unorderedlist>
              <Unorderedlist bulletUnicode={0x25aa} style={{color: 'white'}}>
                <Text style={styles.submenuText}>
                  {t('roofpattern2submenun2text2')}
                </Text>
              </Unorderedlist>
              <Unorderedlist bulletUnicode={0x25aa} style={{color: 'white'}}>
                <Text style={styles.submenuText}>
                  {t('roofpattern2submenun2text3')}
                </Text>
              </Unorderedlist>
              <Unorderedlist bulletUnicode={0x25aa} style={{color: 'white'}}>
                <Text style={styles.submenuText}>
                  {t('roofpattern2submenun2text4')}
                </Text>
              </Unorderedlist>
              <Unorderedlist bulletUnicode={0x25aa} style={{color: 'white'}}>
                <Text style={styles.submenuText}>
                  {t('roofpattern2submenun2text5')}
                </Text>
              </Unorderedlist>
            </View>
          </View>
        ) : (
          <View style={{width: 300}}>
            <Text style={styles.invalid}>{t('R007')}</Text>
          </View>
        )}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    flex: 1,
  },

  submenuText: {
    color: 'black',
    fontSize: moderateScale(15),
    marginHorizontal: 10,
    borderRadius: 10,
    textAlign: 'justify',
  },
  cardTag: {
    fontFamily: 'urdu',
    width: '100%',
    height: 220,
    paddingTop: 20,
    paddingLeft: 5,
    paddingRight: 5,
    textAlign: 'center',
    backgroundColor: '#1AB92A',
  },
  cardTag1: {
    fontFamily: 'urdu',
    width: '100%',
    height: '100%',
    paddingTop: 20,
    paddingLeft: 5,
    paddingRight: 5,
    textAlign: 'center',
    backgroundColor: '#1AB92A',
  },
  submenuContainer: {
    borderRadius: moderateScale(10),
    alignItems: 'center',
    width: 300,
    alignContent: 'center',
    height: 400,
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
    fontSize: moderateScale(32),
    position: 'relative',
    marginLeft: 0,
    marginRight: 100,

    display: 'flex',
    justifyContent: 'center',
    lineHeight: moderateScale(50),
  },
  dropdownmenu1: {
    marginTop: 20,
    backgroundColor: '#1AB92A',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    width: moderateScale(300),
    borderRadius: 0,
    borderWidth: 0,
    fontSize: moderateScale(30),
    borderRadius: 30,
  },
  invalid: {
    backgroundColor: 'white',
    textAlign: 'center',
    padding: 20,
    marginVertical: 100,
    color: 'black',
  },
});
export default HousingMethods;

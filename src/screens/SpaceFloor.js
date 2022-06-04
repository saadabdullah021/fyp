import {Icon} from '@rneui/base';
import React, {useState, useMemo, useEffect} from 'react';
import {
  ImageBackground,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  View,
  Image,
  FlatList,
  TextInput,
  Alert,
} from 'react-native';
import Unorderedlist from 'react-native-unordered-list';

import DropDownPicker from 'react-native-dropdown-picker';

import {moderateScale} from '../assets/components/Dimensions';
const {width, height} = Dimensions.get('window');
import {useTranslation} from 'react-i18next';

const SpaceFloor = ({navigation}) => {
  const {t, i18n} = useTranslation();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: t('h007'), value: t('h007')},
    {label: t('floormenu1'), value: t('floormenu1')},
    {label: t('floormenu2'), value: t('floormenu2')},
  ]);

  const [open1, setOpen1] = useState(false);
  const [value1, setValue1] = useState(null);
  const [submenuitem, setSubMenuItems] = useState([
    {label: t('h007'), value: t('h007')},

    {label: t('floorsubmenu1'), value: t('floorsubmenu1')},
    {label: t('floorsubmenu2'), value: t('floorsubmenu2')},
  ]);
  const [state, setState] = useState('');
  const [submenustate, setSubMenuState] = useState('');
  const changeCity = item => {
    setState(item);
  };
  const changeCity1 = i => {
    setSubMenuState(i);
  };

  const [open2, setOpen2] = useState(false);
  const [value2, setValue2] = useState(null);
  const [submenuitem1, setSubMenuItems1] = useState([
    {label: t('h007'), value: t('h007')},

    {label: t('floorsubmenu3'), value: t('floorsubmenu3')},
    {label: t('floorsubmenu4'), value: t('floorsubmenu4')},
    {label: t('floorsubmenu5'), value: t('floorsubmenu5')},
    {label: t('floorsubmenu6'), value: t('floorsubmenu6')},
    {label: t('floorsubmenu7'), value: t('floorsubmenu7')},
  ]);

  const [submenustate1, setSubMenuState1] = useState('');
  const changeCity2 = i => {
    setSubMenuState1(i);
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
          {t('h216')}{' '}
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
        {state == t('floormenu1') ? (
          <>
            <View>
              <DropDownPicker
                open={open1}
                value={value1}
                items={submenuitem}
                setOpen={setOpen1}
                setValue={setValue1}
                setItems={setSubMenuItems}
                placeholder={t('h007')}
                style={styles.dropdownmenu2}
                onChangeValue={e => changeCity1(e)}
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
                }}
                listItemLabelStyle={{
                  color: 'white',
                  fontSize: moderateScale(20),
                }}
                categorySelectable={true}
                arrowIconStyle={{
                  width: 30,

                  backgroundColor: 'white',
                  height: 30,
                  borderRadius: 50,
                }}
                dropDownContainerStyle={{
                  backgroundColor: '#1AB92A',
                  marginTop: 10,
                  borderWidth: 0,
                  borderLeftWidth: 0,
                  borderRightWidth: 0,
                  borderTopWidth: 0,
                  color: 'white',
                  fontSize: moderateScale(30),
                  width: moderateScale(300),
                  borderRadius: 30,
                  padding: 10,
                  marginBottom: 10,
                }}
              />
            </View>

            {
              <View>
                {submenustate == t('floorsubmenu1') ? (
                  <View style={styles.submenuContainer}>
                    <View style={styles.cardTag}>
                      <Unorderedlist
                        bulletUnicode={0x25aa}
                        style={{color: 'white'}}>
                        <Text style={styles.submenuText}>
                          {t('floorsubmenu1text1')}
                        </Text>
                      </Unorderedlist>
                      <Unorderedlist bulletUnicode={0x25aa}>
                        <Text style={styles.submenuText}>
                          {t('floorsubmenu1text2')}
                        </Text>
                      </Unorderedlist>
                      <Unorderedlist bulletUnicode={0x25aa}>
                        <Text style={styles.submenuText}>
                          {t('floorsubmenu1text3')}
                        </Text>
                      </Unorderedlist>
                      <Unorderedlist bulletUnicode={0x25aa}>
                        <Text style={styles.submenuText}>
                          {t('floorsubmenu1text4')}
                        </Text>
                      </Unorderedlist>
                      <Unorderedlist bulletUnicode={0x25aa}>
                        <Text style={styles.submenuText}>
                          {t('floorsubmenu1text5')}
                        </Text>
                      </Unorderedlist>
                    </View>
                  </View>
                ) : submenustate == t('floorsubmenu2') ? (
                  <View style={styles.submenuContainer}>
                    <View style={styles.cardTag}>
                      <Unorderedlist
                        bulletUnicode={0x25aa}
                        style={{color: 'white'}}>
                        <Text style={styles.submenuText}>
                          {t('floorsubmenu2text1')}
                        </Text>
                      </Unorderedlist>
                      <Unorderedlist bulletUnicode={0x25aa}>
                        <Text style={styles.submenuText}>
                          {t('floorsubmenu2text2')}
                        </Text>
                      </Unorderedlist>
                      <Unorderedlist bulletUnicode={0x25aa}>
                        <Text style={styles.submenuText}>
                          {t('floorsubmenu2text3')}
                        </Text>
                      </Unorderedlist>
                      <Unorderedlist bulletUnicode={0x25aa}>
                        <Text style={styles.submenuText}>
                          {t('floorsubmenu2text4')}
                        </Text>
                      </Unorderedlist>
                      <Unorderedlist bulletUnicode={0x25aa}>
                        <Text style={styles.submenuText}>
                          {t('floorsubmenu2text5')}
                        </Text>
                      </Unorderedlist>
                    </View>
                  </View>
                ) : (
                  <View>
                    <Text style={styles.invalid}> {t('R007')} </Text>
                  </View>
                )}
              </View>
            }
          </>
        ) : state == t('floormenu2') ? (
          <>
            <View>
              <DropDownPicker
                open={open2}
                value={value2}
                items={submenuitem1}
                setOpen={setOpen2}
                setValue={setValue2}
                setItems={setSubMenuItems1}
                placeholder={t('h007')}
                style={styles.dropdownmenu2}
                onChangeValue={e => changeCity2(e)}
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
                }}
                listItemLabelStyle={{
                  color: 'white',
                  fontSize: moderateScale(20),
                }}
                categorySelectable={true}
                arrowIconStyle={{
                  width: 30,

                  backgroundColor: 'white',
                  height: 30,
                  borderRadius: 50,
                }}
                dropDownContainerStyle={{
                  backgroundColor: '#1AB92A',
                  marginTop: 10,
                  borderWidth: 0,
                  borderLeftWidth: 0,
                  borderRightWidth: 0,
                  borderTopWidth: 0,
                  color: 'white',
                  fontSize: moderateScale(30),
                  width: moderateScale(300),
                  borderRadius: 30,
                  padding: 10,
                  marginBottom: 10,
                }}
              />
            </View>

            {
              <View>
                {submenustate1 == t('floorsubmenu3') ? (
                  <View style={styles.submenuContainer}>
                    <View style={styles.cardTag}>
                      <Image
                        source={require('../assets/images/concreteflooring.png')}
                        style={{marginVertical: 10, height: 150}}
                      />
                      <Unorderedlist
                        bulletUnicode={0x25aa}
                        style={{color: 'white'}}>
                        <Text style={styles.submenuText}>
                          {t('floorsubmenu3text1')}
                        </Text>
                      </Unorderedlist>
                      <Unorderedlist bulletUnicode={0x25aa}>
                        <Text style={styles.submenuText}>
                          {t('floorsubmenu3text2')}
                        </Text>
                      </Unorderedlist>
                      <Unorderedlist bulletUnicode={0x25aa}>
                        <Text style={styles.submenuText}>
                          {t('floorsubmenu3text3')}
                        </Text>
                      </Unorderedlist>
                    </View>
                  </View>
                ) : submenustate1 == t('floorsubmenu4') ? (
                  <View style={styles.submenuContainer}>
                    <View style={styles.cardTag}>
                      <Unorderedlist
                        bulletUnicode={0x25aa}
                        style={{color: 'white'}}>
                        <Text style={styles.submenuText}>
                          {t('floorsubmenu4text1')}
                        </Text>
                      </Unorderedlist>
                      <Unorderedlist bulletUnicode={0x25aa}>
                        <Text style={styles.submenuText}>
                          {t('floorsubmenu4text2')}
                        </Text>
                      </Unorderedlist>
                      <Unorderedlist bulletUnicode={0x25aa}>
                        <Text style={styles.submenuText}>
                          {t('floorsubmenu4text3')}
                        </Text>
                      </Unorderedlist>
                    </View>
                  </View>
                ) : submenustate1 == t('floorsubmenu5') ? (
                  <View style={styles.submenuContainer}>
                    <View style={styles.cardTag}>
                      <Unorderedlist
                        bulletUnicode={0x25aa}
                        style={{color: 'white'}}>
                        <Text style={styles.submenuText}>
                          {t('floorsubmenu5text1')}
                        </Text>
                      </Unorderedlist>
                      <Unorderedlist bulletUnicode={0x25aa}>
                        <Text style={styles.submenuText}>
                          {t('floorsubmenu5text2')}
                        </Text>
                      </Unorderedlist>
                    </View>
                  </View>
                ) : submenustate1 == t('floorsubmenu6') ? (
                  <View style={styles.cardTag}>
                    <Image
                      source={require('../assets/images/bricksflooring.png')}
                      style={{marginVertical: 10, height: 150}}
                    />
                    <Unorderedlist
                      bulletUnicode={0x25aa}
                      style={{color: 'white'}}>
                      <Text style={styles.submenuText}>
                        {t('floorsubmenu6text1')}
                      </Text>
                    </Unorderedlist>
                    <Unorderedlist bulletUnicode={0x25aa}>
                      <Text style={styles.submenuText}>
                        {t('floorsubmenu6text2')}
                      </Text>
                    </Unorderedlist>
                    <Unorderedlist bulletUnicode={0x25aa}>
                      <Text style={styles.submenuText}>
                        {t('floorsubmenu6text3')}
                      </Text>
                    </Unorderedlist>
                  </View>
                ) : submenustate1 == t('floorsubmenu7') ? (
                  <View style={styles.submenuContainer}>
                    <View style={styles.cardTag}>
                      <Unorderedlist
                        bulletUnicode={0x25aa}
                        style={{color: 'white'}}>
                        <Text style={styles.submenuText}>
                          {t('floorsubmenu7text1')}
                        </Text>
                      </Unorderedlist>
                      <Unorderedlist bulletUnicode={0x25aa}>
                        <Text style={styles.submenuText}>
                          {t('floorsubmenu7text2')}
                        </Text>
                      </Unorderedlist>
                      <Unorderedlist bulletUnicode={0x25aa}>
                        <Text style={styles.submenuText}>
                          {t('floorsubmenu7text3')}
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
            }
          </>
        ) : (
          <View style={{width: 300}}>
            <Text style={styles.invalid}> {t('R007')} </Text>
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

  cardTag: {
    fontFamily: 'urdu',
    width: '100%',
    height: 350,
    paddingTop: 20,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 10,
    textAlign: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    marginVertical: 50,
  },
  invalid: {
    backgroundColor: 'white',
    textAlign: 'center',
    padding: 20,
    marginVertical: 100,
    color: 'black',
  },
  submenuText: {
    color: 'black',
    fontSize: moderateScale(15),
    marginHorizontal: 10,
    borderRadius: 10,
    textAlign: 'justify',
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
  card: {
    opacity: 0,
  },
  submenuContainer: {
    borderRadius: moderateScale(10),
    alignItems: 'center',
    width: '100%',
    alignContent: 'center',
    height: 310,
    backgroundColor: 'transparent',
  },
  headerTag: {
    color: 'white',
    fontFamily: 'kasheeda',
    fontSize: moderateScale(32),
    position: 'relative',
    marginRight: 250,
    display: 'flex',
    justifyContent: 'center',
    lineHeight: moderateScale(50),
  },
  dropdownmenu2: {
    marginTop: 10,
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
    marginBottom: 10,
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
});
export default SpaceFloor;

import {Icon} from '@rneui/base';
import React, {useState, useMemo, useEffect, useRef} from 'react';
import {
  ImageBackground,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  View,
  SectionList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Alert,
  Animated,
} from 'react-native';

import Unorderedlist from 'react-native-unordered-list';

import DropDownPicker from 'react-native-dropdown-picker';

import {moderateScale} from '../assets/components/Dimensions';
const {width, height} = Dimensions.get('window');
import {useTranslation} from 'react-i18next';

const GrassFodder = ({navigation}) => {
  const [completeScrollBarHeight, setCompleteScrollBarHeight] = useState(1);
  const [visibleScrollBarHeight, setVisibleScrollBarHeight] = useState(0);
  const scrollIndicator = useRef(new Animated.Value(0)).current;

  const scrollIndicatorSize =
    completeScrollBarHeight > visibleScrollBarHeight
      ? (visibleScrollBarHeight * visibleScrollBarHeight) /
        completeScrollBarHeight
      : visibleScrollBarHeight;

  const difference =
    visibleScrollBarHeight > scrollIndicatorSize
      ? visibleScrollBarHeight - scrollIndicatorSize
      : 1;

  const scrollIndicatorPosition = Animated.multiply(
    scrollIndicator,
    visibleScrollBarHeight / completeScrollBarHeight,
  ).interpolate({
    extrapolate: 'clamp',
    inputRange: [0, difference],
    outputRange: [0, difference],
  });

  const onContentSizeChange = (_, contentHeight) =>
    setCompleteScrollBarHeight(contentHeight);

  const onLayout = ({
    nativeEvent: {
      layout: {height},
    },
  }) => {
    setVisibleScrollBarHeight(height);
  };
  const {t, i18n} = useTranslation();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: t('h007'), value: t('h007')},
    {label: t('foddermenu3submenu1'), value: t('foddermenu3submenu1')},
    {label: t('foddermenu3submenu2'), value: t('foddermenu3submenu2')},
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
          {t('foddermenu3')}{' '}
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
        {state == t('foddermenu3submenu1') ? (
          <SafeAreaView style={styles.container}>
            <ScrollView
              style={styles.scrollView}
              contentContainerStyle={{paddingRight: 14}}
              onContentSizeChange={onContentSizeChange}
              onLayout={onLayout}
              onScroll={Animated.event(
                [{nativeEvent: {contentOffset: {y: scrollIndicator}}}],
                {useNativeDriver: false},
              )}
              scrollEventThrottle={16}
              showsVerticalScrollIndicator={false}>
              <View>
                <View style={{paddingHorizontal: 25, paddingBottom: 0}}>
                  <Image
                    style={{padding: 5}}
                    source={require('../assets/images/Bajra2.png')}
                  />
                </View>
                <Text style={styles.title}>
                  {t('foddermenu2submenu2title1')}
                </Text>
                <Unorderedlist bulletUnicode={0x25aa} style={{color: 'white'}}>
                  <Text style={styles.submenuText}>
                    {t('foddermenu3submenu1text1')}
                  </Text>
                </Unorderedlist>

                <Unorderedlist bulletUnicode={0x25aa} style={{color: 'white'}}>
                  <Text style={styles.submenuText}>
                    {t('foddermenu3submenu1text2')}
                  </Text>
                </Unorderedlist>
                <Unorderedlist bulletUnicode={0x25aa} style={{color: 'white'}}>
                  <Text style={styles.submenuText}>
                    {t('foddermenu3submenu1text3')}
                  </Text>
                </Unorderedlist>
                <Unorderedlist bulletUnicode={0x25aa} style={{color: 'white'}}>
                  <Text style={styles.submenuText}>
                    {t('foddermenu3submenu1text4')}
                  </Text>
                </Unorderedlist>
                <Unorderedlist bulletUnicode={0x25aa} style={{color: 'white'}}>
                  <Text style={styles.submenuText}>
                    {t('foddermenu3submenu1text5')}
                  </Text>
                </Unorderedlist>
                <Unorderedlist bulletUnicode={0x25aa} style={{color: 'white'}}>
                  <Text style={styles.submenuText}>
                    {t('foddermenu3submenu1text6')}
                  </Text>
                </Unorderedlist>
                <Unorderedlist bulletUnicode={0x25aa} style={{color: 'white'}}>
                  <Text style={styles.submenuText}>
                    {t('foddermenu3submenu1text7')}
                  </Text>
                </Unorderedlist>
                <Unorderedlist bulletUnicode={0x25aa} style={{color: 'white'}}>
                  <Text style={styles.submenuText}>
                    {t('foddermenu3submenu1text8')}
                  </Text>
                </Unorderedlist>
                <View style={{paddingHorizontal: 30, paddingBottom: 10}}>
                  <Image
                    style={{}}
                    source={require('../assets/images/Bajra1.png')}
                  />
                </View>
              </View>
            </ScrollView>
          </SafeAreaView>
        ) : state == t('foddermenu3submenu2') ? (
          <SafeAreaView style={styles.container}>
            <ScrollView
              style={styles.scrollView}
              contentContainerStyle={{paddingRight: 14}}
              onContentSizeChange={onContentSizeChange}
              onLayout={onLayout}
              onScroll={Animated.event(
                [{nativeEvent: {contentOffset: {y: scrollIndicator}}}],
                {useNativeDriver: false},
              )}
              scrollEventThrottle={16}
              showsVerticalScrollIndicator={false}>
              <View>
                <Text style={styles.title}>{t('foddermenu3submenu2')}</Text>
                <View
                  style={{
                    paddingHorizontal: 30,
                    paddingBottom: 20,
                    paddingTop: 10,
                  }}>
                  <Image
                    source={require('../assets/images/Guinea.png')}
                    style={{height: 200}}
                  />
                </View>
                <Unorderedlist bulletUnicode={0x25aa} style={{color: 'white'}}>
                  <Text style={styles.submenuText}>
                    {t('foddermenu3submenu2text1')}
                  </Text>
                </Unorderedlist>
                <Unorderedlist bulletUnicode={0x25aa} style={{color: 'white'}}>
                  <Text style={styles.submenuText}>
                    {t('foddermenu3submenu2text2')}
                  </Text>
                </Unorderedlist>
                <Unorderedlist bulletUnicode={0x25aa} style={{color: 'white'}}>
                  <Text style={styles.submenuText}>
                    {t('foddermenu3submenu2text3')}
                  </Text>
                </Unorderedlist>
                <Unorderedlist bulletUnicode={0x25aa} style={{color: 'white'}}>
                  <Text style={styles.submenuText}>
                    {t('foddermenu3submenu2text4')}
                  </Text>
                </Unorderedlist>
                <Unorderedlist bulletUnicode={0x25aa} style={{color: 'white'}}>
                  <Text style={styles.submenuText}>
                    {t('foddermenu3submenu2text5')}
                  </Text>
                </Unorderedlist>
                <Unorderedlist bulletUnicode={0x25aa} style={{color: 'white'}}>
                  <Text style={styles.submenuText}>
                    {t('foddermenu3submenu2text6')}
                  </Text>
                </Unorderedlist>
                <Unorderedlist bulletUnicode={0x25aa} style={{color: 'white'}}>
                  <Text style={styles.submenuText}>
                    {t('foddermenu3submenu2text7')}
                  </Text>
                </Unorderedlist>
                <Unorderedlist bulletUnicode={0x25aa} style={{color: 'white'}}>
                  <Text style={styles.submenuText}>
                    {t('foddermenu3submenu2text8')}
                  </Text>
                </Unorderedlist>
                <Unorderedlist bulletUnicode={0x25aa} style={{color: 'white'}}>
                  <Text style={styles.submenuText}>
                    {t('foddermenu3submenu2text9')}
                  </Text>
                </Unorderedlist>
                <Unorderedlist bulletUnicode={0x25aa} style={{color: 'white'}}>
                  <Text style={styles.submenuText}>
                    {t('foddermenu3submenu2text10')}
                  </Text>
                </Unorderedlist>
                <Unorderedlist bulletUnicode={0x25aa} style={{color: 'white'}}>
                  <Text style={styles.submenuText}>
                    {t('foddermenu3submenu2text11')}
                  </Text>
                </Unorderedlist>
                <Unorderedlist bulletUnicode={0x25aa} style={{color: 'white'}}>
                  <Text style={styles.submenuText}>
                    {t('foddermenu3submenu2text12')}
                  </Text>
                </Unorderedlist>

                <View
                  style={{
                    paddingHorizontal: 30,
                    paddingBottom: 20,
                    paddingTop: 10,
                  }}>
                  <Image
                    source={require('../assets/images/sorghum2.png')}
                    style={{height: 200}}
                  />
                </View>
              </View>
            </ScrollView>
          </SafeAreaView>
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
    height: '100%',
  },

  scrollView: {
    backgroundColor: 'white',
    width: 380,
    paddingHorizontal: 10,
    overflow: 'hidden',
    borderRadius: 10,
    padding: 10,

    marginBottom: 120,
  },
  title: {
    fontSize: moderateScale(25),
    textAlign: 'center',
    color: 'black',
    padding: 10,
  },
  customScrollBar: {
    backgroundColor: '#ccc',
    borderRadius: 3,
    width: 6,
  },
  customScrollBarBackground: {
    backgroundColor: '#232323',
    borderRadius: 3,
    height: '100%',
    width: 6,
  },

  submenuText: {
    color: 'black',
    fontSize: moderateScale(15),
    marginHorizontal: 10,

    textAlign: 'justify',
  },
  submenuText1: {
    color: 'black',
    fontSize: moderateScale(15),
    marginHorizontal: 10,

    textAlign: 'justify',
    paddingBottom: 20,
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
export default GrassFodder;

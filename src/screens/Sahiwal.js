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

const Sahiwal = ({navigation}) => {
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
          {t('cow1Title')}{' '}
        </Text>
      </View>
      <View style={{marginVertical: '5%'}}>
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
            <View
              style={{
                marginHorizontal: 20,
              }}>
              <Image
                style={{resizeMode: 'cover', height: 200, width: 300}}
                source={require('../assets/images/Sahiwal.png')}
              />
            </View>
            <View>
              <Text style={styles.title}>{t('cow1Title')}</Text>
              <Text style={styles.title}>{t('cow1Title1')}</Text>
              <Unorderedlist bulletUnicode={0x25aa} style={{color: 'white'}}>
                <Text style={styles.submenuText}>{t('cow1text1')}</Text>
              </Unorderedlist>

              <Text style={styles.title}>{t('cow1Title2')}</Text>
              <Unorderedlist bulletUnicode={0x25aa} style={{color: 'white'}}>
                <Text style={styles.submenuText}>{t('cow1text2')}</Text>
              </Unorderedlist>
              <Unorderedlist bulletUnicode={0x25aa} style={{color: 'white'}}>
                <Text style={styles.submenuText}>{t('cow1text3')}</Text>
              </Unorderedlist>
              <Unorderedlist bulletUnicode={0x25aa} style={{color: 'white'}}>
                <Text style={styles.submenuText}>{t('cow1text4')}</Text>
              </Unorderedlist>
              <Unorderedlist bulletUnicode={0x25aa} style={{color: 'white'}}>
                <Text style={styles.submenuText}>{t('cow1text5')}</Text>
              </Unorderedlist>
              <Unorderedlist bulletUnicode={0x25aa} style={{color: 'white'}}>
                <Text style={styles.submenuText}>{t('cow1text6')}</Text>
              </Unorderedlist>
              <Unorderedlist bulletUnicode={0x25aa} style={{color: 'white'}}>
                <Text style={styles.submenuText}>{t('cow1text7')}</Text>
              </Unorderedlist>
              <Unorderedlist bulletUnicode={0x25aa} style={{color: 'white'}}>
                <Text style={styles.submenuText1}>{t('cow1text8')}</Text>
              </Unorderedlist>
              <Unorderedlist bulletUnicode={0x25aa} style={{color: 'white'}}>
                <Text style={styles.submenuText1}>{t('cow1text9')}</Text>
              </Unorderedlist>
              <Unorderedlist bulletUnicode={0x25aa} style={{color: 'white'}}>
                <Text style={styles.submenuText1}>{t('cow1text10')}</Text>
              </Unorderedlist>
              <Unorderedlist bulletUnicode={0x25aa} style={{color: 'white'}}>
                <Text style={styles.submenuText1}>{t('cow1text11')}</Text>
              </Unorderedlist>
              <Unorderedlist bulletUnicode={0x25aa} style={{color: 'white'}}>
                <Text style={styles.submenuText1}>{t('cow1text12')}</Text>
              </Unorderedlist>
              <Unorderedlist bulletUnicode={0x25aa} style={{color: 'white'}}>
                <Text style={styles.submenuText1}>{t('cow1text13')}</Text>
              </Unorderedlist>
              <Unorderedlist bulletUnicode={0x25aa} style={{color: 'white'}}>
                <Text style={styles.submenuText1}>{t('cow1text14')}</Text>
              </Unorderedlist>
              <Unorderedlist bulletUnicode={0x25aa} style={{color: 'white'}}>
                <Text style={styles.submenuText1}>{t('cow1text15')}</Text>
              </Unorderedlist>
              <Unorderedlist bulletUnicode={0x25aa} style={{color: 'white'}}>
                <Text style={styles.submenuText1}>{t('cow1text16')}</Text>
              </Unorderedlist>
              <Unorderedlist bulletUnicode={0x25aa} style={{color: 'white'}}>
                <Text style={styles.submenuText1}>{t('cow1text17')}</Text>
              </Unorderedlist>
              <Unorderedlist bulletUnicode={0x25aa} style={{color: 'white'}}>
                <Text style={styles.submenuText1}>{t('cow1text18')}</Text>
              </Unorderedlist>
              <Unorderedlist bulletUnicode={0x25aa} style={{color: 'white'}}>
                <Text style={styles.submenuText1}>{t('cow1text19')}</Text>
              </Unorderedlist>
            </View>
          </ScrollView>
        </SafeAreaView>
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
    display: 'flex',

    marginBottom: 60,
  },
  title: {
    fontSize: moderateScale(25),
    textAlign: 'center',
    color: 'black',
    paddingVertical: 5,
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
export default Sahiwal;

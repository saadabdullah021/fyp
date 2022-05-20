import {Icon} from '@rneui/base';
import React, {useState, useMemo, useEffect} from 'react';
import {
  ImageBackground,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  View,
  FlatList,
  TextInput,
  Alert,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {SafeAreaView} from 'react-native-safe-area-context';
import {moderateScale} from '../assets/components/Dimensions';
const {width, height} = Dimensions.get('window');
const HousingMethods = ({navigation}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'چھت کا نمونہ', value: 'چھت کا نمونہ'},
    {label: 'چھت کا مواد', value: 'چھت کا مواد'},
  ]);
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
          گاۓ کی رہائش کے طریقے
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
          placeholder="ایک آپشن منتخب کریں-"
          style={styles.dropdownmenu1}
          placeholderStyle={{
            color: 'white',
            fontSize: moderateScale(22),
            textAlign: 'auto',
            fontWeight: 'bold',
          }}
          listItemLabelStyle={{
            color: 'white',
            fontSize: moderateScale(20),
          }}
          arrowIconStyle={{
            width: 20,
            backgroundColor: 'white',
            height: 20,
            borderRadius: 10,
          }}
          dropDownContainerStyle={{
            backgroundColor: '#1AB92A',
            marginTop: 20,
            borderRadius: 0,
            borderWidth: 0,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderTopWidth: 0,

            fontSize: moderateScale(30),
            width: moderateScale(300),
          }}
        />
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
  dropdownmenu1: {
    marginTop: 20,
    backgroundColor: '#1AB92A',
    color: 'white',
    textAlign: 'center',
    position: 'relative',
    width: moderateScale(300),
    borderRadius: 0,
    borderWidth: 0,
    fontSize: moderateScale(30),
  },
});
export default HousingMethods;

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';
import Guidance from '../screens/Guidance';
import GuidanceDetail from '../screens/GuidanceDetail';
import Health from '../screens/Health';
import Information from '../screens/Information';
import HealthSymptoms from '../screens/HealthSymptoms';
import HealthHistory from '../screens/HealthHistory';
import Result from '../screens/Result';
import Housing from '../screens/Housing';
import FlourSpace from '../screens/FloorSpace';
import Roof from '../screens/Roof';
import Feed from '../screens/Feed';
import HousingMethods from '../screens/HousingMethods';
import SpaceFloor from '../screens/SpaceFloor';
import BuildingUnit from '../screens/BuildingUnit';
import Fodder from '../screens/Fodder';
import LegumeFodder from '../screens/LegumeFodder';
import CerealFodder from '../screens/CerealFodder';
import GrassFodder from '../screens/GrassFodder';
import TreeFodder from '../screens/TreeFodder';
import Breed from '../screens/Breed';
import Sahiwal from '../screens/Sahiwal';
import RedSindhi from '../screens/RedSindhi';
import Cholistani from '../screens/Cholistani';
import Achai from '../screens/Achai';
export default MainNav = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Guidance" component={Guidance} />
        <Stack.Screen name="GuidanceDetail" component={GuidanceDetail} />
        <Stack.Screen name="Health" component={Health} />
        <Stack.Screen name="Information" component={Information} />
        <Stack.Screen name="HealthSymptoms" component={HealthSymptoms} />
        <Stack.Screen name="HealthHistory" component={HealthHistory} />
        <Stack.Screen name="Result" component={Result} />
        <Stack.Screen name="Housing" component={Housing} />
        <Stack.Screen name="FlourSpace" component={FlourSpace} />
        <Stack.Screen name="Roof" component={Roof} />
        <Stack.Screen name="Feed" component={Feed} />
        <Stack.Screen name="HousingMethods" component={HousingMethods} />
        <Stack.Screen name="SpaceFloor" component={SpaceFloor} />

        <Stack.Screen name="BuildingUnit" component={BuildingUnit} />
        <Stack.Screen name="Fodder" component={Fodder} />
        <Stack.Screen name="LegumeFodder" component={LegumeFodder} />
        <Stack.Screen name="CerealFodder" component={CerealFodder} />
        <Stack.Screen name="GrassFodder" component={GrassFodder} />
        <Stack.Screen name="TreeFodder" component={TreeFodder} />
        <Stack.Screen name="Breed" component={Breed} />
        <Stack.Screen name="Sahiwal" component={Sahiwal} />
        <Stack.Screen name="RedSindhi" component={RedSindhi} />
        <Stack.Screen name="Cholistani" component={Cholistani} />
        <Stack.Screen name="Achai" component={Achai} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

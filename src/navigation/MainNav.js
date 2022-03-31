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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

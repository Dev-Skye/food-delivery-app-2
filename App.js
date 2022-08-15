import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';
import {useFonts} from "expo-font";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { OnBoarding, SignIn, SignUp, ForgotPassword, Otp } from './screens'

const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    "Poppins-Black": require("./assets/fonts/Poppins-Black.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf")
});

if (!fontsLoaded){
    return <AppLoading/>
}
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={"OnBoarding"}
      >
        <Stack.Screen
                    name="OnBoarding"
                    component={OnBoarding}
                />

                <Stack.Screen
                    name="SignIn"
                    component={SignIn}
                />

                <Stack.Screen
                    name="SignUp"
                    component={SignUp}
                />

                <Stack.Screen
                    name="ForgotPassword"
                    component={ForgotPassword}
                />

                <Stack.Screen
                    name="Otp"
                    component={Otp}
                />
      </Stack.Navigator>
    </NavigationContainer>
     );
}



import React from "react";
import { StyleSheet, Text, View } from "react-native";
// import { Stack } from "expo-router";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


import DrawerContent from './drawerContent';
import LoginScreen from './index';
import SignupScreen from './sign-up';
import ForgotPasswordScreen from './forgot-password';
import HomeScreen from './home';
import CartScreen from './cart';
import CheckoutScreen from './checkout';
import CheckoutSuccessScreen from './checkoutSuccess';
import ProfileScreen from "./profile";
import SettingsScreen from "./settings";
import { Provider } from 'react-redux';
import store from './redux/store';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();




const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />} independent={true}>
      <Drawer.Screen name="home" component={HomeScreen} options={{ drawerLabel: 'Home' }} />
      <Drawer.Screen name="cart" component={CartScreen} options={{ drawerLabel: 'Cart' }} />
      
      <Drawer.Screen name="profile" component={ProfileScreen} options={{ drawerLabel: 'Profile' }} />
      <Drawer.Screen name="my-order" component={SettingsScreen} options={{ drawerLabel: 'My Order' }} />
      <Drawer.Screen name="settings" component={SettingsScreen} options={{ drawerLabel: 'Settings' }} />  
      {/* <Drawer.Screen name="checkout" component={CheckoutStackNavigator} options={{ drawerLabel: () => null, title: null, drawerIcon: () => null }} />     */}
    </Drawer.Navigator>
  );
};
// const RootLayout = () => {
//   return (
//     <View style={styles.container}>
//       <Stack>
//         <Stack.Screen name="index" options={{ headerShown: false }} />
//         <Stack.Screen name="sign-up" options={{ headerShown: false }} />
//         <Stack.Screen name="forgot-password" options={{ headerShown: false }} />
//       </Stack>
//     </View>
//   );
// };


const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="login" independent={true}>
      <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="sign-up" component={SignupScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="forgot-password" component={ForgotPasswordScreen} options={{ headerShown: false }} />
      <Stack.Screen name="home" component={DrawerNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="checkout" component={CheckoutScreen} options={{ headerShown: true, headerBackTitle: 'Cart' }} />
      <Stack.Screen name='checkout-success' component={CheckoutSuccessScreen} options={{ headerShown: false }} />
    </Stack.Navigator>  
  );
}

function RootLayout() {
  return (
    <Provider store={store}>
        <NavigationContainer independent={true}>
          <AuthNavigator />
        </NavigationContainer>
    </Provider>    
  );
}

export default RootLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  hamburger: {
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 1001,
  },
  hamburgerText: {
    fontSize: 30,
    fontWeight: "bold",
    backgroundColor: "#fff",
    color: "#6B6B6B",
    borderRadius: 30,
  },

  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
});

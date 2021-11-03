import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Cart from './screens/Cart';
import Home from './screens/Home';
import Login from './screens/Login';
import SignUp from './screens/signup';
import {FontAwesome} from '@expo/vector-icons';


const Tab = createBottomTabNavigator();
export default function App() {
  
    return (
    
    <NavigationContainer>
    <Tab.Navigator
       screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home';
          } else if (route.name === 'Cart') {
            iconName = focused ? 'cart-plus' : 'cart-plus';
          } else if (route.name=='Login'){
            iconName = focused ? 'cart-plus' : 'cart-plus';
          } if (route.name=='Login'){
            iconName = focused ? 'user-plus' : 'user-plus';
          }

          // You can return any component that you like here!
          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="SignUp" component={SignUp} />
    </Tab.Navigator>
  </NavigationContainer>

  

    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

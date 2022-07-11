import React from 'react';
import {Provider} from 'react-redux';

import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './src/screen/HomeScreen';
import ShoppingCart from './src/screen/ShoppingCart/ShoppingCartScreen';

import {store} from './src/store/redux/store';

const Tab = createBottomTabNavigator();

function Root() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Cart" component={ShoppingCart} />
    </Tab.Navigator>
  );
}

const Home = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ShoppingCart" component={ShoppingCart} options={{title:"Shopping Cart"}} />
    </Stack.Navigator>
  );
};

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Home></Home>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

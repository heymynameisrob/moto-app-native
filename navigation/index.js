import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Feather } from '@expo/vector-icons';
import { defaultScreenOptions, childScreenOptions, modalScreenOptions, mainTabBarStyle } from './styles';

// Routes
import { Home } from '../screens/home';
import { Details, Details2 } from '../screens/placeholder';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        ...mainTabBarStyle
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
          tabBarIcon: ({color}) => <Feather name="home" size={24} color={color} /> 
          }} 
        />      
    </Tab.Navigator>
  );
}

export const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='mainTabs'  
        screenOptions={defaultScreenOptions}      
      >
        <Stack.Screen
          name="mainTabs"
          component={MainTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="details" 
          component={Details}           
          options={{ title: "Details", ...childScreenOptions}} 
        />
        <Stack.Screen 
          name="details2" 
          component={Details2}           
          options={{ title: "Details", ...modalScreenOptions}} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

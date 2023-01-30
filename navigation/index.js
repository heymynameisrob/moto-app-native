import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Feather } from '@expo/vector-icons';
import { defaultScreenOptions, childScreenOptions, modalScreenOptions, mainTabBarStyle } from './styles';

// Routes
import { Home } from '../screens/Home';
import { Details, Details2 } from '../screens/placeholder';
import { Welcome, Login, Onboarding } from '../screens/Onboarding';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const UnauthedNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='welcome'
        screenOptions={defaultScreenOptions}
      >
        <Stack.Screen

          name="welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
       <Stack.Screen
          name="login"
          component={Login}  
          options={{ title: '' }}        
        />      
        <Stack.Group screenOptions={{ }}>
          <Stack.Screen
            name="onboarding"
            component={Onboarding}
            options={{ title: '' }}
          />
          {/* <Stack.Screen
            name="onboardingName"
            component={OnboardingName}
            options={{ title: 'Enter your name' }}
          />
          <Stack.Screen
            name="onboardingProfile"
            component={OnboardingProfile}
            options={{ headerShown: false }}
          /> */}
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );  
};
      
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

export const AuthedNavigation = () => {
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
       <Stack.Group screenOptions={childScreenOptions}>
        <Stack.Screen 
          name="details" 
          component={Details}           
          options={{ title: "Details", ...childScreenOptions}} 
        />
        </Stack.Group>
       <Stack.Group screenOptions={modalScreenOptions}>
        <Stack.Screen 
          name="details2" 
          component={Details2}           
          options={{ title: "Details", }} 
        />
       </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};  

export const RootNavigation = () => {
  const isAuthed = false; // Replace with Firebase Hook
  return(
    isAuthed ? <AuthedNavigation /> : <UnauthedNavigation />
  )
  
}
    
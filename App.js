import React from 'react';
import { View, Text, Button } from 'react-native';
import {  SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colour, fontSize } from './styles/tokens';
import { defaultHeaderStyle, headerBackTitleStyle, lighterHeaderStyle } from './styles/navigation';
import { MainTabs } from './components/navigation';

const Stack = createNativeStackNavigator();

const defaultScreenOptions = {
  ...defaultHeaderStyle,
  headerBackTitleVisible: false,
  headerBackTitle: 'Back',
 ...headerBackTitleStyle
};

const Details = ({ navigation }) => {
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colour.grey[900] }}>
      <Text style={{ fontSize: fontSize.largeTitle.size, lineHeight: fontSize.largeTitle.lineHeight, fontWeight: fontSize.largeTitle.weight, color: colour.grey[0] }}>Details</Text>
      <Button title="Go to Details 2" onPress={() => { navigation.navigate("details2") }} />
    </View>
  );
}
const Details2 = ({ navigation }) => {
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colour.grey[800] }}>
      <Text style={{ fontSize: fontSize.largeTitle.size, lineHeight: fontSize.largeTitle.lineHeight, fontWeight: fontSize.largeTitle.weight, color: colour.grey[0] }}>Details</Text>
      <Button title="Go to Home" onPress={() => { navigation.navigate("mainTabs") }} />
    </View>
  );
}

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='mainTabs'
        screenOptions={{
          cardStyle: { backgroundColor: colour.grey[900] }
        }}
      >
        <Stack.Screen
          name="mainTabs"
          component={MainTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="details" 
          component={Details}           
          options={{ title: "Details", ...defaultScreenOptions}} 
        />
        <Stack.Screen 
          name="details2" 
          component={Details2}           
          options={{ title: "Details", ...lighterHeaderStyle, ...headerBackTitleStyle, presentation: 'modal' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

function App() {
  return (
    <SafeAreaProvider style={{ flex: 1, backgroundColor: colour.grey[900] }}>
      <StatusBar style="light" />
      <Navigation />
    </SafeAreaProvider>
  );
}

export default App;
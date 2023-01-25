import React from 'react';
import { View, Text, Button } from 'react-native';
import { colour } from '../styles/tokens';

export const Details = ({ navigation }) => {
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colour.grey[900] }}>
      <Text>Details</Text>
      <Button title="Go to Details 2" onPress={() => { navigation.navigate("details2") }} />
    </View>
  );
}
export const Details2 = ({ navigation }) => {
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colour.grey[800] }}>
      <Text>Details 2</Text>
      <Button title="Go to Home" onPress={() => { navigation.navigate("mainTabs") }} />
    </View>
  );
}

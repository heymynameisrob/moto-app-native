import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { PrimaryButton, SecondaryButton } from '../../components/controls';
import { colour, fontSize } from '../../styles/tokens';

export const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World!</Text>
      <SecondaryButton title="Go to Details 2" onPress={() => { navigation.navigate("details2") }} />
      <PrimaryButton title="Go to Details" onPress={() => { navigation.navigate("details") }} />      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colour.grey[900]
  },
  text: {
    fontSize: fontSize.largeTitle.size,
    lineHeight: fontSize.largeTitle.lineHeight,
    fontWeight: fontSize.largeTitle.weight,
    color: colour.grey[0]
  }
});


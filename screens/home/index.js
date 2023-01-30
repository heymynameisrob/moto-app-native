import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { ButtonContainer, PrimaryButton, SecondaryButton } from '../../components/controls';
import { Heading } from '../../components/type';
import { colour, fontSize } from '../../styles/tokens';

export const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Heading>Hello World</Heading>
      <ButtonContainer>
        <SecondaryButton title="Go to Details 2" onPress={() => { navigation.navigate("details2") }} />
        <PrimaryButton title="Go to Details" onPress={() => { navigation.navigate("details") }} />      
      </ButtonContainer>
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


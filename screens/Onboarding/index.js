import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ButtonContainer, PrimaryButton, SecondaryButton } from '../../components/controls';
import { Container, VStack } from '../../components/layout';
import { Body, Heading } from '../../components/type';
import { colour, spacing } from '../../styles/tokens';

export const Welcome = ({ navigation }) => {
  return (
    <Container>
      <VStack style={ styles.container }>
        <Heading>Welcome</Heading>
        <Body>Sign up now!</Body>
      </VStack>      
      <ButtonContainer direction="column">
        <PrimaryButton title="Create account" onPress={() => { navigation.navigate("onboarding") }} />
        <SecondaryButton title="Log in" onPress={() => { navigation.navigate("login") }} />
      </ButtonContainer>
    </Container>
  );
}

export const Login = () => {
  return (
    <VStack style={ styles.container }>
      <Heading>Login</Heading>
    </VStack>
  );
}

export const Onboarding = () => {
  return (
    <VStack style={ styles.container }>
      <Heading>Onboarding</Heading>
    </VStack>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    paddingHorizontal: spacing['xl'],
    backgroundColor: colour.grey[600]
  }
});
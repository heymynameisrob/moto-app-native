import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { colour } from './styles/tokens';
import { RootNavigation } from './navigation';

function App() {
  return (
    <SafeAreaProvider style={{ flex: 1, backgroundColor: colour.grey[900] }}>
      <StatusBar style="light" />
      <RootNavigation />
    </SafeAreaProvider>
  );
}

export default App;
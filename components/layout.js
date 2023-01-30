import React from "react";
import {View, StyleSheet} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {colour, spacing} from "../styles/tokens";

export const Container = ({children, ...props}) => {
  const { alignment = 'center', bg = colour.grey[900] } = props;
  return (    
    <SafeAreaView style={{ ...styles.container, justifyContent: alignment, backgroundColor: bg }}>
      {children}
    </SafeAreaView>
  );
}

export const Row = ({children, ...props}) => {
  const { alignment = 'center', bg = colour.grey[900] } = props;
  return (
    <SafeAreaView style={{ ...styles.container, justifyContent: alignment, backgroundColor: bg  }}>
      {children}
    </SafeAreaView>
  );
}

export const VStack = ({children, ...props}) => {
  const { alignment = ['center', 'center'], gap = spacing['m'] } = props;
  return (
    <View style={{ ...styles.vStack, justifyContent: alignment[0], alignItems: alignment[1] }}>
      {children}
    </View>
  );
}

export const HStack = ({children, ...props}) => {
  const { alignment = ['center', 'center'] } = props;
  return (
    <View style={{ ...styles.hStack, justifyContent: alignment[0], alignItems: alignment[1] }}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {    
    flex: 1,
    flexDirection: "column",
    alignItems: "center",            
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  vStack: {
    flex: 1,
    flexDirection: "column",
    padding: spacing['xl'],
  },
  hStack: {
    flex: 1,
    flexDirection: "row",
    padding: spacing['xl'],
  }
});
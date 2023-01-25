import { Colors } from "react-native/Libraries/NewAppScreen";
import { fontSize, colour } from "./tokens";

export const defaultHeaderStyle = {
  headerStyle: {
    backgroundColor: colour.grey[900],
    shadowColor: 'transparent',
    borderBottomWidth: 0
  },
  headerTintColor: colour.text['high'],
  headerShadowVisible: false,
  headerTitleStyle: {
    fontSize: fontSize.headline.size,
    lineHeight: fontSize.headline.lineHeight,
    fontWeight: fontSize.headline.weight
  } 
};

export const lighterHeaderStyle = {
  headerStyle: {
    backgroundColor: colour.grey[800],
    shadowColor: 'transparent',
    borderBottomWidth: 0
  },
  headerTintColor: colour.text['high'],
  headerShadowVisible: false,
  headerTitleStyle: {
    fontSize: fontSize.headline.size,
    lineHeight: fontSize.headline.lineHeight,
    fontWeight: fontSize.headline.weight
  } 
};

export const headerBackTitleStyle = {
  fontSize: fontSize.body.size,
  lineHeight: fontSize.body.lineHeight,
  fontWeight: fontSize.body.weight,
}

export const mainTabBarStyle = {
  tabBarStyle: {
    backgroundColor: colour.grey[800],
    borderTopWidth: 0,
    shadowColor: '#000000',    
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: -2,
    }      
  },
  tabBarActiveTintColor: colour.grey[0],
  tabBarInactiveTintColor: colour.grey[500],
  tabBarLabelStyle: {
    fontSize: fontSize.caption2.size,
    lineHeight: fontSize.caption2.lineHeight,
    fontWeight: fontSize.caption2.weight
  },
}
import { colour, fontSize } from '../styles/tokens';

const defaultScreenOptions = {
  headerStyle: {
    backgroundColor: colour.grey[900],
    shadowColor: 'transparent',
    borderBottomWidth: 0
  },
  headerTintColor: colour.text['high'],
  headerShadowVisible: false,
  test: 'test',
  headerTitleStyle: {
    fontSize: fontSize.headline.size,
    lineHeight: fontSize.headline.lineHeight,
    fontWeight: fontSize.headline.weight
  }, 
  headerBackTitleVisible: false,
  headerBackTitle: 'Back'   
};

const childScreenOptions = {
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

const modalScreenOptions = {
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
  },
  presentation: 'modal'
};

const mainTabBarStyle = {
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
  }
}

export { defaultScreenOptions, childScreenOptions, modalScreenOptions, mainTabBarStyle}
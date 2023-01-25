import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens/home';
import { mainTabBarStyle } from '../styles/navigation';
import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export const MainTabs = () => {
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

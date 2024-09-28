import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginPage from './screens/Login';
import RegisterPage from './screens/Register';
import MainScreen from './screens/Main';
import WelcomePage from './screens/Welcome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from './screens/Profile';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Home = () =>{
  return(
  <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen name="Main" component={MainScreen}/>
      <Tab.Screen name="Profile" component={ProfileScreen}/>
    </Tab.Navigator>
  );
}
const App = () => {
  return (
    <NavigationContainer independent={true} >
      <Stack.Navigator screenOptions = {{animation:'none',
         headerShown:false,}} initialRouteName='Home'>
        <Stack.Screen 
          name='Welcome'
          component={WelcomePage}
        />
          <Stack.Screen
            name='Register'
            component={RegisterPage}
            />
            <Stack.Screen
          name='Login'
          component={LoginPage}
          />
          <Stack.Screen
          name='Home'
          component={Home}
          />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

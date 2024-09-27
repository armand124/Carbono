import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginPage from './screens/login';
import RegisterPage from './screens/register';
import MapScreen from './screens/maps';
import { registerRootComponent } from 'expo';
import Welcome_Page from './screens/welcome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from './screens/dashboard';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Home = () =>{
  return(
  <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen name="Maps" component={MapScreen}/>
      <Tab.Screen name="Dashboard" component={Dashboard}/>
    </Tab.Navigator>
  );
}
const App = () => {
  return (
    <NavigationContainer independent={true} >
      <Stack.Navigator screenOptions = {{animation:false,
         headerShown:false,
          presentation:'transparentModal'}} initialRouteName='Home'>
        <Stack.Screen 
          name='Welcome'
          component={Welcome_Page}
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
registerRootComponent(App);
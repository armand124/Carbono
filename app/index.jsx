import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome_Page from './screens/welcome';
import LoginPage from './screens/login';
import RegisterPage from './screens/register';
import HomeScreen from './screens/home';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer independent={true} >
      <Stack.Navigator screenOptions = {{animation:false, headerShown:false, presentation:'transparentModal'}} initialRouteName='Welcome'>
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
          component={HomeScreen}
          />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
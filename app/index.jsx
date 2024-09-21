import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome_Page from './screens/welcome';
import LoginPage from './screens/login';
import RegisterPage from './screens/register';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer independent={true} >
      <Stack.Navigator screenOptions = {{headerShown:false}} initialRouteName='Welcome'>
        <Stack.Group screenOptions={{presentation:'fullScreenModal'}}>
        <Stack.Screen 
          name='Welcome'
          component={Welcome_Page}
        />
        <Stack.Screen
          name='Login'
          component={LoginPage}
          />
          <Stack.Screen
            name='Register'
            component={RegisterPage}
            />
          </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
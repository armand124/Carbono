import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome_Page from './screens/welcome';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer independent={true} >
      <Stack.Navigator screenOptions = {{headerShown:false}} initialRouteName='Welcome'>
        <Stack.Screen 
          name='Welcome'
          component={Welcome_Page}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
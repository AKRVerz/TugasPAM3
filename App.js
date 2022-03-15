import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import home from './src/components/home'
import detail from './src/components/detail'


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='home' screenOptions={{headerShown: false}}>
        <Stack.Screen name="home" component={home} />
        <Stack.Screen name="detail" component={detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
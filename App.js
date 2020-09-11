//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';
//import Pages
import { 
  Welcome, 
  Login,
  Home,
  Comercial,
  Social, 
  ManutencaoCliente
} from './routes'
import AreaRestrita from './Pages/AreaRestrita'
//Navigation
export default function App() {
  const Stack = createStackNavigator();
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="AreaRestrita" component={AreaRestrita} options={{headerShown: false}} />
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Comercial" component={Comercial} />
          <Stack.Screen name="Social" component={Social} />
          <Stack.Screen name="ManutencaoCliente" component={ManutencaoCliente} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

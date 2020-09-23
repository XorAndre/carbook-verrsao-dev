import { StatusBar } from 'expo-status-bar';
import React from 'react';
//Navigation packages
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
//Pages
import { 
  Home, 
  Comercial, 
  Manutencao, 
  Dados, 
  ListaOficinas, 
  Promos,
  Suporte 
} from './routes';
import AreaRestrita from './Pages/AreaRestrita';
const Stack = createStackNavigator();


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Carbook" component={AreaRestrita} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Comercial" component={Comercial} />
          <Stack.Screen name="Manutencao" component={Manutencao} />
          <Stack.Screen name="Dados" component={Dados} />
          <Stack.Screen name="ListaOficinas" component={ListaOficinas} />
          <Stack.Screen name="Promos" component={Promos} />
          <Stack.Screen name="Suporte" component={Suporte} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}



import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    TextInput,
    Button,
    Image,
} from 'react-native';
//Meu estilo
import { cssHome } from '../../assets/Styles/Home'

export default function Home({navigation}) {
  return (
    <View style={cssHome.content}>
      <View>
          <Text>Teste</Text>
          <Button 
            color="#6C63FF"
            title="Tela de login"
            onPress={() => navigation.navigate('Login')}
          />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

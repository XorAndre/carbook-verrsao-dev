import React, {useState, useEffect} from 'react';
import { 
  KeyboardAvoidingView, 
  TextInput, 
  TouchableOpacity, 
  Text, 
  View
} from 'react-native';
//Meu estilo
import { cssLogin } from '../../assets/Styles/Login'

export default function Login() {
  const [display, setDisplay]=useState('none');
  return (
    <View style={cssLogin.content}>
      <View style={cssLogin.container}>
        <Text style={cssLogin.logo}>Carbook</Text>
        <Text style={cssLogin.slogan}>Login</Text>
        <View>
            <Text style={cssLogin.erroLogin(display)}>Usuário ou senha inválidos!</Text>
        </View>
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={cssLogin.formularioLogin}>
          <TextInput style={cssLogin.campoLogin} placeholder="Usuário"/>
          <TextInput style={cssLogin.campoSenha} placeholder="Senha" secureTextEntry={true} />
          <TouchableOpacity style={cssLogin.btLogin} onPress={()=>setDisplay('flex')}>
            <Text style={cssLogin.colorBtWhite}>Entrar</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
}


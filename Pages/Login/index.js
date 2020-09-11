import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
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
    const [user, setUser]=useState(null);
    const [password, setPassword]=useState(null);
    const [login, setLogin]=useState(null);

    //Envio do formulário de login
    async function sendForm(){
    let response=await fetch('http://192.168.1.2:3000/login',{
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: user,
            password: password
        })
    });
    let json=await response.json();
    if(json === 'error'){
        setDisplay('flex');
        setTimeout(()=>{
            setDisplay('none');
        },5000);
        await AsyncStorage.clear();
    }else{
        await AsyncStorage.setItem('userData', JSON.stringify(json));
        navigation.navigate('AreaRestrita');
    }
}
  return (
    <View style={cssLogin.content}>
      <View style={cssLogin.container}>
        <Text style={cssLogin.logo}>Carbook</Text>
        <Text style={cssLogin.slogan}>Login</Text>
        <View>
            <Text style={cssLogin.erroLogin(display)}>Usuário ou senha inválidos!</Text>
        </View>
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={cssLogin.formularioLogin}>
          <TextInput style={cssLogin.campoLogin} placeholder='Usuário:' onChangeText={text=>setUser(text)} />
          <TextInput style={cssLogin.campoSenha} placeholder='Senha:' onChangeText={text=>setPassword(text)} secureTextEntry={true} />
          <TouchableOpacity style={cssLogin.btLogin} onPress={()=>sendForm()}>
            <Text style={cssLogin.colorBtWhite}>Entrar</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
}


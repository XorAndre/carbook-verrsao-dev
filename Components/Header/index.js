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
//Native Style Banse

//Meu estilo
import { cssHeader } from './style'

export default function Header({navigation}) {
  return (
    <View style={cssHeader.Topo}>
        <View style={cssHeader.ContainerTopo}>
            <View>

            </View>
            <View>
                <Text style={cssHeader.colorLogo}>Carbook</Text>
            </View>
            <View>

            </View>
        </View>
    </View>
  );
}


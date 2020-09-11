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
//Meus Componentes
import Header from '../../Components/Header'
//Meu estilo
import { cssHome } from '../../assets/Styles/Home'

export default function Comercial({navigation}) {
  return (
    <View style={cssHome.content}>
      <Header/>
      <View style={cssHome.main}>
          <View style={cssHome.container}>
              <View style={cssHome.row}>
                <View style={cssHome.card}>
                  <View style={cssHome.Left}>
                    <Image
                      style={cssHome.imageCard}
                      source={{
                        uri:
                          'https://www.nicepng.com/png/detail/119-1192105_imagens-de-carros-carro-top2-camaro-png.png',
                      }}
                    />
                  </View>
                  <View style={cssHome.Right}>
                      <Text style={cssHome.cardTitle}>Teste de cadastro</Text>
                      <Text style={cssHome.descriptionCard}>Carro cor braca branca cadastrada</Text>
                      <Text style={cssHome.dataCard}>Data: </Text>
                  </View>
                </View>

                <View style={cssHome.card}>
                  <View style={cssHome.Left}>
                    <Image
                      style={cssHome.imageCard}
                      source={{
                        uri:
                          'https://quatrorodas.abril.com.br/wp-content/uploads/2020/04/1-4.jpg?quality=70&strip=info',
                      }}
                    />
                  </View>
                  <View style={cssHome.Right}>
                      <Text style={cssHome.cardTitle}>Teste de cadastro 2</Text>
                      <Text style={cssHome.descriptionCard}>Carro cor braca branca cadastrada</Text>
                      <Text style={cssHome.dataCard}>Data: </Text>
                  </View>
                </View>

                <View style={cssHome.card}>
                  <View style={cssHome.Left}>
                    <Image
                      style={cssHome.imageCard}
                      source={{
                        uri:
                          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTg8OdmeuSQvv81M6PEe3hWMg3d_qSzAFCI-w&usqp=CAU',
                      }}
                    />
                  </View>
                  <View style={cssHome.Right}>
                      <Text style={cssHome.cardTitle}>Teste de cadastro 3</Text>
                      <Text style={cssHome.descriptionCard}>Carro cor braca branca cadastrada</Text>
                      <Text style={cssHome.dataCard}>Data: </Text>
                  </View>
                </View>
              </View>
          </View>
      </View>  
      <View>
          <Text>Teste</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}


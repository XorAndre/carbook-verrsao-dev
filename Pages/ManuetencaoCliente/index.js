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

export default function ManutencaoCliente({navigation}) {
    return (
        <View style={cssHome.content}>
          <View style={cssHome.main}>
              <View style={cssHome.container}>
                  <View style={cssHome.row}>
                    <View style={cssHome.card}>
                      <View style={cssHome.Left}>
                        <Image
                          style={cssHome.imageCard}
                          source={{
                            uri:
                              'https://lh3.googleusercontent.com/proxy/_kqjl4PaoMw2-A9XvAqm8xa4uBvgPxi3m8YvLYVYOHl2w-YQuxzbxJ-D7VsMoBe4S1fCaWtu_xgmmcy4UYe01dRDnhxm9_rf43XRJlZ6xhQOGaZYtXLr9ySM7w1X-2gLKfgwGRPmmBDmWyX2CU2b381PZr2vVNM_vspHYT-Ea_FWdd_Ey3tLNIAXs1vVb2Pb5y02RvzbtR-eEpAC',
                          }}
                        />
                      </View>
                      <View style={cssHome.Right}>
                          <Text style={cssHome.cardTitle}>Encontre uma oficina</Text>
                          <Text style={cssHome.descriptionCard}>Precisa consertar seu carro? Em nossa lista de oficinas, você pode encontrar uma pertinho você.</Text>
                          <Button
                            title="Go to Details"
                            onPress={() => navigation.navigate('Home')}
                          />
                      </View>
                    </View>
    
                    <View style={cssHome.card}>
                      <View style={cssHome.Left}>
                        <Image
                          style={cssHome.imageCard}
                          source={{
                            uri:
                              'https://blog.mundomidia.com/wp-content/uploads/2017/08/reparador_oficina_mecanica_usando_software_gerenciamento_oficina_mecanica.jpg',
                          }}
                        />
                      </View>
                      <View style={cssHome.Right}>
                          <Text style={cssHome.cardTitle}>Promoções</Text>
                          <Text style={cssHome.descriptionCard}>Que tal conferir a lista de lojas e oficinas com promoções incríveis? Clique e confira a nossa lista</Text>
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
    

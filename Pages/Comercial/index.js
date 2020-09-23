import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { TouchableOpacity, ActivityIndicator, FlatList } from 'react-native';
//Componentes
import{
    Column,
    Row
}from '../../Components/Grid/style'
import{
    CardRow,
    CardContainerRow,
    Left,
    Right,
    ImageRow,
    TitleCard,
    DescriptionCard,
    DataCard
}from '../../Components/Card/style'

import{
  Template,
  Content
} from './style'
import{
    TopoPage,
    Container,
    Name
  } from '../../Components/Topo/style'

export default function Comercial({navigation}) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
    fetch('https://xorandre.github.io/api_car/carros.json')
        .then((response) => response.json())
        .then((json) => setData(json.carros))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, []);
  return (
      <Template>
        <TopoPage>
            <Container>
                <Name>Carros a venda</Name>    
            </Container>    
        </TopoPage>  
        <Content>
            <Row>
                {isLoading ? <ActivityIndicator/> : (
                <FlatList
                    data={data}
                    keyExtractor={({ id }, index) => id}
                    renderItem={({ item }) => (
                        <Column Value="12">
                            <TouchableOpacity onPress={() => navigation.navigate('Dados')}>
                                <CardRow>
                                    <CardContainerRow>
                                        <Left>
                                            <ImageRow
                                                source={{
                                                    uri: 'https://www.rbsdirect.com.br/imagesrc/25433713.jpg?w=700',
                                                }}
                                            />
                                        </Left>
                                        <Right>
                                            <TitleCard>{item.title}</TitleCard>
                                            <DescriptionCard>
                                                Valor: {item.valorAtual}
                                            </DescriptionCard>
                                            <DataCard>Vendedor: </DataCard>
                                            <DataCard>Data publicação: {item.dataCadastro}</DataCard>
                                        </Right>
                                    </CardContainerRow>
                                </CardRow>
                            </TouchableOpacity>
                        </Column>
                    )}
                    />
                )}
            </Row>
        </Content>
        <StatusBar style="auto" />
      </Template>
  );
}
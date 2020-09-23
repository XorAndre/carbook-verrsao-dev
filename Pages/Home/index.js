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

export default function Home({navigation}) {
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
            <Name>Meus Registros</Name>
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
                                                    uri: 'https://static.wixstatic.com/media/6a91d9_790bd43a496c4041a2c8be72369aaac4~mv2.png/v1/fill/w_560,h_312,al_c,lg_1,q_85/vantagens-carro.webp',
                                                }}
                                            />
                                        </Left>
                                        <Right>
                                            <TitleCard>{item.title}</TitleCard>
                                            <DescriptionCard>
                                                Valor: {item.valorAtual}
                                            </DescriptionCard>
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
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { TouchableOpacity, ActivityIndicator, FlatList } from 'react-native';
//Componentes
import{
    Column,
    Row
}from '../../Components/Grid/style'
import{
    CardColumn,
    CardContainer,
    BodyCard,
    HeaderCard,
    ImageColumn,
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

export default function ListaOficinas({navigation}) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
    fetch('https://xorandre.github.io/api_car/oficinas.json')
        .then((response) => response.json())
        .then((json) => setData(json.oficinas))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, []);
  return (
      <Template>
        <TopoPage>
            <Container>
                <Name>Oficinas Próximas</Name>    
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
                                <CardColumn>
                                    <CardContainer>
                                        <HeaderCard>
                                            <ImageColumn
                                                source={{
                                                    uri: 'https://casadoalinhador.com/images/bl/diferenca-entre-auto-center-e-oficina-mecanica-3.jpg',
                                                }}
                                            />
                                        </HeaderCard>
                                        <BodyCard>
                                            <TitleCard>{item.nome}</TitleCard>
                                            <DescriptionCard>
                                                Telefone: {item.telefone}
                                            </DescriptionCard>
                                            <DataCard>Horario: {item.horario}</DataCard>
                                        </BodyCard>
                                    </CardContainer>
                                </CardColumn>
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
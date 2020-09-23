import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TouchableOpacity } from 'react-native';
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
    TitleCard,
    DescriptionCard,
    ImageColumn
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

export default function Manutencao({navigation}) {
  return (
      <Template>
        <TopoPage>
            <Container>
                <Name>Lista Carbook</Name>    
            </Container>    
        </TopoPage>  
        <Content>
            <Row>
                <Column Value="12">
                    <TouchableOpacity onPress={() => navigation.navigate('Promos')}>
                        <CardColumn>
                            <CardContainer>
                                <HeaderCard>
                                    <ImageColumn
                                        source={{
                                            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBCs06g1T3bReg20LyPr7FmGPwBH_ekkL2_N8DiSd1c6wsIpq_QrE_0clPZtET5-_BHilTyMzmVt0hChyOqXhMPQ&usqp=CAU&ec=45702847',
                                        }}
                                    />
                                </HeaderCard>
                                <BodyCard>
                                    <TitleCard>Promoções</TitleCard>
                                    <DescriptionCard>
                                        Confira as melhores promoções em nossa lista.
                                    </DescriptionCard>
                                </BodyCard>
                            </CardContainer>
                        </CardColumn>
                    </TouchableOpacity>
                </Column>
                <Column Value="12">
                    <TouchableOpacity onPress={() => navigation.navigate('ListaOficinas')}>
                        <CardColumn>
                            <CardContainer>
                                <HeaderCard>
                                    <ImageColumn
                                        source={{
                                            uri: 'https://f.i.uol.com.br/fotografia/2019/10/03/15701335655d96563de0ac5_1570133565_3x2_md.jpg',
                                        }}
                                    />
                                </HeaderCard>
                                <BodyCard>
                                    <TitleCard>Oficinas Próximas</TitleCard>
                                    <DescriptionCard>
                                        Carro cadastrado agora
                                    </DescriptionCard>
                                </BodyCard>
                            </CardContainer>
                        </CardColumn>
                    </TouchableOpacity>
                </Column>
            </Row>
        </Content>
        <StatusBar style="auto" />
      </Template>
  );
}
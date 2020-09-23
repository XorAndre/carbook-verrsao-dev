import { StatusBar } from 'expo-status-bar';
import React from 'react';
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


export default function Dados({navigation}) {
  return (
      <Template>
        <Content>
            <Row>
                <Column Value="12">
                    <CardColumn>
                        <CardContainer>
                            <HeaderCard>
                                <ImageColumn
                                    source={{
                                        uri: 'https://static.wixstatic.com/media/6a91d9_790bd43a496c4041a2c8be72369aaac4~mv2.png/v1/fill/w_560,h_312,al_c,lg_1,q_85/vantagens-carro.webp',
                                    }}
                                />
                            </HeaderCard>
                            <BodyCard>
                                <TitleCard>Dados do carro:</TitleCard>
                                <DescriptionCard>
                                    Modelo: Civic
                                </DescriptionCard>
                                <DescriptionCard>
                                    Marca: Honda
                                </DescriptionCard>
                                <DescriptionCard>
                                    Ano: 2018
                                </DescriptionCard>
                                <DescriptionCard>
                                    Número de portas: 4
                                </DescriptionCard>
                                <DescriptionCard>
                                    Combustível: Gasolina
                                </DescriptionCard>
                                <TitleCard>Dados de manutenção:</TitleCard>
                                <DescriptionCard>
                                    Última manutenção realizada no dia 22/10/2020
                                </DescriptionCard>
                                <DescriptionCard>
                                    Detalhes do último suporte: troca de lanternas
                                </DescriptionCard>
                                <DescriptionCard>
                                    Total de manutenções realizadas: 1
                                </DescriptionCard>
                            </BodyCard>
                        </CardContainer>
                    </CardColumn>
                </Column>
            </Row>
        </Content>
        <StatusBar style="auto" />
      </Template>
  );
}
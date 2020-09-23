import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image } from 'react-native';
import {
    Template
} from './style'
import{
    TopoPage,
    Container,
    Name
} from '../../Components/Topo/style'
export default function Social({navigation}) {
  return (
      <Template>
        <TopoPage>
            <Container>
                <Name>Social Carbook</Name>
            </Container>
        </TopoPage>
        <StatusBar style="auto" />
      </Template>
  );
}
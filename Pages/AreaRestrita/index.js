import React, {useState,useEffect} from 'react'
import {cssMenu} from './style';
import AsyncStorage from '@react-native-community/async-storage';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
//Pages
import { Home, Comercial, Manutencao, Social, Suporte } from '../../routes';


export default function AreaRestrita() {

    const Tab = createMaterialBottomTabNavigator();
    

    return (
        <Tab.Navigator
                activeColor='#fff'
                inactiveColor='#ddd'
                barStyle={cssMenu.corMenu}
        >
            <Tab.Screen
                    name="Comercial"
                    component={Comercial}
                    options={{
                    tabBarIcon:()=>(
                        <Icon name="money" size={20} color="#fff" />
                    )
                }}
            />
            <Tab.Screen
                    name="Lista Carbook"
                    component={Manutencao}
                    options={{
                    tabBarIcon:()=>(
                        <Icon name="cog" size={20} color="#fff" />
                    )
                }}
            />
            <Tab.Screen
                    name="Agenda de Manutenções"
                    component={Suporte}
                    options={{
                    tabBarIcon:()=>(
                        <Icon name="car" size={20} color="#fff" />
                    )
                }}
            />
            <Tab.Screen
                    name="Social"
                    component={Social}
                    options={{
                    tabBarIcon:()=>(
                        <Icon name="users" size={20} color="#fff" />
                    )
                }}
            />
            <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                    tabBarIcon:()=>(
                        <Icon name="home" size={20} color="#fff" />
                    )
                }}
            />
        </Tab.Navigator>
    );
}
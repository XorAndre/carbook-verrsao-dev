import React, {useState,useEffect} from 'react';
import {Text, View, Button} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {Home, Social, ManutencaoCliente, Comercial} from '../../routes';
import Icon from 'react-native-vector-icons/FontAwesome';
//Estilo
import { cssMenu } from '../../assets/Styles/menuTab'

export default function AreaRestrita() {

    const Tab = createMaterialBottomTabNavigator();
    const [user,setUser]=useState(null);

    useEffect(()=>{
        async function getUser()
        {
            let response=await AsyncStorage.getItem('userData');
            let json=JSON.parse(response);
            setUser(json.user);
        }
        getUser();
    },[]);

    return (
        <Tab.Navigator
                activeColor='#fff'
                inactiveColor='#fff'
                barStyle={cssMenu.colorMenu}
        >
            <Tab.Screen
                    name="Comercial"
                    component={Comercial}
                    options={{
                    tabBarIcon:()=>(
                        <Icon name="car" size={20} color="#fff" />
                    )
                }}
            />
            <Tab.Screen
                    name="Manutenção"
                    component={ManutencaoCliente}
                    options={{
                    tabBarIcon:()=>(
                        <Icon name="cog" size={20} color="#fff" />
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
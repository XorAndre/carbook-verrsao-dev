import {StyleSheet} from "react-native";

const cssLogin = StyleSheet.create({
    content: {
        backgroundColor: '#fff',
        alignItems: 'center',
        minHeight: 1000
    },
    container: {
        marginLeft: 15,
        marginRight: 15,
        paddingTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        width: 300
    },
    logo:{
        color: '#6C63FF',
        fontSize: 40,
        fontWeight: 'bold',
        lineHeight: 40
    },
    slogan:{
        color: '#333',
        fontSize: 20,
        lineHeight: 17
    },
    formularioLogin:{
        marginTop: 10,
        width: 300,
    },
    erroLogin:(text='none')=>({
        backgroundColor: 'crimson',
        color: '#fff',
        display: text,
        paddingLeft: 8,
        paddingRight: 8, 
        paddingBottom: 10,
        paddingTop: 10,
        width: 300
    }),
    imagemLogin:{
        height: 200,
        width: 200,
    },
    campoLogin:{
        backgroundColor: '#eee',
        borderRadius: 5,
        color: '#222',
        marginTop: 10,
        paddingLeft: 20,
        paddingTop: 10,
        paddingBottom: 10,
        shadowColor: "#000",
        shadowOffset:{
        width: 0,
        height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        width: 300,
    },
    campoSenha:{
        backgroundColor: '#eee',
        borderRadius: 5,
        color: '#222',
        marginTop: 10,
        marginBottom: 20,
        paddingLeft: 20,
        paddingTop: 10,
        paddingBottom: 10,
        shadowColor: "#000",
        shadowOffset:{
        width: 0,
        height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        width: 300,
    },
    btLogin:{
        backgroundColor: '#6C63FF',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        position: 'relative',
        top: 5
    },
    colorBtWhite:{
        color: '#fff',
        fontSize: 20,
        textAlign: 'center'
    }
});
export {cssLogin};
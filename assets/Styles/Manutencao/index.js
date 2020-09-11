import {StyleSheet} from "react-native";

const cssHome = StyleSheet.create({
    content: {
        backgroundColor: '#eee',
        alignItems: 'center',
        minHeight: 599
    },
    container: {
        marginLeft: 15,
        marginRight: 15,
        paddingTop: 20,
        flex: 1,
        width: 340
    },
    row: {
        flexDirection: 'column',
        width: '100%'
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 5,
        flexDirection: 'column',
        marginTop: 5,
        paddingBottom: 6,
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 6,
        shadowColor: "#000",
        shadowOffset:{
        width: 0,
        height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    },
    left: {
        width: '20%',
    },
    right: {
        alignItems: 'center',
        width: '75%'
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 12
    },
    descriptionCard: {
        fontSize: 14,
        marginLeft: 12,
        width: 200
    },
    imageCard: {
        borderRadius: 5,
        height: 100,
        width: 100
    },
    dataCard:{
        fontSize: 12,
        marginLeft: 12
    },
    buttonCard:{
        marginLeft: 12
    }
});
export {cssHome};

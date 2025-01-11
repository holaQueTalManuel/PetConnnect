import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Color } from './Color';

export const GlobalStyles = StyleSheet.create({
    containerLogin:{
        backgroundColor: Color.blue,
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    containerUserLogin:{
        backgroundColor: Color.white,
        padding: 20,
        margin: 20,
        borderRadius: 40,
        width: "100%",
    },
    textos:{
        fontSize: 20,
        color: Color.white,
        fontFamily: "Poppins-Light",
        textAlign: "center",
    },
    textoPetConnect:{
        fontSize: 40,
        color: Color.white,
        fontFamily: "Poppins-Light",
        textAlign: "center",
    },
    textInputs:{
        borderWidth: 1, 
        backgroundColor: Color.orange,
        borderColor: Color.white, 
        borderRadius: 20,
        color: Color.grey,
        padding: 10, 
        margin: 10,
    },
    containerLogo:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 10,
    },
    imgLogo:{
        width: 50, 
        height: 50,
        
    },
    containerButton:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        margin: 10,
    },
    botones:{
        backgroundColor: Color.blue,
        padding: 10,
        width: 125,
        color: Color.white,
        borderRadius: 20,
        alignItems: "center",
    },
    imgAnimalesInicioyRegistro:{
        width: 200,
        height: 200,
        position: "absolute",
        
        top: -125,
        left: 30,
        zIndex: 100,
    },
})
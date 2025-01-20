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
    containerRegistrarse:{
        backgroundColor: Color.superWhite,
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    containerRegInput:{
        backgroundColor: Color.blue,
        padding: 20,
        margin: 20,
        borderRadius: 40,
        width: "100%",
    },
    textos:{
        fontSize: 40,
        color: Color.white,
        fontFamily: "Poppins-Light",
        textAlign: "center",
        
    },
    textoPetConnect:{
        fontSize: 100,
        color: Color.white,
        fontFamily: "Poppins-Medium",
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
        width: 100, 
        height: 100,
        marginBottom: 100,
        paddingBottom:30,
        
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
    botonesRegistro:{
        backgroundColor: Color.white,
        padding: 10,
        width: 200,
        color: Color.blue,
        borderRadius: 20,
        alignItems: "center",
    },
    imgAnimalesInicioyRegistro:{
        width: 200,
        height: 200,
        position: "absolute",
        
        top: -125,
        left: 170,
        zIndex: 100,
    },
    imgAnimalesRegistro:{
        width: 250,
        height: 250,
        position: "absolute",
        overflow: "visible",
        top: -180,
        left: -170,
        zIndex: 100,
    },
    patitas:{
        width: 60,
        height: 60,
        position: "absolute",
        top: 100,
        left: 630,
        zIndex: 100,
        
    },
    row:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        padding: 10,
    },
    rowPro:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: 10,
        gap: 10,
    },
    column: {
        flexDirection: "column",
        alignItems: "center",
        padding: 10,
    },
    imgSecciones:{
        width: 100,
        height: 100,
    }
});

export default GlobalStyles;
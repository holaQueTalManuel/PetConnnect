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
        fontFamily: "PoppinsBold",
        textAlign: "center",
        
    },
    textoPetConnect:{
        fontSize: 100,
        color: Color.white,
        fontFamily: "Wendy",
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
        height: 70,
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
        width: 350,
        height: 350,
        position: "absolute",
        
        top: -390,
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
        alignSelf: "center",
        gap: 10,
    },
    column: {
        flexDirection: "column",
        alignItems: "center",
        padding: 10,
    },
    imgSecciones:{
        width: 120,
        height: 120,
    },
    containerHeader:{
        backgroundColor:Color.blue,
        width: "100%",
        flexDirection: "row",
    },
    imgGeneral:{
        width: 100,
        height: 100,
    },
    containerText:{
        backgroundColor: Color.blue,
        width: "90%",
        flex: 1,
        flexDirection: "column",
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    containerCategories:{
        backgroundColor: Color.lightBlue,
        borderRadius: 20,
        width: "28%",
        flexDirection: "column",
        marginHorizontal: 10
    },
    containerAnimals:{
        backgroundColor: Color.orange2,
        borderRadius: 20,
        width: "42%",
        marginHorizontal: 10
    }
});

export default GlobalStyles;
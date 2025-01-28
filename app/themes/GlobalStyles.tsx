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
        backgroundColor: Color.orangeClarito,
        borderColor: Color.white, 
        borderRadius: 40,
        color: Color.grey,
        padding: 10, 
        margin: 10,
        fontSize: 20,
        fontFamily: "PoppinsBold",
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
        alignItems: "center",
        margin: 10,
    },
    botones:{
        backgroundColor: Color.blue,
        padding: 10,
        width: 270,
        height: 70,
        color: Color.white,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    botonesRegistro:{
        backgroundColor: Color.superWhite,
        padding: 10,
        width: 270,
        height: 70,
        color: Color.blue,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
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
        justifyContent: "space-between",
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

    containerHeaderUsu:{
        backgroundColor: Color.blue,
        width: "100%",
        flexDirection: "row",
        height: 120,
        marginBottom: 30,
    },
    tarjetaNaranja:{
        backgroundColor:Color.softOrange,
        borderRadius:20,
        padding:20,
        margin:30
    },
    textoTarjetas:{
        color:Color.blue,
        fontSize:30,
        fontWeight:'bold',
         fontFamily: "PoppinsBold",

    },
    tarjetaAzul:{
        backgroundColor:Color.softBlue,
        borderRadius:20,
        padding:20,
        margin:30, 
        flexDirection:'row'
    }, 
    imgForo:{
        width: 50, 
        height: 50,
        marginTop:20
        
    }, 
    textoNumComentarios:{
        color:Color.blue,
        fontSize: 40,
        fontWeight:'bold', 
        marginLeft:5,
        fontFamily: "PoppinsBold",
        marginTop:15
    }, 
    textoHeader:{
        color:Color.white,
        fontSize: 40, 
        fontWeight:'bold',
        fontFamily: "PoppinsBold",
    }, 
    imgHeader:{
        width:70,
        height:70,
    },
    backArrow:{
        width: 130, 
        height: 130, 
        marginVertical: 20
    }

});

export default GlobalStyles;
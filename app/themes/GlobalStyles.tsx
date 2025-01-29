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
        height: 75,
        paddingLeft: 40, 
        margin: 10,
        fontSize: 30,
        fontFamily: "Poppins",
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
        paddingVertical: 50
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
        alignItems: "flex-start",
        padding: 10,
    },
    imgSecciones:{
        width: 120,
        height: 120,
    },
    containerHeader:{
        backgroundColor:Color.lighterBlue,
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
        backgroundColor: Color.lighterBlue,
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
    },
    textoAccederRefugio:{
        color: Color.blue, 
        fontSize: 65, 
        paddingTop: 100, 
        paddingBottom:60,
        fontFamily: "PoppinsBold",
        textAlign: "center",

    },
    textoTitulo:{
        color: Color.blue, 
        width: 600, 
        marginRight: 10,
        fontSize: 40,
        fontFamily: "PoppinsBold",
        textAlign: "center",
    },
    containerAnimal:{
        borderRadius: 20, 
        width: "90%",
        backgroundColor: Color.white
    },
    imgAnimal:{
        marginTop: 50,
        width: 540, 
        height: 400, 
        borderRadius: 20, 
        alignSelf: "center"
    },
    textoNombreAnimal:{
        fontSize: 40,
        marginTop: 20,
        marginLeft: 60,
        color: Color.blue,
        fontFamily: "PoppinsBold",
        textAlign: "left"
    },
    textosGenerales:{
        fontSize: 30,
        color: Color.blue,
        fontFamily: "Poppins",
        textAlign: "left"
    },
    imgFav:{
        width: 100, 
        height:100, 
        marginTop: 20, 
        marginLeft: 300
    },
    containerAnimalData:{
        flexDirection: "column",
        borderRadius: 20,
        backgroundColor: Color.orangeClarito,
        padding: 20, 
        width: 160,
        marginHorizontal: 10,
        marginVertical:30
    },
    textoCategoriaDatos:{
        fontSize: 20,
        color: Color.blue,
        fontFamily: "Poppins",
        textAlign: "center"
    },
    textoDatosAnimal:{
        fontSize: 20,
        color: Color.blue,
        fontFamily: "PoppinsBold",
        textAlign: "center"
    },
    imgPerfilUsuario:{
        width: 80,
        height: 80,
        borderRadius: 40,
        borderColor: Color.blue
    },
    textoNombreUsuario:{
        fontSize: 40,
        color: Color.blue,
        fontFamily: "PoppinsBold",
        textAlign: "left"
    },
    containerContactImages:{
        flexDirection: "column",
        justifyContent: "flex-end",
        borderRadius: 30,
        backgroundColor: Color.orangeClarito,
        padding: 10,
        marginHorizontal: 10,
    },
    imgContact:{
        width: 60,
        height: 60,
        borderColor: Color.blue
    },
    textoInfoAnimal:{
        fontSize: 20,
        color: Color.blue,
        fontFamily: "PoppinsBold",
        textAlign: "left",
        width: 525, 
        alignSelf: "center", 
        marginTop: 20,
        paddingTop: 10,
        paddingBottom: 30,
    },
    containerAdopt:{
        borderRadius: 20,
        backgroundColor: Color.blue,
        paddingHorizontal: 20,
        paddingVertical: 30,
        marginTop: 40
    },
    textoAdoptar:{
        fontSize: 50,
        width: 610,
        color: Color.white,
        fontFamily: "PoppinsBold",
        textAlign: "center",

    }


});

export default GlobalStyles;
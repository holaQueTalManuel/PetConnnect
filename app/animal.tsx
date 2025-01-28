import { View, Image, Text, StyleSheet, Pressable } from 'react-native';
import GlobalStyles from "./themes/GlobalStyles";
import Color from "./themes/Color";
import { router } from 'expo-router';

export default function AnimalPage() {
    return (
        <View style={{flex: 1, backgroundColor: Color.orangeClarito}}>
            <View style={[GlobalStyles.containerHeader,  {backgroundColor: Color.white, alignItems: "center", justifyContent: "space-between", paddingHorizontal: 30}]}>
                <Pressable onPress={()=> router.push('./shelter')}>
                    <Image style={[GlobalStyles.backArrow]}source={require('../assets/images/ELEMENTOS_GENERALES/back_arrow.png')}/>
                </Pressable>
                <Text style={styles.textoTitulo}>Perros</Text>
                <Image source={require('../assets/images/ELEMENTOS_GENERALES/logo_2.png')} style={[GlobalStyles.imgGeneral, {marginVertical: 40, marginRight: 0}]}/>
            </View>

            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <View style={[styles.containerAnimal]}>
                    <Image source={require('../assets/images/CATALOGO_DE_ADOPCIONES/Pluto.png')} style={styles.imgAnimal}/>
                   
                    <View style={{flexDirection: "row"}}>
                        <View style={{flexDirection: "column"}}>
                            <Text style={styles.textoNombreAnimal}>Pluto</Text>
                            <View style={{flexDirection: "row"}}>
                                <Image source={require('../assets/images/ELEMENTOS_GENERALES/location_icon.png')} style={{width: 40, height: 40, marginLeft: 50}}/>
                                <Text style={styles.textos}>Murcia</Text>
                            </View>
                        </View>
                        <Image source={require('../assets/images/ELEMENTOS_GENERALES/fav_icon.png')} style={styles.imgFav}/>
                    </View>

                    <View style={{flexDirection:"row", justifyContent:"center"}}>
                        <View style={styles.containerAnimalData}>
                            <Text style={styles.textoCategoriaDatos}>Sexo</Text>
                            <Text style={styles.textoDatosAnimal}>Macho</Text>
                        </View>
                        <View style={styles.containerAnimalData}>
                            <Text style={styles.textoCategoriaDatos}>Edad</Text>
                            <Text style={styles.textoDatosAnimal}>1,5 años</Text>
                        </View>
                        <View style={styles.containerAnimalData}>
                            <Text style={styles.textoCategoriaDatos}>Tipo</Text>
                            <Text style={styles.textoDatosAnimal}>Bodeguero</Text>
                        </View>
                    </View>

                    <View style={{flexDirection:"row", justifyContent: "center"}}>
                        <Image source={require('../assets/images/CATALOGO_DE_ADOPCIONES/Eros.png')} style={styles.imgPerfilUsuario}/>
                        <View style={{flexDirection:"column", marginLeft: 30, marginRight: 40}}>
                            <Text style={styles.textoNombreUsuario}>Ana</Text>
                            <Text style={[styles.textos, {fontSize: 20, marginTop: -15}]}>perrosabandona2</Text>
                        </View>
                        <View style={styles.containerContactImages}>
                            <Image source={require('../assets/images/CATALOGO_DE_ADOPCIONES/teléfono.png')} style={styles.imgContact}/>
                        </View>
                        <View style={styles.containerContactImages}>
                            <Image source={require('../assets/images/FORO_DE_COMUNIDAD/bocadillo de mensaje.png')} style={styles.imgContact}/>
                        </View>
                    </View>

                    <Text style={[styles.textoInfoAnimal]}>Pluto entró de forma inesperada a una peluquería en la que justo estaba uno de nuestros voluntarios, no llevaba chip y nadie lo ha reclamado así que busca familia definitiva.</Text>

                </View>

                <View style={styles.containerAdopt}>
                    <Text style={styles.textoAdoptar}>DAME UN HOGAR</Text>
                </View>

            </View>
        </View>
)}

const styles=StyleSheet.create({
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
    textos:{
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

})
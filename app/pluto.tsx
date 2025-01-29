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
                <Text style={GlobalStyles.textoTitulo}>Perros</Text>
                <Image source={require('../assets/images/ELEMENTOS_GENERALES/logo_2.png')} style={[GlobalStyles.imgGeneral, {marginVertical: 40, marginRight: 0}]}/>
            </View>

            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <View style={GlobalStyles.containerAnimal}>
                    <Image source={require('../assets/images/CATALOGO_DE_ADOPCIONES/Pluto.png')} style={GlobalStyles.imgAnimal}/>
                   
                    <View style={{flexDirection: "row"}}>
                        <View style={{flexDirection: "column"}}>
                            <Text style={GlobalStyles.textoNombreAnimal}>Pluto</Text>
                            <View style={{flexDirection: "row"}}>
                                <Image source={require('../assets/images/ELEMENTOS_GENERALES/location_icon.png')} style={{width: 40, height: 40, marginLeft: 50}}/>
                                <Text style={GlobalStyles.textosGenerales}>Murcia</Text>
                            </View>
                        </View>
                        <Image source={require('../assets/images/ELEMENTOS_GENERALES/fav_icon.png')} style={GlobalStyles.imgFav}/>
                    </View>

                    <View style={{flexDirection:"row", justifyContent:"center"}}>
                        <View style={GlobalStyles.containerAnimalData}>
                            <Text style={GlobalStyles.textoCategoriaDatos}>Sexo</Text>
                            <Text style={GlobalStyles.textoDatosAnimal}>Macho</Text>
                        </View>
                        <View style={GlobalStyles.containerAnimalData}>
                            <Text style={GlobalStyles.textoCategoriaDatos}>Edad</Text>
                            <Text style={GlobalStyles.textoDatosAnimal}>1,5 años</Text>
                        </View>
                        <View style={GlobalStyles.containerAnimalData}>
                            <Text style={GlobalStyles.textoCategoriaDatos}>Tipo</Text>
                            <Text style={GlobalStyles.textoDatosAnimal}>Bodeguero</Text>
                        </View>
                    </View>

                    <View style={{flexDirection:"row", justifyContent: "center"}}>
                        <Image source={require('../assets/images/CATALOGO_DE_ADOPCIONES/Eros.png')} style={GlobalStyles.imgPerfilUsuario}/>
                        <View style={{flexDirection:"column", marginLeft: 30, marginRight: 40}}>
                            <Text style={GlobalStyles.textoNombreUsuario}>Ana</Text>
                            <Text style={[GlobalStyles.textosGenerales, {fontSize: 20, marginTop: -15}]}>perrosabandona2</Text>
                        </View>
                        <View style={GlobalStyles.containerContactImages}>
                            <Image source={require('../assets/images/CATALOGO_DE_ADOPCIONES/teléfono.png')} style={GlobalStyles.imgContact}/>
                        </View>
                        <View style={GlobalStyles.containerContactImages}>
                            <Image source={require('../assets/images/FORO_DE_COMUNIDAD/bocadillo de mensaje.png')} style={GlobalStyles.imgContact}/>
                        </View>
                    </View>

                    <Text style={[GlobalStyles.textoInfoAnimal]}>Pluto entró de forma inesperada a una peluquería en la que justo estaba uno de nuestros voluntarios, no llevaba chip y nadie lo ha reclamado así que busca familia definitiva.</Text>

                </View>

                <View style={GlobalStyles.containerAdopt}>
                    <Text style={GlobalStyles.textoAdoptar}>DAME UN HOGAR</Text>
                </View>

            </View>
        </View>
)}
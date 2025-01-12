import { TextInput, View, Image, Pressable } from "react-native";
import { GlobalStyles } from "../themes/GlobalStyles"
import { Text } from "react-native";
import { Color } from "../themes/Color";
import { Link, router } from "expo-router";

export const Register = () => {
    return (
            <View style={[GlobalStyles.containerRegistrarse, {position: "relative"}]}>
                
                <View style={GlobalStyles.containerLogo}>
                    <Image source={require('../../assets/images/ELEMENTOS GENERALES/logo 2.png')} style={GlobalStyles.imgLogo}/>
                </View>
                <View style={{marginBottom:100, marginTop:-10}}>
                    <Text style={[GlobalStyles.textos, {color: Color.blue}]}>Registrate en</Text>
                    <Text style={[GlobalStyles.textoPetConnect, {fontWeight: "bold"}, {color: Color.blue}]}>PetConnect</Text>
                </View>

                <View>
                    <Image source={require('../../assets/images/PAGINA REGISTRO E INICIO DE SESION/perrito.png')} 
                    style={[GlobalStyles.imgAnimalesRegistro, {zIndex:200}, {top:-70}]}/>
                </View>
                <View>
                    <Image source={require('../../assets/images/PAGINA REGISTRO E INICIO DE SESION/gatito.png')} 
                    style={[GlobalStyles.imgAnimalesRegistro, {left:-25}, {height:125}]}/>
                </View>
    
            <View style={[GlobalStyles.containerRegInput, {position: "relative"}]}>
    
                <View>
                    <Image source={require('../../assets/images/ELEMENTOS GENERALES/huella naranja.png')} style={[GlobalStyles.patitas, {transform: [{rotate: '45deg'}]}, {right:-200}, {top:55}]}/>
                </View>
    
                <View>
                    <Image source={require('../../assets/images/ELEMENTOS GENERALES/huella naranja.png')} style={[GlobalStyles.patitas, {transform: [{rotate: '-45deg'}]}, {left: -5}, {top:-10}]}/>
                </View>
                <Text style={[GlobalStyles.textoPetConnect, {color: Color.white}, {fontSize: 30}, {fontWeight: "bold"}, {paddingTop: 25}, {paddingBottom:30}]}>¡Hazte parte del refugio!</Text>
                <TextInput placeholder="Nombre" style={GlobalStyles.textInputs}/>
                <TextInput placeholder="Email" style={GlobalStyles.textInputs}/>
                <TextInput placeholder="Contraseña" style={GlobalStyles.textInputs}/>
                <TextInput placeholder="Repetir contraseña" style={GlobalStyles.textInputs}/>
    
                <View style={GlobalStyles.containerButton}>
                    <Pressable style={GlobalStyles.botonesRegistro}>Registrarse</Pressable>
                    <Pressable style={GlobalStyles.botonesRegistro}>Cancelar</Pressable>
                </View>
            </View>
            
            <View style={GlobalStyles.row}>
                <Text style={[GlobalStyles.textos, {paddingRight: 15}, {color:Color.blue}]}>¿Tienes ya una cuenta?</Text>
                <Link href="./login" style={[GlobalStyles.textos, {color:Color.blue}, {fontWeight: "bold"}]}>Accede al refugio</Link>
            </View>


            </View>
        )
}

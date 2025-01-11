import { TextInput, View, Image, Pressable } from "react-native";
import { GlobalStyles } from "../themes/GlobalStyles"
import { Text } from "react-native";
import { Color } from "../themes/Color";
import { Link } from "expo-router";

export const Login = () => {
    return (
        <View style={[GlobalStyles.containerLogin, {position: "relative"}]}>
            
            <View style={GlobalStyles.containerLogo}>
                <Image source={require('../../assets/images/ELEMENTOS GENERALES/logo 2.png')} style={GlobalStyles.imgLogo}/>
            </View>
            <View style={{marginBottom:100, marginTop:-10}}>
                <Text style={GlobalStyles.textos}>Bienvenido a</Text>
                <Text style={GlobalStyles.textoPetConnect}>PetConnect</Text>
            </View>

        <View style={[GlobalStyles.containerUserLogin, {position: "relative"}]}>
    
        <View>
                <Image source={require('../../assets/images/PAGINA REGISTRO E INICIO DE SESION/perrito.png')} style={[GlobalStyles.imgAnimalesInicioyRegistro, {zIndex:200}, {top:-70}]}/>
            </View>
            <View>
                <Image source={require('../../assets/images/PAGINA REGISTRO E INICIO DE SESION/gatito.png')} style={[GlobalStyles.imgAnimalesInicioyRegistro, {left:125}, {height:250}]}/>
            </View>

            <Text style={[GlobalStyles.textoPetConnect, {color: Color.blue}, {fontSize: 30}, {paddingTop: 150}]}>Accede al refugio</Text>
            <TextInput placeholder="Email" style={GlobalStyles.textInputs}/>
            <TextInput placeholder="Contraseña" style={GlobalStyles.textInputs}/>

            <View style={GlobalStyles.containerButton}>
                <Pressable style={GlobalStyles.botones}>Acceder</Pressable>
                <Pressable style={GlobalStyles.botones}>Registrarse</Pressable>
            </View>
        </View>
        <Link href="/" style={GlobalStyles.textos}>¿Olvidaste la contraseña?</Link>
        </View>
    )
}
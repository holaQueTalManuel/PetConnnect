import { TextInput, View, Image, Pressable } from "react-native";
import { GlobalStyles } from "./themes/GlobalStyles"
import { Text } from "react-native";
import { Color } from "./themes/Color";
import { Link, router } from "expo-router";


export default function ShelterPage() {
  return (
    <View style={[GlobalStyles.containerRegistrarse, {position: "relative"}]}>
        
        <View style={GlobalStyles.containerLogo}>
            <Image source={require('../assets/images/ELEMENTOS_GENERALES/logo_2.png')} style={GlobalStyles.imgLogo}/>
        </View>
        <View style={{marginBottom:100, marginTop:-10}}>
            <Text style={[GlobalStyles.textos, {color: Color.blue}]}>Registrate en</Text>
            <Text style={[GlobalStyles.textoPetConnect, {fontWeight: "bold"}, {color: Color.blue}, {paddingBottom: 90}]}>PetConnect</Text>
        </View>

        <View>
            <Image source={require('../assets/images/PAGINA_REGISTRO_E_INICIO_DE_SESION/perrito.png')} 
            style={[GlobalStyles.imgAnimalesRegistro, {zIndex:200}, {top:-140}]}/>
        </View>
        <View>
            <Image source={require('../assets/images/PAGINA_REGISTRO_E_INICIO_DE_SESION/gatito.png')} 
            style={[GlobalStyles.imgAnimalesRegistro, {left:-25}, {height:300}]}/>
        </View>

    <View style={[GlobalStyles.containerRegInput, {position: "relative"}]}>

        <View>
            <Image source={require('../assets/images/ELEMENTOS_GENERALES/huella_naranja.png')} style={[GlobalStyles.patitas, {transform: [{rotate: '120deg'}]}, {right:-300}, {top:110}]}/>
        </View>

        <View>
            <Image source={require('../assets/images/ELEMENTOS_GENERALES/huella_naranja.png')} style={[GlobalStyles.patitas, {transform: [{rotate: '-45deg'}]}, {left: -5}, {top:-10}]}/>
        </View>
        <Text style={[GlobalStyles.textoPetConnect, {color: Color.white}, {fontSize: 60}, {fontWeight: "bold"}, {paddingTop: 35}, {paddingBottom:70}]}>¡Hazte parte del refugio!</Text>
        <TextInput placeholder="Nombre" style={[GlobalStyles.textInputs, {height: 40}]}/>
        <TextInput placeholder="Email" style={[GlobalStyles.textInputs, {height: 40}]}/>
        <TextInput placeholder="Contraseña" style={[GlobalStyles.textInputs, {height: 40}]} secureTextEntry={true}/>
        <TextInput placeholder="Repetir contraseña" style={[GlobalStyles.textInputs, {height: 40}]} secureTextEntry={true}/>

        <View style={GlobalStyles.containerButton}>
            <Pressable onPress={()=> router.push('./shelter')
        } style={GlobalStyles.botonesRegistro}><Text>Registrarse</Text></Pressable>
            <Pressable onPress={()=> router.push('./login')
        } style={GlobalStyles.botonesRegistro}><Text>Cancelar</Text></Pressable>
        </View>
    </View>
    
    <View style={GlobalStyles.row}>
        <Text style={[GlobalStyles.textos, {paddingRight: 15}, {color:Color.blue}]}>¿Tienes ya una cuenta?</Text>
        <Link href="./login" style={[GlobalStyles.textos, {color:Color.blue}, {fontWeight: "bold"}]}>Accede al refugio</Link>
    </View>


    </View>
)
}
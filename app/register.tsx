import { TextInput, View, Image, Pressable } from "react-native";
import { GlobalStyles } from "./themes/GlobalStyles"
import { Text } from "react-native";
import { Color } from "./themes/Color";
import { Link, router } from "expo-router";


export default function RegisterPage() {
  return (
    <View style={[GlobalStyles.containerRegistrarse, {position: "relative"}]}>
        
        <View style={[GlobalStyles.containerLogo, {marginTop: -60}]}>
            <Image source={require('../assets/images/ELEMENTOS_GENERALES/logo_2.png')} style={GlobalStyles.imgLogo}/>
        </View>
        <View style={{marginBottom:100, marginTop:-60}}>
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
        <Text style={[GlobalStyles.textoPetConnect, {color: Color.white}, {fontSize: 60}, {paddingTop: 35}, {paddingBottom:70}]}>¡Hazte parte del refugio!</Text>
        <TextInput placeholder="Nombre" style={[GlobalStyles.textInputs, {height: 80}]}/>
        <TextInput placeholder="Email" style={[GlobalStyles.textInputs, {height: 80}]}/>
        <TextInput placeholder="Contraseña" style={[GlobalStyles.textInputs, {height: 80}]} secureTextEntry={true}/>
        <TextInput placeholder="Repetir contraseña" style={[GlobalStyles.textInputs, {height: 80}]} secureTextEntry={true}/>

        <View style={[GlobalStyles.containerButton, {justifyContent: "space-between"}, {marginTop: 30}]}>
            <Pressable onPress={()=> router.push('./mainpage')
        } style={GlobalStyles.botonesRegistro}><Text style={{color: Color.blue, fontSize: 23, paddingBottom: 5, fontFamily: "PoppinsBold"}}>Registrarse</Text></Pressable>
            <Pressable onPress={()=> router.push('./login')
        } style={GlobalStyles.botonesRegistro}><Text style={{color: Color.blue, fontSize: 23, paddingBottom: 5, fontFamily: "PoppinsBold"}}>Cancelar</Text></Pressable>
        </View>
    </View>
    
    <View style={[GlobalStyles.row, {justifyContent: "center"}, {marginBottom: -40}]}>
        <Text style={[GlobalStyles.textos, {paddingRight: 30}, {color:Color.blue}, {fontFamily: "PoppinsRegular"}, {fontSize: 25}]}>¿Tienes ya una cuenta?</Text>
        <Link href="./login" style={[GlobalStyles.textos, {color:Color.blue}, {textDecorationLine: "underline"}, {fontSize: 28}]}>Accede al refugio</Link>
    </View>


    </View>
)
}
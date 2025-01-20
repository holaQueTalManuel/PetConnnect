import { TextInput, View, Image, Pressable } from "react-native";
import { GlobalStyles } from '../themes/GlobalStyles';
import { Text } from "react-native";
import { Color } from "../themes/Color";
import { Link, router } from "expo-router";
import { Input } from '../components/Input';

export default function HomePage() {
  return (<View style={[GlobalStyles.containerLogin, {position: "relative"}]}>
            
  <View style={GlobalStyles.containerLogo}>
      <Image source={require('../../assets/images/ELEMENTOS GENERALES/logo 2.png')} style={GlobalStyles.imgLogo}/>
  </View>
  <View style={{marginBottom:150, marginTop:-10}}>
      <Text style={GlobalStyles.textos}>Bienvenido a</Text>
      <Text style={GlobalStyles.textoPetConnect}>PetConnect</Text>
  </View>

<View style={[GlobalStyles.containerUserLogin, {position: "relative"}]}>

  <View>
      <Image source={require('../../assets/images/PAGINA REGISTRO E INICIO DE SESION/perrito.png')} style={[GlobalStyles.imgAnimalesInicioyRegistro, {zIndex:200}, {top:-70}]}/>
  </View>
  <View>
      <Image source={require('../../assets/images/PAGINA REGISTRO E INICIO DE SESION/gatito.png')} style={[GlobalStyles.imgAnimalesInicioyRegistro, {left:290}, {height:250}]}/>
  </View>

  <View>
      <Image source={require('../../assets/images/ELEMENTOS GENERALES/huella naranja.png')} style={[GlobalStyles.patitas, {transform: [{rotate: '120deg'}]}, {right:-200}, {top:165}]}/>
  </View>

  <View>
      <Image source={require('../../assets/images/ELEMENTOS GENERALES/huella naranja.png')} style={[GlobalStyles.patitas, {transform: [{rotate: '-45deg'}]}, {left: 100}, {top:115}]}/>
  </View>
  <Text style={[GlobalStyles.textoPetConnect, {color: Color.blue}, {fontSize: 50}, {paddingTop: 150}, {paddingBottom:30}]}>Accede al refugio</Text>
  <Input placeholder="Email" style={{height: 40}} />
  <Input placeholder="Contraseña" isPassword={true}/>

  <View style={GlobalStyles.containerButton}>
      <Pressable onPress={()=> router.push('./mainpage')
      }  style={GlobalStyles.botones}><Text>Acceder</Text></Pressable>
      <Pressable onPress={()=> router.push('./register')
      } style={GlobalStyles.botones}><Text>Registrarse</Text></Pressable>
  </View>
</View>
<Link href="/" style={GlobalStyles.textos}>¿Olvidaste la contraseña?</Link>
</View>
)}
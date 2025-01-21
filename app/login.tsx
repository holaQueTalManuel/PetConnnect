import { TextInput, View, Image, Pressable, StyleSheet } from 'react-native';
import { GlobalStyles } from './themes/GlobalStyles';
import { Text } from "react-native";
import { Color } from "./themes/Color";
import { Link, router } from "expo-router";

export default function HomePage() {
  return (<View style={[GlobalStyles.containerLogin, {position: "relative"}]}>
            
  <View style={GlobalStyles.containerLogo}>
      <Image source={require('../assets/images/ELEMENTOS_GENERALES/logo_2.png')} style={GlobalStyles.imgLogo}/>
  </View>
  <View style={{marginBottom:80, marginTop:-50}}>
      <Text style={GlobalStyles.textos}>Bienvenido a</Text>
      <Text style={GlobalStyles.textoPetConnect}>PetConnect</Text>
  </View>

<View style={[GlobalStyles.containerUserLogin, {position: "relative"}, {paddingTop: 300}]}>

  <View>
      <Image source={require('../assets/images/PAGINA_REGISTRO_E_INICIO_DE_SESION/perrito.png')} style={[GlobalStyles.imgAnimalesInicioyRegistro, {zIndex:200}, {top:-300}, {height:300}, {width: 300}, {left:130}]}/>
  </View>
  <View>
      <Image source={require('../assets/images/PAGINA_REGISTRO_E_INICIO_DE_SESION/gatito.png')} style={[GlobalStyles.imgAnimalesInicioyRegistro, {left:290}, {height:350}, {width: 350}, ]}/>
  </View>

  <View>
      <Image source={require('../assets/images/ELEMENTOS_GENERALES/huella_naranja.png')} style={[GlobalStyles.patitas, {transform: [{rotate: '120deg'}]}, {right:-200}, {top:165}]}/>
  </View>

  <View>
      <Image source={require('../assets/images/ELEMENTOS_GENERALES/huella_naranja.png')} style={[GlobalStyles.patitas, {transform: [{rotate: '-45deg'}]}, {left: 100}, {top:115}]}/>
  </View>
  <Text style={[GlobalStyles.textoPetConnect, {color: Color.blue}, {fontSize: 50}, {paddingTop: 150}, {paddingBottom:30}]}>Accede al refugio</Text>
  <TextInput placeholder="Email" style={[GlobalStyles.textInputs, {height: 70}]}/>
  <TextInput placeholder="Contraseña" style={[GlobalStyles.textInputs, {height: 70}]} secureTextEntry={true}/>

  <View style={GlobalStyles.containerButton}>
      <Pressable  onPress={()=> router.push('./mainpage')
      }  style={GlobalStyles.botones}><Text style={{color: Color.superWhite}}>Acceder</Text></Pressable>
      <Pressable onPress={()=> router.push('./register')
      } style={GlobalStyles.botones}><Text style={{color: Color.superWhite}}>Registrarse</Text></Pressable>
  </View>
</View>
<Link href="/" style={[GlobalStyles.textos, {marginTop: 10}]}>¿Olvidaste la contraseña?</Link>
</View>
)}
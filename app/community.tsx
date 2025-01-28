import { TextInput, View, Image, Pressable } from "react-native";
import { GlobalStyles } from "./themes/GlobalStyles"
import { Text } from "react-native";
import { Color } from "./themes/Color";
import { Link, router } from "expo-router";
import { withDecay } from "react-native-reanimated";


export default function Community() {
  return (
    <View style={[GlobalStyles.containerLogin, { position: "relative", backgroundColor: Color.superWhite }]}>
      
      <View style={[GlobalStyles.containerHeader, {marginTop:-35}, {padding:20}]}>

            <Pressable onPress={()=> router.push('./mainpage')}>
              <Image style={[GlobalStyles.backArrow, {marginLeft:10, marginTop: 40, marginBottom: 0}]}source={require('../assets/images/ELEMENTOS_GENERALES/back_arrow_white.png')}></Image>
            </Pressable>
            <Text style={[GlobalStyles.textoHeader, {marginLeft:40, marginTop: 80, fontSize: 30} ]}>COMUNIDAD ANIMAL</Text>
            <Image style={[GlobalStyles.imgGeneral , {marginLeft:75, marginTop: 55}]}source={require('../assets/images/ELEMENTOS_GENERALES/logo_2.png')}></Image>
      </View>


      <View style={[GlobalStyles.tarjetaNaranja, {flexDirection:'column'}, {padding:30}]}>
        <View style={[{flexDirection:'row'}]}>
        <Image style={[GlobalStyles.imgLogo, {marginBottom:-5}]}source={require('../assets/images/FORO_DE_COMUNIDAD/calendario.png')} ></Image>
          <Text style={[GlobalStyles.textoTarjetas, {marginTop:20}, {marginLeft:20}]}>PATITAS EN MARCHA (eventos)</Text>
        </View>
        <Text style={[GlobalStyles.textoTarjetas, {fontSize:28}, ]}>Descubre eventos solidarios creados por la
            comunidad: actividades deportivas, caminatas
            y mucho más. 🐾❤️ Cada participación suma
            para ayudar a los animales que más lo
            necesitan. ¡Únete y sé parte del cambio!</Text>
      </View>

      <Text style={[{color:Color.blue}, {fontSize:40}, {fontWeight:"bold"}, {marginRight:240}, {fontFamily: "PoppinsBold",}]}>TEMAS DE DISCUSIÓN</Text>

      <View style={GlobalStyles.tarjetaAzul}>
        <Text style={GlobalStyles.textoTarjetas}>Guías de alimentación B.A.R.F para tu animal</Text>
        <Image style={[GlobalStyles.imgForo]}source={require('../assets/images/FORO_DE_COMUNIDAD/bocadillo de mensaje.png')} ></Image>
        <Text style={[GlobalStyles.textoNumComentarios]}>15</Text>
      </View>
      <View style={GlobalStyles.tarjetaAzul}>
        <Text style={GlobalStyles.textoTarjetas}>Consejos para sobrellevar el calor con tu mascota</Text>
        <Image style={[GlobalStyles.imgForo]}source={require('../assets/images/FORO_DE_COMUNIDAD/bocadillo de mensaje.png')} ></Image>
        <Text style={[GlobalStyles.textoNumComentarios]}>24</Text>
      </View>
      <View style={GlobalStyles.tarjetaAzul}>
        <Text style={GlobalStyles.textoTarjetas}>Métodos de adiestramiento canino para principiantes</Text>
        <Image style={[GlobalStyles.imgForo]}source={require('../assets/images/FORO_DE_COMUNIDAD/bocadillo de mensaje.png')} ></Image>
        <Text style={[GlobalStyles.textoNumComentarios]}>12</Text>
      </View>
      
      <View style={[GlobalStyles.tarjetaNaranja, {padding:30}, {width:"92%"}]}>
        <Text style={[GlobalStyles.textoTarjetas, {textAlign:'center'}]}>EMPEZAR UNA NUEVA DISCUSIÓN</Text>
      </View>

     
      
    </View>
  );
}

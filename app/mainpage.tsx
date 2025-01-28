import { TextInput, View, Image, Pressable } from "react-native";
import { GlobalStyles } from "./themes/GlobalStyles"
import { Text } from "react-native";
import { Color } from "./themes/Color";
import { Link, router } from "expo-router";


export default function Main() {
  return (
    <View style={[GlobalStyles.containerLogin, { position: "relative", backgroundColor: Color.lighterBlue }]}>
      
      {/* Encabezado */}
      <View style={[{flexDirection: 'column'}, {backgroundColor: Color.lighterBlue}, {width: '100%'}]}>
        <View style={GlobalStyles.containerHeader}>
        <Pressable onPress={()=> router.push('./login')}>
          <Image style={[GlobalStyles.backArrow, {marginLeft: 30}, {marginTop: 15}]} source={require('../assets/images/ELEMENTOS_GENERALES/back_arrow_white.png')}/>
        </Pressable>
          <Text style={[GlobalStyles.textoPetConnect, {fontSize: 70}, {marginTop: 45}]}> Petconnect</Text>
          <Image style={[GlobalStyles.imgLogo, {marginTop: 30, marginBottom: 0, marginLeft: 40}]} source={require('../assets/images/ELEMENTOS_GENERALES/logo_2.png')}></Image>
        </View>
        <View style={GlobalStyles.containerHeaderUsu}>
          <Image style={[GlobalStyles.imgLogo, {marginLeft: 60}, {height: 120}, {width: 120}]} source={require('../assets/images/PAGINA_PRINCIPAL_(HOME)/hola.png')}></Image>
          <View style={[GlobalStyles.column, {height: 50, marginLeft: 20}]}>
            <Text style={[GlobalStyles.textos, {fontSize: 35}]}>Mario G.</Text>
            <Text style={[GlobalStyles.textos, {fontSize: 30, fontFamily: "Poppins"}]}>@mariogpets</Text>
          </View>
        </View>
      
      </View>
      
      <View style={[GlobalStyles.column, {backgroundColor: Color.superWhite}, {width: '100%'}, {padding: 20}]}>
        <Text style={{color: Color.orange, fontSize: 50, fontFamily: "PoppinsBold", fontWeight: "bold", alignSelf: "flex-start", textAlign: "left", marginLeft:20, marginTop:20, paddingBottom: 20}}>SECCIONES</Text>
          <View style={[GlobalStyles.row, {marginLeft: 40}]}>
            <Image style={[GlobalStyles.imgSecciones, {backgroundColor: Color.orange}]} source={require('../assets/images/PAGINA_PRINCIPAL_(HOME)/manos_agarrando_huellita.png')}></Image>
            <Pressable onPress={()=> router.push('./community')}>
              <Text style={[GlobalStyles.textos, {color: Color.black}, {width: 450}, {textAlign: "left"}, {marginLeft: 50}]}>Comunidad animal</Text>
            </Pressable>
          </View>
          
          <View style={[GlobalStyles.row, {marginLeft: 40}]}>
            <Image style={[GlobalStyles.imgSecciones, {backgroundColor: Color.orange}]} source={require('../assets/images/PAGINA_PRINCIPAL_(HOME)/huellitas_patas_en_marcha.png')}></Image>
            <View>
              <Text style={[GlobalStyles.textos, {color: Color.black}, {width: 450}, {textAlign: "left"}, {marginLeft: 50}]}>Patas en marcha</Text>
            </View>
            
          </View>

          <View style={[GlobalStyles.row, {marginLeft: 40}]}>
            <Image style={[GlobalStyles.imgSecciones, {backgroundColor: Color.orange}]} source={require('../assets/images/PAGINA_PRINCIPAL_(HOME)/huella_patitas_al_rescate.png')}></Image>
            <Pressable onPress={()=> router.push('./maps')}>
              <Text style={[GlobalStyles.textos, {color: Color.black}, {width: 450}, {textAlign: "left"}, {marginLeft: 50}]}>Patitas al rescate</Text>
            </Pressable>
          </View>

          <View style={[GlobalStyles.row, {marginLeft: 40}]}>
            <Image style={[GlobalStyles.imgSecciones, {backgroundColor: Color.orange}]} source={require('../assets/images/PAGINA_PRINCIPAL_(HOME)/adopt_me.png')}></Image>
            <Pressable onPress={()=> router.push('./shelter')}>
              <Text style={[GlobalStyles.textos, {color: Color.black}, {width: 450}, {textAlign: "left"}, {marginLeft: 50}]}>Refugio de patitas</Text>
            </Pressable>          
          </View>

          <View style={[GlobalStyles.row, {marginLeft: 40}]}>
            <Image style={[GlobalStyles.imgSecciones, {backgroundColor: Color.orange}]} source={require('../assets/images/PAGINA_PRINCIPAL_(HOME)/lupa.png')}></Image>
            <Text style={[GlobalStyles.textos, {color: Color.black}, {width: 450}, {textAlign: "left"}, {marginLeft: 50}]}>Sobre PetConnect</Text>
          </View>

        </View>

      

      <View style={{backgroundColor: Color.lighterBlue, width: '100%'}}>
        <Text style={[GlobalStyles.textos, {fontSize: 30}, {margin: 20}, {fontWeight: "bold"}]}>PROTECTORAS EN COLABORACIÓN</Text>

        <View style={{flexDirection: 'row', justifyContent: 'center', padding: 20, gap: 40}}>
          <Image style={GlobalStyles.imgSecciones} source={require('../assets/images/PAGINA_PRINCIPAL_(HOME)/logo_protectora_1.png')}></Image>
          <Image style={GlobalStyles.imgSecciones}  source={require('../assets/images/PAGINA_PRINCIPAL_(HOME)/logo_protectora_2.png')}></Image>
      </View>
      </View>
      
    </View>
    
  );
}

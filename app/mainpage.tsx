import { TextInput, View, Image, Pressable } from "react-native";
import { GlobalStyles } from "./themes/GlobalStyles"
import { Text } from "react-native";
import { Color } from "./themes/Color";
import { Link, router } from "expo-router";


export default function Main() {
  return (
    <View style={[GlobalStyles.containerLogin, { position: "relative", backgroundColor: Color.blue }]}>
      
      {/* Encabezado */}
      <View style={[{flexDirection: 'column'}, {backgroundColor: Color.blue}, {width: '100%'}]}>
        <View style={GlobalStyles.containerHeader}>
          <Text style={[GlobalStyles.textoPetConnect, {fontSize: 70}]}> Petconnect</Text>
          <Image style={GlobalStyles.imgLogo} source={require('../assets/images/ELEMENTOS_GENERALES/logo_2.png')}></Image>
        </View>
        <View style={GlobalStyles.containerHeaderUsu}>
          <Image style={[GlobalStyles.imgLogo, {marginLeft: 60}, {height: 120}, {width: 120}]} source={require('../assets/images/PAGINA_PRINCIPAL_(HOME)/hola.png')}></Image>
          <View style={[GlobalStyles.column, {height: 50}]}>
            <Text style={[GlobalStyles.textos, {fontSize: 30}]}>Mario G.</Text>
            <Text style={[GlobalStyles.textos, {fontSize: 20}]}>@mariogpets</Text>
          </View>
        </View>
      
      </View>
      
      <View style={[GlobalStyles.column, {backgroundColor: Color.superWhite}, {width: '100%'}, {padding: 20}]}>
        <Text
          style={{
            color: Color.orange,
            fontSize: 50,
            fontFamily: "PopinsBold",
            fontWeight: "bold",
            alignSelf: "flex-start",
            textAlign: "left",
            marginLeft:20, 
            marginTop:20,
            paddingBottom: 20,
          }}
        >
          SECCIONES
        </Text>
          <View style={GlobalStyles.row}>
            <Image style={[GlobalStyles.imgSecciones, {backgroundColor: Color.orange}, {marginRight: 40}]} source={require('../assets/images/PAGINA_PRINCIPAL_(HOME)/manos_agarrando_huellita.png')}></Image>
            <Pressable onPress={()=> router.push('./community')}>
              <Text style={[GlobalStyles.textos, {color: Color.black}, {fontSize: 40}]}>Comunidad animal</Text>
            </Pressable>
          </View>
          
          <View style={GlobalStyles.row}>
            <Image style={[GlobalStyles.imgSecciones, {backgroundColor: Color.orange}, {marginRight: 130}]} source={require('../assets/images/PAGINA_PRINCIPAL_(HOME)/huellitas_patas_en_marcha.png')}></Image>
            <View style={{marginLeft: -40}}>
              <Text style={[GlobalStyles.textos, {color: Color.black}, {fontSize: 40}, {textAlign: "center"}]}>Patas en marcha</Text>
            </View>
            
          </View>

          <View style={GlobalStyles.row}>
            <Image style={[GlobalStyles.imgSecciones, {backgroundColor: Color.orange}, {marginRight: 80}]} source={require('../assets/images/PAGINA_PRINCIPAL_(HOME)/huella_patitas_al_rescate.png')}></Image>
            <Text style={[GlobalStyles.textos, {color: Color.black}, {fontSize: 40}]}>Patitas al rescate</Text>
          </View>

          <View style={GlobalStyles.row}>
            <Image style={[GlobalStyles.imgSecciones, {backgroundColor: Color.orange}, {marginRight: 60}]} source={require('../assets/images/PAGINA_PRINCIPAL_(HOME)/adopt_me.png')}></Image>
            <Pressable onPress={()=> router.push('./shelter')}>
              <Text style={[GlobalStyles.textos, {color: Color.black}, {fontSize: 40}]}>Refugio de patitas</Text>
            </Pressable>          
          </View>

          <View style={GlobalStyles.row}>
            <Image style={[GlobalStyles.imgSecciones, {backgroundColor: Color.orange}, {marginRight: 62}]} source={require('../assets/images/PAGINA_PRINCIPAL_(HOME)/lupa.png')}></Image>
            <Text style={[GlobalStyles.textos, {color: Color.black}, {fontSize: 40}]}>Sobre PetConnect</Text>
          </View>

        </View>

      

      <View style={{backgroundColor: Color.aquariusBlue, width: '100%'}}>
        <Text style={[GlobalStyles.textos, {fontSize: 30}, {margin: 20}, {fontWeight: "bold"}]}>PROTECTORAS EN COLABORACIÓN</Text>

        <View style={{flexDirection: 'row', justifyContent: 'center', padding: 20, gap: 40}}>
          <Image style={GlobalStyles.imgSecciones} source={require('../assets/images/PAGINA_PRINCIPAL_(HOME)/logo_protectora_1.png')}></Image>
          <Image style={GlobalStyles.imgSecciones}  source={require('../assets/images/PAGINA_PRINCIPAL_(HOME)/logo_protectora_2.png')}></Image>
      </View>
      </View>
      
    </View>
    
  );
}

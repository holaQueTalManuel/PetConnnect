import { TextInput, View, Image, Pressable } from "react-native";
import { GlobalStyles } from "./themes/GlobalStyles"
import { Text } from "react-native";
import { Color } from "./themes/Color";
import { Link, router } from "expo-router";


export default function Main() {
  return (
    <View style={[GlobalStyles.containerLogin, { position: "relative", backgroundColor: Color.superWhite }]}>
      
      {/* Encabezado */}
      <View style={[{flexDirection: 'column'}, {backgroundColor: Color.blue}, {width: '100%'}]}>
        <View style={GlobalStyles.containerHeader}>
          <Text style={GlobalStyles.textoPetConnect}> Petconnect</Text>
          <Image style={GlobalStyles.imgLogo} source={require('../assets/images/ELEMENTOS_GENERALES/logo_2.png')}></Image>
        </View>
        <View style={GlobalStyles.containerHeader}>
        <Image style={GlobalStyles.imgLogo} source={require('../assets/images/PAGINA_PRINCIPAL_(HOME)/hola.png')}></Image>
          <View ></View>
        </View>
      
      </View>
      {/* Texto SECCIONES */}
      <View style={{ width: "100%", paddingHorizontal: 20 }}> {/* Contenedor para alinear el texto */}
        <Text
          style={{
            color: Color.orange,
            fontSize: 50,
            fontWeight: "bold",
            textAlign: "left",
            marginLeft:20, 
            marginTop:20
          }}
        >
          SECCIONES
        </Text>
      </View>
      <View style={GlobalStyles.row}>

        <View style={GlobalStyles.column}>
          <Image style={[GlobalStyles.imgSecciones, {backgroundColor: Color.orange}, {marginRight: 40}, {margin:20}]} source={require('../assets/images/PAGINA_PRINCIPAL_(HOME)/manos_agarrando_huellita.png')}></Image>
          <Image style={[GlobalStyles.imgSecciones, {backgroundColor: Color.orange}, {marginRight: 40}, {margin:20}]} source={require('../assets/images/PAGINA_PRINCIPAL_(HOME)/huellitas_patas_en_marcha.png')}></Image>
          <Image style={[GlobalStyles.imgSecciones, {backgroundColor: Color.orange}, {marginRight: 40}, {margin:20}]} source={require('../assets/images/PAGINA_PRINCIPAL_(HOME)/huella_patitas_al_rescate.png')}></Image>
          <Image style={[GlobalStyles.imgSecciones, {backgroundColor: Color.orange}, {marginRight: 40}, {margin:20}]} source={require('../assets/images/PAGINA_PRINCIPAL_(HOME)/adopt_me.png')}></Image>
          <Image style={[GlobalStyles.imgSecciones, {backgroundColor: Color.orange}, {marginRight: 40}, {margin:20}]} source={require('../assets/images/PAGINA_PRINCIPAL_(HOME)/lupa.png')}></Image>
        </View>
        <View style={[GlobalStyles.column]}>
          <Pressable onPress={()=> router.push('./community')
        }>
          <Text style={[GlobalStyles.textos, {color: Color.black}, {fontWeight: "bold"}, {paddingTop:60}, {paddingBottom:60}]}>Comunidad animal</Text>
          </Pressable>

        
          <Text style={[GlobalStyles.textos, {color: Color.black}, {fontWeight: "bold"}, {paddingTop:60}, {paddingBottom:60}]}>Patas en marcha</Text>
      

          <Pressable onPress={()=> router.push('./maps')
        }>
          <Text style={[GlobalStyles.textos, {color: Color.black}, {fontWeight: "bold"}, {paddingTop:60}, {paddingBottom:60}]}>Patitas al rescate</Text>
          </Pressable>


          
       

        
          <Pressable onPress={()=> router.push('./shelter')
        }>
          <Text style={[GlobalStyles.textos, {color: Color.black}, {fontWeight: "bold"}, {paddingTop:60}, {paddingBottom:60}]}>Refugio de patitas</Text>
          </Pressable>
        

        
          <Text style={[GlobalStyles.textos, {color: Color.black}, {fontWeight: "bold"}, {paddingTop:60}, {paddingBottom:60}]}>Sobre PetConnect</Text>
        </View>


      </View>

      <View style={{backgroundColor: Color.blue, width: '100%'}}>
        <Text style={[GlobalStyles.textos, {fontSize: 30}, {margin: 20}, {fontWeight: "bold"}]}>PROTECTORAS EN COLABORACIÓN</Text>

        <View style={{flexDirection: 'row', justifyContent: 'center', padding: 20, gap: 40}}>
          <Image style={GlobalStyles.imgSecciones} source={require('../assets/images/PAGINA_PRINCIPAL_(HOME)/logo_protectora_1.png')}></Image>
          <Image style={GlobalStyles.imgSecciones}  source={require('../assets/images/PAGINA_PRINCIPAL_(HOME)/logo_protectora_2.png')}></Image>
      </View>
      </View>
      
    </View>
    
  );
}

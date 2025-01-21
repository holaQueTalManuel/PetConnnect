import { TextInput, View, Image, Pressable } from "react-native";
import { GlobalStyles } from "./themes/GlobalStyles"
import { Text } from "react-native";
import { Color } from "./themes/Color";
import { Link, router } from "expo-router";


export default function Main() {
  return (
    <View style={[GlobalStyles.containerLogin, { position: "relative", backgroundColor: Color.superWhite }]}>
      
      {/* Encabezado */}
      <View style={[GlobalStyles.row, { backgroundColor: Color.blue, marginBottom: 40 }, {width: "100%"}]}>
        <Text style={[GlobalStyles.textoPetConnect, { fontSize: 40 }]}>PetConnect</Text>
      </View>

      {/* Texto SECCIONES */}
      <View style={{ width: "100%", paddingHorizontal: 20 }}> {/* Contenedor para alinear el texto */}
        <Text
          style={{
            color: Color.orange,
            fontSize: 40,
            fontWeight: "bold",
            textAlign: "left",
          }}
        >
          SECCIONES
        </Text>
      </View>
      <View style={GlobalStyles.column}>
        <View style={GlobalStyles.rowPro}>
          <Image style={[GlobalStyles.imgSecciones, {backgroundColor: Color.orange}, {marginRight: 40}]} source={require('../assets/images/PAGINA_PRINCIPAL_(HOME)/manos_agarrando_huellita.png')}></Image>
          <Pressable onPress={() => router.push('/community')}>
            <Text style={[GlobalStyles.textos, { color: Color.black }, { fontWeight: "bold" }]}>
              Comunidad animal
            </Text>
          </Pressable>
        </View>
        <View style={GlobalStyles.rowPro}>
          <Image style={[GlobalStyles.imgSecciones, {backgroundColor: Color.orange}, {marginRight: 40}]} source={require('../assets/images/PAGINA_PRINCIPAL_(HOME)/huellitas_patas_en_marcha.png')}></Image>
          <Text style={[GlobalStyles.textos, {color: Color.black}, {fontWeight: "bold"}]}>Patas en marcha</Text>
        </View>

        <View style={GlobalStyles.rowPro}>
          <Image style={[GlobalStyles.imgSecciones, {backgroundColor: Color.orange}, {marginRight: 40}]} source={require('../assets/images/PAGINA_PRINCIPAL_(HOME)/huella_patitas_al_rescate.png')}></Image>
          <Text style={[GlobalStyles.textos, {color: Color.black}, {fontWeight: "bold"}]}>Patitas al rescate</Text>
        </View>

        <View style={GlobalStyles.rowPro}>
          <Image style={[GlobalStyles.imgSecciones, {backgroundColor: Color.orange}, {marginRight: 40}]} source={require('../assets/images/PAGINA_PRINCIPAL_(HOME)/adopt_me.png')}></Image>
          <Text style={[GlobalStyles.textos, {color: Color.black}, {fontWeight: "bold"}]}>Refugio de patitas</Text>
        </View>

        <View style={GlobalStyles.rowPro}>
          <Image style={[GlobalStyles.imgSecciones, {backgroundColor: Color.orange}, {marginRight: 40}]} source={require('../assets/images/PAGINA_PRINCIPAL_(HOME)/lupa.png')}></Image>
          <Text style={[GlobalStyles.textos, {color: Color.black}, {fontWeight: "bold"}]}>Sobre PetConnect</Text>
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

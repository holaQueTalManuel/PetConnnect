import { TextInput, View, Image, Pressable, StyleSheet } from "react-native";
import { GlobalStyles } from "./themes/GlobalStyles";
import { Text } from "react-native";
import { Color } from './themes/Color';


export default function ShelterPage() {
  return (
    <View>
      <View style={[GlobalStyles.containerHeader, {backgroundColor: Color.lighterBlue}, {alignItems: "center"}, {justifyContent: "space-between"}, {paddingHorizontal: 30}]}>
        <Text style={[GlobalStyles.textos]}>REFUGIO DE PATITAS</Text>
        <Image source={require('../assets/images/ELEMENTOS_GENERALES/logo_2.png')} style={[GlobalStyles.imgGeneral, {margin: 40}]}/>
    </View>

    <View style={[GlobalStyles.containerText, {padding: 20}, {margin: 30}, {elevation: 50}]}>
      <Text style={[GlobalStyles.textos, {textAlign: "left"}, {fontSize: 20}, {marginBottom: 15}]}>Adoptar es un compromiso para toda la vida, piénsalo bien antes de dar el paso. </Text>
      <Text style={[GlobalStyles.textos, {textAlign: "left"}, {fontSize: 20}, {fontFamily: "Poppins"}]}>Si no puedes cuidarlo hoy, mañana y siempre; no adoptes.</Text>
      <View style={{flex: 1, justifyContent: "flex-end"}}>
        <Image source={require('../assets/images/CATALOGO_DE_ADOPCIONES/perritos_y_gatitos.png')} style={[GlobalStyles.imgGeneral, {width: 600}, {height: 150}, {alignSelf: "center"}, {marginBottom: -50}]}/>
      </View>
    </View>

    <Text style={[GlobalStyles.textos, {color: Color.blue}, {fontFamily: "PoppinsMedium"}, {alignSelf: "flex-start"}, {marginLeft: 25}]}>CATEGORÍAS</Text>

    <View style={{flexDirection: "row", justifyContent: "center", marginTop: 20}}>
      <View style={[GlobalStyles.containerCategories, {alignItems: "center"}]}>
        <Image source={require('../assets/images/CATALOGO_DE_ADOPCIONES/gatito_animado.png')} style={[GlobalStyles.imgGeneral, {marginTop: 20}, {width: 125}, {height: 125}]}/>
        <Text style={[GlobalStyles.textos, {fontSize: 25}, {margin: 10}, {color: Color.blue}]}>GATOS</Text>
      </View>
      <View style={[GlobalStyles.containerCategories, {alignItems: "center"}]}>
        <Image source={require('../assets/images/CATALOGO_DE_ADOPCIONES/perrito_animado.png')} style={[GlobalStyles.imgGeneral, {marginTop: 20}, {width: 125}, {height: 125}]}/>
        <Text style={[GlobalStyles.textos, {fontSize: 25}, {margin: 10}, {color: Color.blue}]}>PERROS</Text>
      </View>
      <View style={[GlobalStyles.containerCategories, {alignItems: "center"}]}>
        <Image source={require('../assets/images/CATALOGO_DE_ADOPCIONES/conejito_animado.png')} style={[GlobalStyles.imgGeneral, {marginTop: 20}, {width: 125}, {height: 125}]}/>
        <Text style={[GlobalStyles.textos, {fontSize: 25}, {margin: 10}, {color: Color.blue}]}>CONEJOS</Text>
      </View>
    </View>

    <View style={{flexDirection: "row", marginLeft: 60}}>
      <View style={[GlobalStyles.containerAnimals, {marginTop: 40}]}>
        <Image source={require('../assets/images/CATALOGO_DE_ADOPCIONES/Pluto.png')} style={styles.imgAdopt}/>
        <View style={{flexDirection: "row"}}>
          <View style={{flexDirection: "column", alignItems: "flex-start"}}>
            <Text style={[GlobalStyles.textos, {color: Color.blue}, {fontSize: 20}, {marginLeft: 20}, {marginTop: 10}]}>Pluto</Text>
            <Text style={[GlobalStyles.textos, {color: Color.blue}, {fontSize: 20}, {fontFamily: "Poppins"}, {marginLeft: 20}, {paddingBottom: 10}]}>Macho, 1,5 años </Text>
          </View>
          <Image source={require('../assets/images/ELEMENTOS_GENERALES/favoritos2.png')} style={styles.imgFav}/>
        </View>
      </View>
      <View style={[GlobalStyles.containerAnimals, {marginTop: 40}]}>
        <Image source={require('../assets/images/CATALOGO_DE_ADOPCIONES/Afro_y_Shaggy.png')} style={styles.imgAdopt}/>
        <View style={{flexDirection: "row"}}>
          <View style={{flexDirection: "column", alignItems: "flex-start"}}>
            <Text style={[GlobalStyles.textos, {color: Color.blue}, {fontSize: 20}, {marginLeft: 20}, {marginTop: 10}]}>Afro y Shaggy</Text>
            <Text style={[GlobalStyles.textos, {color: Color.blue}, {fontSize: 20}, {fontFamily: "Poppins"}, {marginLeft: 20}, {paddingBottom: 10}]}>Machos, 3 meses </Text>
          </View>
          <Image source={require('../assets/images/ELEMENTOS_GENERALES/favoritos2.png')} style={styles.imgFav}/>
        </View>
      </View>
    </View>

    <View style={{flexDirection: "row", marginLeft: 60}}>
      <View style={[GlobalStyles.containerAnimals, {marginTop: 20}]}>
        <Image source={require('../assets/images/CATALOGO_DE_ADOPCIONES/Eros.png')} style={styles.imgAdopt}/>
        <View style={{flexDirection: "row"}}>
          <View style={{flexDirection: "column", alignItems: "flex-start"}}>
            <Text style={[GlobalStyles.textos, {color: Color.blue}, {fontSize: 20}, {marginLeft: 20}, {marginTop: 10}]}>Eros</Text>
            <Text style={[GlobalStyles.textos, {color: Color.blue}, {fontSize: 20}, {fontFamily: "Poppins"}, {marginLeft: 20}, {paddingBottom: 10}]}>Macho, 6 meses </Text>
          </View>
          <Image source={require('../assets/images/ELEMENTOS_GENERALES/favoritos2.png')} style={styles.imgFav}/>
        </View>
      </View>
      <View style={[GlobalStyles.containerAnimals, {marginTop: 20}]}>
        <Image source={require('../assets/images/CATALOGO_DE_ADOPCIONES/Stelle.png')} style={styles.imgAdopt}/>
        <View style={{flexDirection: "row"}}>
          <View style={{flexDirection: "column", alignItems: "flex-start"}}>
            <Text style={[GlobalStyles.textos, {color: Color.blue}, {fontSize: 20}, {marginLeft: 20}, {marginTop: 10}]}>Stelle</Text>
            <Text style={[GlobalStyles.textos, {color: Color.blue}, {fontSize: 20}, {fontFamily: "Poppins"}, {marginLeft: 20}, {paddingBottom: 10}]}>Hembra, 2 años </Text>
          </View>
          <Image source={require('../assets/images/ELEMENTOS_GENERALES/favoritos2.png')} style={styles.imgFav}/>
        </View>
      </View>
    </View>

    </View>
)


}
const styles=StyleSheet.create({
  imgAdopt:{
    marginTop: 20,
    width: 240, 
    height: 196, 
    borderRadius: 10, 
    alignSelf: "center"
  },
  imgFav:{
    marginTop: 15,
    marginLeft: "5%",
    width: 50,
    height: 50,
  },
})
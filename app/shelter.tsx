import { View, Image, Pressable, StyleSheet } from "react-native";
import { GlobalStyles } from "./themes/GlobalStyles";
import { Text } from "react-native";
import { Color } from './themes/Color';
import { router } from "expo-router";


export default function ShelterPage() {
  return (
    <View>
      <View style={[GlobalStyles.containerHeader, {backgroundColor: Color.lighterBlue, alignItems: "center", justifyContent: "space-between", paddingHorizontal: 30}]}>
        
        <Pressable onPress={()=> router.push('./mainpage')}>
          <Image style={[GlobalStyles.backArrow]}source={require('../assets/images/ELEMENTOS_GENERALES/back_arrow.png')}/>
        </Pressable>

        <Text style={styles.textoHeader}>REFUGIO DE PATITAS</Text>
        <Image source={require('../assets/images/ELEMENTOS_GENERALES/logo_2.png')} style={[GlobalStyles.imgGeneral, {marginVertical: 40, marginRight: 0}]}/>
    </View>

    <View style={[GlobalStyles.containerText, {padding: 20, margin: 30, elevation: 50}]}>
      <Text style={[GlobalStyles.textos, {textAlign: "left", fontSize: 20, marginBottom: 15}]}>Adoptar es un compromiso para toda la vida, piénsalo bien antes de dar el paso. </Text>
      <Text style={[GlobalStyles.textos, {textAlign: "left", fontSize: 20, fontFamily: "Poppins"}]}>Si no puedes cuidarlo hoy, mañana y siempre; no adoptes.</Text>
      <View style={{flex: 1, justifyContent: "flex-end"}}>
        <Image source={require('../assets/images/CATALOGO_DE_ADOPCIONES/perritos_y_gatitos.png')} style={[GlobalStyles.imgGeneral, {width: 600}, {height: 150}, {alignSelf: "center"}, {marginBottom: -50}]}/>
      </View>
    </View>

    <Text style={[GlobalStyles.textos, {color: Color.blue, fontFamily: "PoppinsMedium", alignSelf: "flex-start", marginLeft: 25}]}>CATEGORÍAS</Text>

    <View style={{flexDirection: "row", justifyContent: "center", marginTop: 20}}>
      <View style={[styles.containerCategories]}>
        <Image source={require('../assets/images/CATALOGO_DE_ADOPCIONES/gatito_animado.png')} style={[styles.imgCategories]}/>
        <Text style={[styles.textosCategoriasAnimales]}>GATOS</Text>
      </View>
      <View style={[styles.containerCategories]}>
        <Image source={require('../assets/images/CATALOGO_DE_ADOPCIONES/perrito_animado.png')} style={[styles.imgCategories]}/>
        <Text style={[styles.textosCategoriasAnimales]}>PERROS</Text>
      </View>
      <View style={[styles.containerCategories]}>
        <Image source={require('../assets/images/CATALOGO_DE_ADOPCIONES/conejito_animado.png')} style={[styles.imgCategories]}/>
        <Text style={[styles.textosCategoriasAnimales]}>CONEJOS</Text>
      </View>
    </View>

    <View style={{flexDirection: "row", marginLeft: 40}}>
      <View style={[styles.containerAnimals, {marginRight: 35}]}>
        <Pressable onPress={()=> router.push('./animal')}>
          <Image source={require('../assets/images/CATALOGO_DE_ADOPCIONES/Pluto.png')} style={styles.imgAdopt}/>
        </Pressable>
        
        <View style={{flexDirection: "row"}}>
          <View style={{flexDirection: "column", alignItems: "flex-start"}}>
            <Text style={[styles.textosAnimalesPrincipal]}>Pluto</Text>
            <Text style={[styles.textosAnimales]}>Macho, 1,5 años </Text>
          </View>
          <Image source={require('../assets/images/ELEMENTOS_GENERALES/fav_icon.png')} style={styles.imgFav}/>
        </View>
      </View>
      <View style={styles.containerAnimals}>
        <Image source={require('../assets/images/CATALOGO_DE_ADOPCIONES/Afro_y_Shaggy.png')} style={styles.imgAdopt}/>
        <View style={{flexDirection: "row"}}>
          <View style={{flexDirection: "column", alignItems: "flex-start"}}>
            <Text style={[styles.textosAnimalesPrincipal]}>Afro y Shaggy</Text>
            <Text style={[styles.textosAnimales]}>Machos, 3 meses </Text>
          </View>
          <Image source={require('../assets/images/ELEMENTOS_GENERALES/fav_icon.png')} style={styles.imgFav}/>
        </View>
      </View>
    </View>

    <View style={{flexDirection: "row", marginLeft: 40}}>
      <View style={[styles.containerAnimals, {marginTop: 20, marginRight: 35}]}>
        <Image source={require('../assets/images/CATALOGO_DE_ADOPCIONES/Eros.png')} style={styles.imgAdopt}/>
        <View style={{flexDirection: "row"}}>
          <View style={{flexDirection: "column", alignItems: "flex-start"}}>
            <Text style={[styles.textosAnimalesPrincipal]}>Eros</Text>
            <Text style={[styles.textosAnimales]}>Macho, 6 meses </Text>
          </View>
          <Image source={require('../assets/images/ELEMENTOS_GENERALES/fav_icon.png')} style={styles.imgFav}/>
        </View>
      </View>
      <View style={[styles.containerAnimals, {marginTop: 20}]}>
        <Image source={require('../assets/images/CATALOGO_DE_ADOPCIONES/Stelle.png')} style={styles.imgAdopt}/>
        <View style={{flexDirection: "row"}}>
          <View style={{flexDirection: "column", alignItems: "flex-start"}}>
            <Text style={[styles.textosAnimalesPrincipal]}>Stelle</Text>
            <Text style={[styles.textosAnimales]}>Hembra, 2 años </Text>
          </View>
          <Image source={require('../assets/images/ELEMENTOS_GENERALES/fav_icon.png')} style={styles.imgFav}/>
        </View>
      </View>
    </View>

    </View>
)}

const styles=StyleSheet.create({
  textoHeader:{
    color: Color.white,
    fontFamily: "PoppinsBold",
    textAlign: "center",
    width: 600, 
    marginRight: 20, 
    marginLeft: 10, 
    fontSize: 35
  },
  imgAdopt:{
    marginTop: -20,
    width: 240, 
    height: 196, 
    borderRadius: 10, 
    alignSelf: "center"
  },
  imgCategories:{
    marginTop: 20, 
    width: 125, 
    height: 125
  },
  imgFav:{
    marginTop: 15,
    marginLeft: "5%",
    width: 50,
    height: 50,
  },
  containerAnimals:{
    backgroundColor: Color.orange2,
    borderRadius: 20,
    width: "42%",
    marginHorizontal: 10,
    justifyContent: "space-around",
    paddingTop: 40,
    marginTop: 40
  },
  textos:{
    fontSize: 20,
    color: Color.white,
    fontFamily: "PoppinsBold",
    textAlign: "left"
  },
  textosCategoriasAnimales:{
    fontFamily: "PoppinsBold",
    fontSize: 25, 
    margin: 10, 
    color: Color.blue
  },
  containerCategories:{
    backgroundColor: Color.lightBlue,
    borderRadius: 20,
    width: "28%",
    flexDirection: "column",
    marginHorizontal: 10,
    alignItems: "center"
  },
  textosAnimales:{
    color: Color.blue, 
    fontSize: 20, 
    fontFamily: "Poppins",
    marginLeft: 20, 
    paddingBottom: 15,
    width: 175
  },
  textosAnimalesPrincipal:{
    color: Color.blue, 
    fontFamily: "PoppinsBold",
    fontSize: 24  , 
    marginLeft: 20, 
    marginTop: 10
  },

})
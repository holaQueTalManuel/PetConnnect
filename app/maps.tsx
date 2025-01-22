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
            <Image style={[GlobalStyles.imgHeader,{marginTop:90}, {marginBottom:20}, {marginLeft:30},    ]}source={require('../assets/images/ELEMENTOS_GENERALES/icono_menu.png')}></Image>
            <Text style={[GlobalStyles.textoHeader,{marginTop:90}, {marginBottom:30}, {marginLeft:38} ]}>PATITAS AL RESCATE</Text>
            <Image style={[GlobalStyles.imgHeader,{marginTop:90}, {marginBottom:20} , {marginLeft:40}  ]}source={require('../assets/images/ELEMENTOS_GENERALES/logo_2.png')}></Image>
      </View>


      <View style={[GlobalStyles.tarjetaAzul, {flexDirection:'column'}, {padding:30}]}>
        
          <Text style={[GlobalStyles.textoTarjetas,{textAlign:'center'}, {fontSize:25},{marginTop:10},  {marginBottom:10}]}>Este mapa conecta a quienes necesitan ayuda con quienes están dispuestos a ofrecerla.</Text>
        
        <Text style={[{color:Color.blue}, {fontFamily: "Poppins"},{fontSize:25},{textAlign:"center"}, ]}>Indica el punto donde un animal, una colonia o una situación requiere atención y descríbela para que podamos actuar juntos.</Text>
      </View>


      <Image style={[{borderRadius:20}, {margin:1}, {height:400}, {width:650}]} source={require('../assets/images/ELEMENTOS_GENERALES/mapa.png')}></Image>

      <View style={[GlobalStyles.tarjetaAzul, {width:"90%"}]}>
        <View style={[{flexDirection:'column'}]}>
            <View style={[{flexDirection:'row'}]}>
            <Image style={[{width:60}, {height:60}]}source={require('../assets/images/ELEMENTOS_GENERALES/location_icon.png')} ></Image>
            <View style={[{flexDirection:'column'}]}>
                <Text style={[{color:Color.blue}, {fontFamily: "Poppins"},{fontSize:25},{textAlign:"center"},{marginTop:-5}, {marginLeft:20}, {fontStyle:"italic"}]}>Añade la ubicación pulsando en el</Text>
                <Text style={[{color:Color.blue}, {fontFamily: "Poppins"},{fontSize:25},{textAlign:"center"}, {marginLeft:20}, {fontStyle:"italic"}]}> mapa o usando la barra de búsqueda</Text>
            </View>
            
            </View>
            <View style={[{flexDirection:'row'}, {backgroundColor:Color.white}, {borderRadius:20}, {height:50}, {width:600}, {marginTop:10}]} >
              <Image style={[{width:30}, {height:30}, {marginLeft:15}, {marginTop:8}]}source={require('../assets/images/ELEMENTOS_GENERALES/search_icon.png')}></Image>
              <Text style={[{fontFamily:"Poppins"}, {fontStyle:"italic"},{fontSize:25}, {marginTop:5}, {marginLeft:20}]}>Buscar ubicación</Text>
            </View> 
        </View>
      </View>
      <View style={[{backgroundColor:Color.blue}, {borderRadius:20}, {width:"90%"}, {height:300}, {marginBottom:60}]}>
        <View style={[{backgroundColor:Color.white},{borderRadius:20}, {height:190}, {width:"90%"}, {marginTop:20}, {marginLeft:30}]}>
          <Text style={[{fontFamily:"Poppins"},{color:Color.blue}, {fontStyle:"italic"},{fontSize:25}, {marginTop:10}, {marginLeft:20}]}>Describe la situación aquí...</Text>
          <View style={[{backgroundColor:Color.white},{borderRadius:20}, {height:60}, {width:"30%"}, {marginTop:160}, {marginLeft:200}]}>
            <Text  style={[{fontFamily:"PoppinsBold"},{color:Color.black}, {fontSize:30}, {marginTop:7}, {marginLeft:32}]}>ENVIAR</Text>
          </View>
        </View>
      </View>
      
     

     
      
    </View>
  );
}

import { TextInput, View, Image, Pressable } from "react-native";
import { GlobalStyles } from "./themes/GlobalStyles"
import { Text } from "react-native";
import { Color } from "./themes/Color";
import { Link, router } from "expo-router";


export default function ShelterPage() {
  return (
    <View style={[GlobalStyles.containerSuperiorBar, {position: "relative"}]}>
        
        <View style={GlobalStyles.containerShelterLogo}>
            <Image source={require('../assets/images/ELEMENTOS_GENERALES/logo_2.png')} style={GlobalStyles.imgShelterLogo}/>
        </View>

    </View>
)
}
import { TextInput, View, Image, Pressable } from "react-native";
import { GlobalStyles } from "../themes/GlobalStyles"
import { Text } from "react-native";
import { Color } from "../themes/Color";
import { Link, router } from "expo-router";


export const MainPage = () => {
    return (
        <View style={[GlobalStyles.containerLogin, {position: "relative"}]}>
            <Text>PACO SI LEES ESTO ME DEBES UN BESO Y SI SIGUES LEYENDO DOS</Text>
        </View>
    )
}
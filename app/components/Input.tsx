import { TextInput, View, Image, Pressable, StyleProp, TextStyle } from "react-native";
import { GlobalStyles } from "../themes/GlobalStyles"
import { Text } from "react-native";
import { Color } from "../themes/Color";
import { Link, router } from "expo-router";
import { useState } from "react";

interface InputProps {
    placeholder?: string;
    isPassword?: boolean;
    style?: StyleProp<TextStyle>; // Tipo para estilos personalizados
  }

export const Input = ({ placeholder = "Email", isPassword = false, style}: InputProps) => {
    const [secureText, setSecureText] = useState(isPassword);

    const toogleSecureText = () => {
        setSecureText(!secureText);
    }

    return (
        <View>
            <TextInput placeholder={placeholder} style={[GlobalStyles.textInputs, style]} secureTextEntry={secureText}/>
            
        </View>
    )

}
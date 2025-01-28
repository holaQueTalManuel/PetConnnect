import React from "react";
import { View, Image } from "react-native"
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';



const CustomDrawer = ( props: DrawerContentComponentProps ) => {
    return(
        <DrawerContentScrollView {...props}>
            <View>
                <Image source={require('../assets/images/PAGINA_PRINCIPAL_(HOME)/hola.png')} />
            </View>
            <DrawerItemList {...props}/>
        </DrawerContentScrollView>   
    )
}

export default CustomDrawer;
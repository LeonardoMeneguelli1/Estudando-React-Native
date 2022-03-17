import React from "react";
import {StyleSheet,Text,Image,Dimensions} from "react-native";

import topo from "../../../../assets/topo.png"

const width = Dimensions.get('screen').width;

export default function Topo(){
    return<>
    <Image source={topo} style={estilos.topo} />
    <Text style={estilos.titulo}>Loja de Skins</Text> 
</>
}

const estilos = StyleSheet.create({
    topo:{
        width: "100%",
        height: 550 / 768 * width,
        
    },

    titulo:{
        width: "100%",
        position:"absolute",
        textAlign: "center",
        fontSize: 30,
        color: "red",
        fontWeight: "bold",
        padding: 30

    },

})
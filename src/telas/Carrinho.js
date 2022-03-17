import React from 'react';
import {StyleSheet,Image,Dimensions,Text } from 'react-native';
import { View } from 'react-native';
import { color, tintColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

import topo from '../../assets/topo.png';
import logo from '../../assets/logo.png';

const width = Dimensions.get('screen').width;

export default function Carrinho() { 
   return <>
        <Image source={topo} style={estilos.topo} />
        <Text style={estilos.titulo}>Seu Carrinho</Text> 

        <View style={estilos.carrinho}>
            <Text style={estilos.nome}>Carrinho de Produtos</Text>
        <View style={estilos.empresa}>
            <Image style={estilos.imagemEmpresa} source={logo} />
            <Text style={estilos.nomeEmpresa}>Ferragens Ramada</Text>
        </View>
            <Text style={estilos.descrição}>Uma empresa séria com foco em uma logistica eficiente para você.</Text>
            <Text style={estilos.preco}>R$ 50,00</Text>
        </View>
   </>
}

const estilos= StyleSheet.create({
    topo:{
        width: "100%",
        height: 550 / 768 * width,
        
    },

    titulo:{
        width: "100%",
        position:"absolute",
        textAlign: "center",
        fontSize: 30,
        color: "#004519",
        fontWeight: "bold",
        padding: 30

    },
    carrinho:{
        paddingVertical: 8,
        paddingHorizontal: 16

    },
    nome: {
        color:"#464646",
        fontSize:26,
        lineHeight:42,
        fontFamily:"MontserratBold"

    },
    empresa:{
        flexDirection:"row",

    },
    imagemEmpresa:{
        width: 130,
        height: 25,

    },
    nomeEmpresa: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
        fontWeight:"bold",
        
        

    },
    descrição:{
        color:"#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
        fontFamily:"MontserratRegular",
        

    },
    preco:{
        color:"#2A9F85",
        fontWeight:"bold",
        fontSize:20,
        lineHeight: 42,
        marginTop: 8
        
    }
});
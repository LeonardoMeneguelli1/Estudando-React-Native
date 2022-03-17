import React from 'react';
import{View,StyleSheet,Image,Text} from 'react-native';

import Texto from '../../../componentes/texto';


export default function Detalhes({nome,logoEmpresa,nomeEmpresa,descricao,preco}){
    return<>
        <Text style={estilos.nome}>{nome}</Text>
        <View style={estilos.empresa}>
            <Image style={estilos.imagemEmpresa} source={logoEmpresa} />
            <Text style={estilos.nomeEmpresa}>{nomeEmpresa}</Text>
        </View>
        <Texto style={estilos.descricao}>{descricao}.</Texto>
        <Text style={estilos.preco}>{preco}</Text>
    </>
}

const estilos = StyleSheet.create({
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
        width: "20%",
        height: "100%",

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

})
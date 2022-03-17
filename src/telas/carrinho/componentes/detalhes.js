import React from 'react';
import{View,StyleSheet,Image,Text} from 'react-native';

import Texto from '../../../componentes/texto';
import logo from '../../../../assets/logo.png';

export default function Detalhes(){
    return<>
     <Text style={estilos.nome}>Carrinho de Skins</Text>
        <View style={estilos.empresa}>
            <Image style={estilos.imagemEmpresa} source={logo} />
            <Text style={estilos.nomeEmpresa}>RIOT</Text>
        </View>
            <Texto style={estilos.descrição}>Uma empresa que visa sempre a diversão e qulidade para os joadores.</Texto>
            <Text style={estilos.preco}>R$ 50,00</Text>
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
import React from 'react';
import {StyleSheet} from 'react-native';
import { View } from 'react-native';

import Topo from './componentes/topo';
import Detalhes from './componentes/detalhes';

export default function Carrinho() { 
   return <>
         
        <Topo/>
        
        <View style={estilos.carrinho}>
           <Detalhes/>
        </View>
   </>
}

const estilos = StyleSheet.create({
   
    carrinho:{
        paddingVertical: 8,
        paddingHorizontal: 16

    },
   
});
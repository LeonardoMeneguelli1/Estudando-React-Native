import React from 'react';
import {StyleSheet} from 'react-native';
import { View,ScrollView,FlatList,Text} from 'react-native';

import Topo from './componentes/topo';
import Detalhes from './componentes/detalhes';
import Item from './itens';

export default function Carrinho({ topo, detalhes, itens }) {
    return <>
      <FlatList
        data={itens.lista}
        renderItem={Item}
        keyExtractor={({ nome }) => nome }
        ListHeaderComponent={() => {
          return <>
            <Topo {...topo} />
            <View style={estilos.cesta}>
              <Detalhes {...detalhes} />
              <Text style={estilos.titulo}>{ itens.titulo }</Text>
            </View>
          </>
        }}
      />
    </>
  }
  
  const estilos = StyleSheet.create({
    titulo: {
      color: "#464646",
      fontWeight: "bold",
      marginTop: 32,
      marginBottom: 8,
      fontSize: 20,
      lineHeight: 32,
    },
    cesta: {
      paddingVertical: 8,
      paddingHorizontal: 16,
    },
  });
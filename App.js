import React from 'react'
import {SafeAreaView,View,Text,StatusBar } from 'react-native';

import Carrinho from './src/telas/carrinho';
import { 
  useFonts, 
  Montserrat_400Regular, 
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';
import mocks from './src/mocks/carrinho'

export default function App() {
  const[fonteCarregada] = useFonts ({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });
  // if (!fonteCarregada){
  //   return <View/>
  // }
  return (
    <SafeAreaView >
     <StatusBar/>
     <Carrinho {...mocks} topo={mocks.topo} detalhes={mocks.detalhes}/>
    </SafeAreaView>
  );
}



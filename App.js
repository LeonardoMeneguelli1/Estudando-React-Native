import { StatusBar } from 'expo-status-bar';
import React from 'react'
import {SafeAreaView,View,Text } from 'react-native';
import Carrinho from './src/telas/Carrinho';
import { useFonts,Montserrat_400Regular,Montserrat_700Bold,Montserrat_400Regular_Italic } from '@expo-google-fonts/montserrat';

export default function App() {
  const[fonteCarregada] = useFonts ({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });
  if (!fonteCarregada){
    return <View/>
  }
  return (
    <SafeAreaView >
     <StatusBar/>
     <Carrinho/>
    </SafeAreaView>
  );
}



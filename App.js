import React from 'react'
import { StatusBar } from 'react-native'

import { useFonts, Roboto_700Bold, Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto'

import { AppLoading } from 'expo'

import Routes from './src/routes/Routes'

  

const App = () => {
  
  let [fontsLoaded] = useFonts({
      Roboto_700Bold,
      Roboto_400Regular,
      Roboto_500Medium
  });
  
  if(!fontsLoaded){
    return (<AppLoading/>);
  }
  return (
    <>
      <StatusBar backgroundColor="#054c44" barStyle="light-content" />
      <Routes />
    </>
  )
}

export default App

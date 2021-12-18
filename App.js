import React from 'react';
import AppLoading from 'expo-app-loading';
import Navigator from './routes/homeStack'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './redux/store';
import thunk from 'redux-thunk';
import TipProvider from "react-native-tip";


import {
  useFonts,
  Assistant_200ExtraLight,
  Assistant_300Light,
  Assistant_400Regular,
  Assistant_500Medium,
  Assistant_600SemiBold,
  Assistant_700Bold,
  Assistant_800ExtraBold,
} from '@expo-google-fonts/assistant';

const store = createStore(reducers, applyMiddleware(thunk))

export default function App() {

  let [fontsLoaded, error] = useFonts({
    Assistant_200ExtraLight,
    Assistant_300Light,
    Assistant_400Regular,
    Assistant_500Medium,
    Assistant_600SemiBold,
    Assistant_700Bold,
    Assistant_800ExtraBold,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <Provider store={store}>
      <Navigator />
      <TipProvider
                    overlayOpacity={0.5}
                    titleStyle={{
                        fontWeight: 'bold',
                        fontSize: 18,
                        marginBottom: 10
                    }}
                    bodyStyle={{
                        fontSize: 16
                    }}
                    darkMode={false}
                />
    </Provider>
  );
}


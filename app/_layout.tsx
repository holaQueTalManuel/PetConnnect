import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Slot, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { Login } from './components/Login';


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();




export default function RootLayout() {
  
  // Load custom fonts
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    Poppins: require('../assets/fonts/Poppins-Light.ttf'),
    PoppinsGordo: require('../assets/fonts/Poppins-Medium.ttf'),
  });

  return (
    <Stack>
      {/* <Slot /> renderiza automáticamente las páginas según la estructura */}
      <Slot />
    </Stack>
  );
}


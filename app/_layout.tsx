import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack, Tabs } from 'expo-router';
import { Box, NativeBaseProvider } from 'native-base';
import { useEffect } from 'react';
import { Text, View, useColorScheme } from 'react-native';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'index',
  project: {
    initialRouteName: 'index'
  }
};

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    Rubik: require('../assets/fonts/Rubik-Regular.ttf'),
    ...FontAwesome.font
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  return (
    <>
      {/* Keep the splash screen open until the assets have loaded. In the future, we should just support async font loading with a native version of font-display. */}
      {!loaded && <SplashScreen />}
      {loaded && <RootLayoutNav />}
    </>
  );
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <NativeBaseProvider>
          <Stack>
            {/* <Stack.Screen name="(tabs)" options={{ headerShown: true }} /> */}
            {/* <Stack.Screen name="modal" options={{ presentation: 'modal' }} /> */}
            <Stack.Screen
              name='index'
              initialParams={{ name: 'index in (tabs)' }}
              options={{ headerShown: false, headerTitle: 'Home' }}
            />
          </Stack>
        </NativeBaseProvider>
      </ThemeProvider>
    </>
  );
}

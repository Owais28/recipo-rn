import FontAwesome from '@expo/vector-icons/FontAwesome'
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { SplashScreen, Stack } from 'expo-router'
import { NativeBaseProvider } from 'native-base'
import { useEffect } from 'react'
import { useColorScheme } from 'react-native'

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router'

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'index',
  project: {
    initialRouteName: 'index',
  },
}

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    Rubik: require('../assets/fonts/Rubik-Regular.ttf'),
    'Rubik-Regular': require('../assets/fonts/Rubik-Regular.ttf'),
    'Rubik-Bold': require('../assets/fonts/Rubik-Bold.ttf'),
    'Rubik-SemiBold': require('../assets/fonts/Rubik-SemiBold.ttf'),
    'Rubik-Medium': require('../assets/fonts/Rubik-Medium.ttf'),
    ...FontAwesome.font,
  })

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error
  }, [error])

  return (
    <>
      {/* Keep the splash screen open until the assets have loaded. In the future, we should just support async font loading with a native version of font-display. */}
      {!loaded && <SplashScreen />}
      {loaded && <RootLayoutNav />}
    </>
  )
}

function RootLayoutNav() {
  const colorScheme = useColorScheme()

  return (
    <>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <NativeBaseProvider>
          <Stack>
            {/* <Stack.Screen name="(tabs)" options={{ headerShown: true }} /> */}
            {/* <Stack.Screen name="modal" options={{ presentation: 'modal' }} /> */}
            {/* <Stack.Screen
              name='index'
              initialParams={{ name: 'index in (tabs)' }}
              options={{ headerShown: false, headerTitle: 'Home' }}
            /> */}
            {/* <Stack.Screen
              name='view-recipe'
              initialParams={{ name: 'index in view-recipe' }}
              options={{
                headerShown: false,
                headerTitle: 'Home'
              }}
            /> */}
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen
              name="view-recipe/index"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="profile/index"
              options={{ headerShown: false }}
            />
          </Stack>
        </NativeBaseProvider>
      </ThemeProvider>
    </>
  )
}

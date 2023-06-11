import { SplashScreen, useNavigation } from 'expo-router'
import { useFonts } from 'expo-font'
import React, { useCallback } from 'react'
import RootComponent from '../components/RootComponent'
// type Props = {}

const Index = () => {
  const navigation = useNavigation()
  console.log(navigation.getId())

  const [fontsLoaded] = useFonts({
    'YesevaOne-Regular': require('../assets/fonts/YesevaOne-Regular.ttf'),
  })

  // useEffect(() => {
  //   setTimeout(() => setContentLoaded(true), 3000)
  // }, [])

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      // setTimeout(() => setContentLoaded(true), 3000)
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return <RootComponent />
}

export default Index

// const styles = StyleSheet.create({
//   container: {
//     // paddingTop: 15,
//     // paddingBottom: 15
//   },
//   flex: {
//     flex: 1,
//     // alignItems: 'stretch',
//     gap: 10,
//     overflow: 'scroll',
//   },
//   button: {
//     ...Platform.select({
//       ios: {},
//       android: {
//         elevation: 4,
//         // Material design blue from https://material.google.com/style/color.html#color-color-palette
//         backgroundColor: '#2196F3',
//         borderRadius: 2,
//       },
//     }),
//   },
//   buttonText: {
//     textAlign: 'center',
//     margin: 8,
//     ...Platform.select({
//       ios: {
//         // iOS blue from https://developer.apple.com/ios/human-interface-guidelines/visual-design/color/
//         color: '#007AFF',
//         fontSize: 18,
//       },
//       android: {
//         color: 'white',
//         fontWeight: '500',
//       },
//     }),
//   },
//   heading: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
// })

import { Platform, StyleSheet } from 'react-native';
// import React from 'react';
import { useRouter, useNavigation, SplashScreen } from 'expo-router';
import { Box, Flex, ScrollView, Stack, Text, VStack } from 'native-base';
// import ProjectCard from '../components/Card/TrendingRecipe/';
// import FlexSectionWithLink from '../components/Section/FlexSectionWithLink';
import TrendingRecipeCard from '../components/Card/TrendingRecipe/TrendingRecipeCard';
// import ProjectCard from '../components/Card/Project/ProjectCard';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import PopularRecipeCard from '../components/Card/PopularRecipe/PopularRecipeCard';
// import { BackdropBlur, Blur, Canvas, Circle, Fill, Group, Paint } from '@shopify/react-native-skia';
// import { LinearGradient } from 'react-native-svg';

type Props = {};

const Index = (props: Props) => {
  const navigation = useNavigation();
  console.log(navigation.getId());

  const router = useRouter();

  const [fontsLoaded] = useFonts({
    'YesevaOne-Regular': require('../assets/fonts/YesevaOne-Regular.ttf')
    // 'Rubik-Bold': require('../../../assets/fonts/Rubik-Bold.ttf'),
    // 'Rubik-SemiBold': require('../../../assets/fonts/Rubik-SemiBold.ttf')
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Box safeArea bgColor={'#E9E9E9'}>
      <ScrollView>
        {/* <SafeAreaView /> */}
        {/* <StatusBar networkActivityIndicatorVisible /> */}
        <VStack mb={2} mt={50} style={{ gap: 15 }}>
          <Stack>
            <Text
              pl={3}
              fontFamily={'YesevaOne-Regular'}
              color={'rgb(71,85,75)'}
              fontSize={'2xl'}
              mb={2}
              lineHeight={'xs'}
            >
              Trending {''}
              {'\n'}
              Today
            </Text>
            <ScrollView horizontal mt={2}>
              <Flex flexDir={'row'} style={{ gap: 15 }} px={3}>
                {[...new Array(10)].map((item, index) => (
                  <TrendingRecipeCard key={index} />
                ))}
              </Flex>
            </ScrollView>
          </Stack>

          <Stack>
            <Text
              pl={3}
              fontFamily={'YesevaOne-Regular'}
              color={'rgb(71,85,75)'}
              fontSize={'lg'}
              mb={2}
              lineHeight={'xs'}
            >
              Popular {''}
              {/* {'\n'} */}
              Recipes
            </Text>

            {/*  */}

            {/*  */}
            <ScrollView horizontal mt={2}>
              <Flex flexDir={'row'} style={{ gap: 15 }} px={3}>
                {[...new Array(10)].map((item, index) => (
                  <PopularRecipeCard key={index} />
                ))}
              </Flex>
            </ScrollView>
          </Stack>
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    // paddingTop: 15,
    // paddingBottom: 15
  },
  flex: {
    flex: 1,
    // alignItems: 'stretch',
    gap: 10,
    overflow: 'scroll'
  },
  button: {
    ...Platform.select({
      ios: {},
      android: {
        elevation: 4,
        // Material design blue from https://material.google.com/style/color.html#color-color-palette
        backgroundColor: '#2196F3',
        borderRadius: 2
      }
    })
  },
  buttonText: {
    textAlign: 'center',
    margin: 8,
    ...Platform.select({
      ios: {
        // iOS blue from https://developer.apple.com/ios/human-interface-guidelines/visual-design/color/
        color: '#007AFF',
        fontSize: 18
      },
      android: {
        color: 'white',
        fontWeight: '500'
      }
    })
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});

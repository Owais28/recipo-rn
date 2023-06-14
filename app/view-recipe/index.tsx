import { Box, Button, Divider, HStack, Skeleton, VStack } from 'native-base'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import Animated from 'react-native-reanimated'
import Colors from '../../constants/Colors'

import RubikMediumText from '../../components/Typography/TextRubikMedium'
import { Dimensions } from 'react-native'
// import { Animated as RAnimated } from 'react-native'
import TabViewExample from '../../components/TabViewExample'
import { StatusBar } from 'expo-status-bar'
import ChefDetails from '../../components/screens/recipeInfo/ChefDetails'
import { RecipeImageWithTitleAndInfo } from '../../components/screens/recipeInfo/Image'
import { imgUrl } from '../../components/Card/TrendingRecipe/TrendingRecipeCard'

/**
 * ## Hook
 *
 * Date: 2023-06-22
 *
 * This hook is used when you render `<Skeleton/>` in your component and want
 * to have some dummy loading state for the sake of tasting.
 *
 * Returns useState() return value
 * @author Owais Athar
 * @version 1.0.0
 */

export const useDummyIsLoaded = (): [
  boolean,
  Dispatch<SetStateAction<boolean>>
] => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 3000)
  }, [])

  return [isLoaded, setIsLoaded]
}

export default function ViewRecipePage() {
  const [isLoaded] = useDummyIsLoaded()
  const [isHeaderShow, setIsHeaderShown] = useState(false)

  const SCREEN_HEIGHT = Dimensions.get('window').height

  return (
    <Animated.View style={{ height: SCREEN_HEIGHT, flex: 1 }}>
      {isHeaderShow ? (
        <StatusBar animated backgroundColor={Colors.light.freshGreen} />
      ) : (
        <StatusBar animated translucent />
      )}
      <Animated.ScrollView
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}>
        <ViewRecipePage.ImageWithTitleAndInfo
          recipeTitle={'Egg Dish'}
          isLoaded={isLoaded}
          difficulty={'Easy'}
          ratings={4.5}
          preparationTime={20}
          imgUri={imgUrl}
        />
        <ViewRecipePage.ChefDetails
          isLoaded={isLoaded}
          imgUri={imgUrl}
          chefTitle={'Professional Chef'}
          name={'Owais Athar'}
          ProfileUri={''}
        />
        <VStack
          divider={<Divider style={{ marginTop: 10, marginBottom: 10 }} />}
          flex={1}
          bgColor={'#E9E9E9'}
          mt={3}
          px={4}
          py={4}
          style={{ gap: 3 }}>
          {/* <Animated.ScrollView style={{ height: 300, overflow: 'scroll' }}> */}
          <HStack alignItems={'center'} justifyContent={'space-between'}>
            <RubikMediumText color={'gray.700'} fontSize={12}>
              Ingredients
            </RubikMediumText>

            <RubikMediumText color={'gray.700'} fontSize={12}>
              Reviews
            </RubikMediumText>

            <RubikMediumText color={'gray.700'} fontSize={12}>
              Nutrients
            </RubikMediumText>
          </HStack>
        </VStack>
        <TabViewExample />
        {/* </Animated.ScrollView> */}
        {/* <Tab.Item title={'dds'} /> */}
      </Animated.ScrollView>
      <Box
        justifyContent={'flex-end'}
        px={4}
        width={'full'}
        bottom={0}
        pb={3}
        pt={3}>
        <Skeleton isLoaded={isLoaded}>
          <Button
            shadow={'2'}
            _text={{ fontFamily: 'Rubik-Medium' }}
            width={'full'}
            // colorScheme={'orange'}
            bgColor={Colors.primary1}>
            Let's Cooking
          </Button>
        </Skeleton>
      </Box>
    </Animated.View>
  )
}

ViewRecipePage.ImageWithTitleAndInfo = RecipeImageWithTitleAndInfo
ViewRecipePage.ChefDetails = ChefDetails

// Bookmark

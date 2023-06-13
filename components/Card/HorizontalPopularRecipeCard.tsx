import React, { PropsWithChildren } from 'react'
import { Box, HStack, Image, Pressable, theme, VStack } from 'native-base'
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'
import { imgUrl } from './TrendingRecipe/TrendingRecipeCard'
import { useRouter } from 'expo-router'
import { GestureResponderEvent, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import RubikSemiBoldText from '../Typography/TextRubikSemiBold'
import RubikText from '../Typography/TextRubik'

const HorizontalStyledCardContainer = ({ children }: PropsWithChildren) => {
  return (
    <Box
      // p={3}
      _light={{
        bgColor: 'white',
      }}
      _dark={{
        bgColor: 'coolGray.100',
      }}
      // borderTopBottom={'blueGray.50'}
      // borderWidth={0.5}
      width={'100%'}
      overflow={'hidden'}
      height={220}
      rounded={'md'}
      // shadow={}
    >
      {children}
    </Box>
  )
}
const HorizontalPopularRecipeCard = () => {
  const router = useRouter()

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={(_event) => router.push('view-recipe')}>
      {/* <Skeleton height={350} isLoaded={isLoaded}> */}
      <HorizontalStyledCardContainer>
        {/* Image */}
        <Box overflow={'hidden'}>
          {/*<AspectRatio w="100%" ratio={1} overflow={'hidden'} height={200}>*/}
          <Image
            source={{ uri: imgUrl }}
            height={'100%'}
            alt="image"
            resizeMethod="resize"
          />
          {/*</AspectRatio>*/}
        </Box>

        {/* Card Details */}
        <Box
          position={'absolute'}
          bottom={0}
          top={0}
          right={0}
          // height={'50%'}
          // bg={{
          //   // linearGradient: {
          //   //   colors: ['black', 'white'],
          //   //   start: [0, 0],
          //   //   end: [1, 0]
          //   // }
          // }}
          width={'69%'}>
          <LinearGradient
            colors={[
              'transparent',
              theme.colors.blueGray['600'],
              theme.colors.blueGray['700'],
              theme.colors.blueGray['800'],
            ]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            locations={[0, 0.5, 0.65, 1]}
            style={{ paddingTop: 50, paddingLeft: 80, height: '100%' }}>
            <Box px={3} pb={5}>
              {/* <BlurView intensity={200} style={{ padding: 10, borderRadius: 5 }}> */}
              <RubikSemiBoldText
                fontSize={'md'}
                numberOfLines={2}
                color={'trueGray.50'}
                lineHeight={23}>
                Weeknight Favourite
              </RubikSemiBoldText>
              {/* <Skeleton.Text lines={1}> */}
              <RubikText fontSize={10} color={'warmGray.300'} numberOfLines={1}>
                by Owais Athar
              </RubikText>
              {/* </Skeleton.Text> */}
              {/* <Divider bgColor={'warmGray.700'} mt={3} /> */}
              <VStack
                // display={'flex'}
                // flexDir={'row'}
                // alignItems={'center'}
                // justifyContent={''}
                mt={4}>
                <HStack direction="row" alignItems={'center'}>
                  <AntDesign
                    name="clockcircleo"
                    size={11}
                    color={theme.colors.warmGray['300']}
                  />
                  <RubikText color={'warmGray.300'} ml={2} fontSize={10}>
                    20 min
                  </RubikText>
                </HStack>
                <HStack direction="row" alignItems={'center'}>
                  <MaterialCommunityIcons
                    name="silverware-fork-knife"
                    size={11}
                    color={theme.colors.warmGray['300']}
                  />
                  {/*<AntDesign name="clockcircleo" size={11} color="#ccc" />*/}
                  <RubikText color={'warmGray.300'} ml={2} fontSize={10}>
                    Chinese
                  </RubikText>
                </HStack>
              </VStack>
            </Box>
          </LinearGradient>
          {/* </BlurView> */}
        </Box>
      </HorizontalStyledCardContainer>
      {/* </Skeleton> */}
    </TouchableOpacity>
  )
}

export default HorizontalPopularRecipeCard

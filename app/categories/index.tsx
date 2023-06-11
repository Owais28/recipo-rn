import {
  Box,
  HStack,
  Icon,
  Image,
  SimpleGrid,
  Text,
  theme,
  VStack,
} from 'native-base'
import SafeAreaBox from '../../components/Container/SafeAreaBox'
import { AntDesign } from '@expo/vector-icons'
import RubikMediumText from '../../components/Typography/TextRubikMedium'
import { Dimensions, PlatformColor, TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router'
import { CategoryBox } from '../../components/sections/Home/CategoriesSection'
import { Animated } from 'react-native'
import { imgUrl } from '../../components/Card/TrendingRecipe/TrendingRecipeCard'
import { LinearGradient } from 'expo-linear-gradient'
import RubikText from '../../components/Typography/TextRubik'
import { FC, PropsWithChildren } from 'react'
import { color } from 'native-base/lib/typescript/theme/styled-system'

const LocalCategoryBox = () => {
  return (
    <Box height={200} borderRadius="md" width={'46%'} overflow={'hidden'}>
      <Image
        source={{
          uri: imgUrl,
        }}
        height={'100%'}
        resizeMethod={'resize'}
        alt="category-image"
        width={'100%'}
      />
      <Box position={'absolute'} bottom={0} width={'100%'}>
        <LinearGradient
          colors={['transparent', 'black']}
          style={{ paddingTop: 50 }}>
          <Box bottom={0} py={5} width={'100%'}>
            <VStack px={5} justifyContent={'center'} height={'100%'}>
              <RubikMediumText color={'white'} fontSize={'xs'}>
                breakfast
              </RubikMediumText>
              <RubikText
                color={'warmGray.300'}
                fontSize={'2xs'}
                lineHeight={'xs'}>
                200 Recipes
              </RubikText>
            </VStack>
          </Box>
        </LinearGradient>
      </Box>
    </Box>
  )
}

const GridRow: FC<PropsWithChildren<{}>> = ({ children }) => {
  return <HStack justifyContent={'space-evenly'}>{children}</HStack>
}

const Index = () => {
  const router = useRouter()

  return (
    <SafeAreaBox flex={1}>
      <HStack
        px={3}
        pt={2}
        pb={2}
        alignItems={'center'}
        justifyContent={'space-between'}>
        <TouchableOpacity onPress={(event) => router.back()}>
          <AntDesign
            name="arrowleft"
            size={24}
            color={theme.colors.trueGray['700']}
          />
        </TouchableOpacity>
        <RubikMediumText
          textAlign={'center'}
          color={'trueGray.700'}
          fontSize={'md'}>
          Categories
        </RubikMediumText>
        <AntDesign name="arrowright" size={24} color={'transparent'} />
      </HStack>
      <Animated.ScrollView>
        {/*<VStack style={{ gap: 10 }}>*/}
        <VStack px={3} py={5} style={{ gap: 8 }}>
          <GridRow>
            <LocalCategoryBox />
            <LocalCategoryBox />
          </GridRow>
          <GridRow>
            <LocalCategoryBox />
            <LocalCategoryBox />
          </GridRow>
          <GridRow>
            <LocalCategoryBox />
            <LocalCategoryBox />
          </GridRow>
          <GridRow>
            <LocalCategoryBox />
            <LocalCategoryBox />
          </GridRow>
          <GridRow>
            <LocalCategoryBox />
            <LocalCategoryBox />
          </GridRow>
          <GridRow>
            <LocalCategoryBox />
            <LocalCategoryBox />
          </GridRow>
        </VStack>
        {/*</VStack>*/}
      </Animated.ScrollView>
    </SafeAreaBox>
  )
}

export default Index

import {
  Box,
  Flex,
  HStack,
  Image,
  ScrollView,
  Stack,
  VStack,
} from 'native-base'
import RubikMediumText from '../../Typography/TextRubikMedium'
import { LinearGradient } from 'expo-linear-gradient'
import { imgUrl } from '../../Card/TrendingRecipe/TrendingRecipeCard'
import RubikText from '../../Typography/TextRubik'
import { useRouter } from 'expo-router'
import React from 'react'
import { TouchableOpacity } from 'react-native'

type Props = {}

export const CategoryBox = () => {
  return (
    <Box height={200} borderRadius="md" width={130} overflow={'hidden'}>
      <Image
        source={{
          uri: imgUrl,
        }}
        height={'100%'}
        resizeMethod={'resize'}
        alt="category-image"
        width={130}
      />
      <Box position={'absolute'} bottom={0} width={'100%'}>
        <LinearGradient
          colors={['transparent', 'black']}
          style={{ paddingTop: 50 }}>
          <Box bottom={0} py={5} width={130}>
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

export default function CategoriesSection({}: Props) {
  const router = useRouter()
  return (
    <Stack>
      <HStack px={3} alignItems={'center'} justifyContent={'space-between'}>
        <RubikMediumText
          color={'trueGray.800'}
          fontSize={'sm'}
          mb={2}
          lineHeight={'xs'}>
          Categories {''}
          {/* {'\n'} */}
          {/* Recipes */}
        </RubikMediumText>
        {/*<Link href={'categories'}>*/}
        <TouchableOpacity onPress={(_event) => router.push('categories')}>
          <RubikText color={'trueGray.400'} fontSize={'xs'}>
            View all
          </RubikText>
        </TouchableOpacity>
        {/*</Link>*/}
      </HStack>

      <ScrollView horizontal mt={2.5} showsHorizontalScrollIndicator={false}>
        <Flex flexDir={'row'} style={{ gap: 13 }} px={3}>
          {[...new Array(10)].map((_item, index) => (
            <CategoryBox key={index} />
          ))}
        </Flex>
      </ScrollView>
    </Stack>
  )
}

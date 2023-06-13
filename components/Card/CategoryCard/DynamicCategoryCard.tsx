import React, { FC } from 'react'
import { Box, Image, VStack } from 'native-base'
import { imgUrl } from '../TrendingRecipe/TrendingRecipeCard'
import { LinearGradient } from 'expo-linear-gradient'
import RubikMediumText from '../../Typography/TextRubikMedium'
import RubikText from '../../Typography/TextRubik'
import { TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router'

export type CategoryCardProps = {
  type: string
  noOfRecipesAvailable: number
}
const DynamicCategoryCard: FC<CategoryCardProps> = ({
  type = 'breakfast',
  noOfRecipesAvailable = 200,
}: CategoryCardProps) => {
  const router = useRouter()

  return (
    <Box height={200} borderRadius="md" width={'46%'} overflow={'hidden'}>
      <TouchableOpacity onPress={(_event) => router.push('categories/' + type)}>
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
                  {type.toLocaleLowerCase()}
                </RubikMediumText>
                <RubikText
                  color={'warmGray.300'}
                  fontSize={'2xs'}
                  lineHeight={'xs'}>
                  {noOfRecipesAvailable} Recipes
                </RubikText>
              </VStack>
            </Box>
          </LinearGradient>
        </Box>
      </TouchableOpacity>
    </Box>
  )
}

export default DynamicCategoryCard

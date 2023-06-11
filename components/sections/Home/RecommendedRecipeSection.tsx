import HorizontalPopularRecipeCard from '../../Card/HorizontalPopularRecipeCard'
import { HStack, Stack, VStack } from 'native-base'
import RubikMediumText from '../../Typography/TextRubikMedium'
import React from 'react'

const RecommendedRecipeSection = () => {
  return (
    <Stack>
      <HStack px={3} alignItems={'center'} justifyContent={'space-between'}>
        <RubikMediumText
          color={'trueGray.800'}
          fontSize={'sm'}
          mb={2}
          lineHeight={'xs'}>
          Curated for you {''}
          {/* {'\n'} */}
          {/* Recipes */}
        </RubikMediumText>
        {/*<TouchableOpacity onPress={(event) => router.push('view-chefs')}>*/}
        {/*  <RubikText color={'trueGray.400'} fontSize={'xs'}>*/}
        {/*    View all*/}
        {/*  </RubikText>*/}
        {/*</TouchableOpacity>*/}
      </HStack>
      {/*<Animated.FlatList*/}
      {/*  data={[...new Array(10)]}*/}
      {/*  renderItem={({ item }) => <HorizontalPopularRecipeCard />}*/}
      {/*  contentContainerStyle={{ gap: 10 }}*/}
      {/*/>*/}
      <VStack px={3} style={{ gap: 6 }} mt={2.5}>
        <HorizontalPopularRecipeCard />
        <HorizontalPopularRecipeCard />
        <HorizontalPopularRecipeCard />
        <HorizontalPopularRecipeCard />
      </VStack>
    </Stack>
  )
}

export default RecommendedRecipeSection

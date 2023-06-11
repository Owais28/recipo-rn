import { FlatList, HStack, Stack } from 'native-base'
import PopularRecipeCard from '../../Card/PopularRecipe/PopularRecipeCard'
import RubikMediumText from '../../Typography/TextRubikMedium'
import { Link } from 'expo-router'
import RubikText from '../../Typography/TextRubik'
import React from 'react'

type Props = {}

export default function PopularRecipeSection({}: Props) {
  return (
    <Stack>
      <HStack px={3} alignItems={'center'} justifyContent={'space-between'}>
        <RubikMediumText
          color={'trueGray.800'}
          fontSize={'sm'}
          mb={2}
          lineHeight={'xs'}>
          Popular Recipes {''}
          {/* {'\n'} */}
          {/* Recipes */}
        </RubikMediumText>
        <Link href={'view-chefs'}>
          <RubikText color={'trueGray.400'} fontSize={'xs'}>
            View all
          </RubikText>
        </Link>
      </HStack>

      {/* <ScrollView horizontal mt={2}> */}
      <FlatList
        mt={2.5}
        horizontal
        data={[
          { key: 'Devin' },
          { key: 'Dan' },
          { key: 'Dominic' },
          { key: 'Jackson' },
          { key: 'James' },
          { key: 'Joel' },
          { key: 'John' },
          { key: 'Jillian' },
          { key: 'Jimmy' },
          { key: 'Julie' },
        ]}
        renderItem={({ item }) => <PopularRecipeCard key={item.key} />}
        showsHorizontalScrollIndicator={false}
        px={3}
        contentContainerStyle={{ gap: 14, paddingRight: 26 }}
      />
    </Stack>
  )
}

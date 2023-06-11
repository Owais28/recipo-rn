import { FlatList, HStack, Stack } from 'native-base'
import PopularRecipeCard from '../../Card/PopularRecipe/PopularRecipeCard'
import RubikMediumText from '../../Typography/TextRubikMedium'
import { Link, useRouter } from 'expo-router'
import RubikText from '../../Typography/TextRubik'
import React from 'react'
import { TouchableOpacity } from 'react-native'

type Props = {}

export default function PopularRecipeSection({}: Props) {
  const router = useRouter()
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
        <TouchableOpacity onPress={(event) => router.push('view-chefs')}>
          <RubikText color={'trueGray.400'} fontSize={'xs'}>
            View all
          </RubikText>
        </TouchableOpacity>
        {/*<Link href={'view-chefs'}>*/}
        {/*</Link>*/}
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

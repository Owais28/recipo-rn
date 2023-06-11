import React from 'react'
import { FlatList, HStack, Stack } from 'native-base'
import TrendingRecipeCard from '../../Card/TrendingRecipe/TrendingRecipeCard'
import StyledTextTrending from '../../Text/StyledTextTrending'
import { Link, useRouter } from 'expo-router'
import RubikText from '../../Typography/TextRubik'
import { TouchableOpacity } from 'react-native'

type Props = {}

const TrendingSection = ({}: Props) => {
  const router = useRouter()

  return (
    <Stack>
      <HStack alignItems={'center'} justifyContent={'space-between'} px={3}>
        <StyledTextTrending>
          Trending {''}
          {/* {'\n'}
          Today */}
        </StyledTextTrending>
        <TouchableOpacity onPress={(event) => router.push('trending')}>
          {/*<Link href={'trending'}>*/}
          <RubikText color={'trueGray.400'} fontSize={'xs'}>
            View all
          </RubikText>
          {/*</Link>*/}
        </TouchableOpacity>
      </HStack>
      <FlatList
        // py={50}
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
        renderItem={({ item }) => <TrendingRecipeCard key={item.key} />}
        // flexDir={'row'}
        // style={{ gap: 15 }}
        pl={3}
        contentContainerStyle={{ gap: 14, paddingRight: 26 }}
        showsHorizontalScrollIndicator={false}
      />
    </Stack>
  )
}

export default TrendingSection

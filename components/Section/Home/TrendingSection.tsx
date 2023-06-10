import React, { useEffect, useState } from 'react'
import { Stack, FlatList, HStack, Skeleton, ScrollView } from 'native-base'
import TrendingRecipeCard from '../../Card/TrendingRecipe/TrendingRecipeCard'
import StyledTextTrending from '../../Text/StyledTextTrending'
import { Dimensions } from 'react-native'

type Props = {}

const TrendingSection = ({}: Props) => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 3000)
  }, [])

  if (isLoaded)
    return (
      <Stack>
        <HStack alignItems={'center'} justifyContent={'space-between'} px={3}>
          <StyledTextTrending>
            Trending {''}
            {/* {'\n'}
          Today */}
          </StyledTextTrending>
          {/* <Button style={{}} borderColor={Colors.primary1} borderWidth={1} bgColor={'transparent'}>
          <AntDesign name='arrowright' color={Colors.primary1} size={15} />
        </Button> */}
        </HStack>
        <FlatList
          // py={50}
          mt={2}
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
  else {
    return (
      <Stack px={3} style={{ gap: 10 }}>
        <Skeleton
          height={30}
          width={250}
          rounded={'xs'}
          startColor={'trueGray.300'}
        />
        <ScrollView
          horizontal
          contentContainerStyle={{
            width: Dimensions.get('window').height - 10,
            gap: 15,
          }}
          showsHorizontalScrollIndicator={false}>
          <Skeleton
            height={350}
            width={280}
            rounded={'md'}
            startColor={'trueGray.300'}
          />
          <Skeleton height={350} width={280} startColor={'trueGray.300'} />
          <Skeleton height={350} width={280} startColor={'trueGray.300'} />
        </ScrollView>
      </Stack>
    )
  }
}

export default TrendingSection

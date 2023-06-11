import { HStack, Skeleton, theme, VStack } from 'native-base'
import SafeAreaBox from '../../components/Container/SafeAreaBox'

import { Animated } from 'react-native'
import { FC, PropsWithChildren, useEffect, useState } from 'react'
import { HeaderWithBackButton } from '../../components/Headers'
import DynamicCategoryCard from '../../components/Card/CategoryCard/DynamicCategoryCard'

// Row in the column
const GridRow: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <HStack px={2.5} justifyContent={'space-evenly'}>
      {children}
    </HStack>
  )
}

// category list
const ListOfCategories = () => {
  return (
    <VStack flex={1}>
      <Animated.FlatList
        data={[...new Array(10)]}
        renderItem={({ item }) => {
          return (
            <GridRow>
              <DynamicCategoryCard
                noOfRecipesAvailable={200}
                type={'Breakfast'}
              />
              <DynamicCategoryCard
                noOfRecipesAvailable={200}
                type={'Appetizers'}
              />
            </GridRow>
          )
        }}
        contentContainerStyle={{
          flexGrow: 1,
          flexShrink: 0,
          gap: theme.sizes['4'],
          paddingBottom: theme.sizes['3'],
          paddingTop: theme.sizes['3'],
        }}></Animated.FlatList>
    </VStack>
  )
}

const DummySkeletonList = () => {
  return (
    <VStack flex={1}>
      <Animated.FlatList
        data={[...new Array(3)]}
        renderItem={({ item }) => {
          return (
            <GridRow>
              <Skeleton height={200} width={'46%'} />
              <Skeleton height={200} width={'46%'} />
            </GridRow>
          )
        }}
        contentContainerStyle={{
          flexGrow: 1,
          flexShrink: 0,
          gap: theme.sizes['4'],
          paddingBottom: theme.sizes['3'],
          paddingTop: theme.sizes['3'],
        }}
      />
    </VStack>
  )
}

const Index = () => {
  const [isLoaded, setLoaded] = useState<boolean>(false)

  useEffect(() => {
    setTimeout(() => setLoaded(true), 3000)
  }, [])

  return (
    <SafeAreaBox>
      <HeaderWithBackButton headerTitle={'Categories'} />
      {isLoaded ? <ListOfCategories /> : <DummySkeletonList />}
    </SafeAreaBox>
  )
}

export default Index

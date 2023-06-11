import React from 'react'
import { Dimensions } from 'react-native'
import { ScrollView, Skeleton, Stack } from 'native-base'

const SkeletonTrendingSection = () => {
  return (
    <Stack style={{ gap: 10 }}>
      <Skeleton px={3} height={25} width={200} rounded={'xs'} />
      <ScrollView
        horizontal
        contentContainerStyle={{
          width: Dimensions.get('window').width - 10,
          gap: 15,
          paddingLeft: 3,
        }}
        showsHorizontalScrollIndicator={false}>
        <Skeleton height={350} width={280} rounded={'md'} />
        <Skeleton height={350} width={280} />
        <Skeleton height={350} width={280} />
      </ScrollView>
    </Stack>
  )
}

export default SkeletonTrendingSection

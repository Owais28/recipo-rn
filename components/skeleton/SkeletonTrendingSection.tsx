import React from 'react'
import { Dimensions } from 'react-native'
import { ScrollView, Skeleton, Stack } from 'native-base'

const StyledSkeleton = () => {
  return (
    <Skeleton
      height={350}
      width={280}
      rounded={'md'}
      startColor={'blueGray.200'}
    />
  )
}
const SkeletonTrendingSection = () => {
  return (
    <Stack style={{ gap: 10 }}>
      <Skeleton
        px={3}
        height={25}
        width={200}
        rounded={'xs'}
        startColor={'blueGray.200'}
      />
      <ScrollView
        horizontal
        contentContainerStyle={{
          width: Dimensions.get('window').width - 10,
          gap: 15,
          paddingLeft: 14,
        }}
        showsHorizontalScrollIndicator={false}>
        <StyledSkeleton />
        <StyledSkeleton />
        <StyledSkeleton />
        <StyledSkeleton />
      </ScrollView>
    </Stack>
  )
}

export default SkeletonTrendingSection

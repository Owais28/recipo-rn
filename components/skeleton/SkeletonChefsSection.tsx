import React from 'react'
import { ScrollView, Skeleton, Stack } from 'native-base'

const StyledSkeleton = () => {
  return (
    <Skeleton
      rounded={'full'}
      width={70}
      height={70}
      startColor={'blueGray.200'}
    />
  )
}
const SkeletonChefsSection = () => {
  return (
    <Stack style={{ gap: 3 }} px={3}>
      {/*<Skeleton height={10} rounded={'md'} />*/}
      <ScrollView
        horizontal
        contentContainerStyle={{ gap: 10 }}
        showsHorizontalScrollIndicator={false}>
        <StyledSkeleton />
        <StyledSkeleton />
        <StyledSkeleton />
        <StyledSkeleton />
        <StyledSkeleton />
      </ScrollView>
    </Stack>
  )
}

export default SkeletonChefsSection

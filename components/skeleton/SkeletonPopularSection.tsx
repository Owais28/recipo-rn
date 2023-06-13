import React from 'react'
import { ScrollView, Skeleton, Stack } from 'native-base'

const StyledSkeleton = () => {
  return (
    <Skeleton
      rounded={'md'}
      width={250}
      height={280}
      startColor={'blueGray.200'}
    />
  )
}
const SkeletonPopularSection = () => {
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
        contentContainerStyle={{ gap: 10, paddingLeft: 14 }}
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

export default SkeletonPopularSection

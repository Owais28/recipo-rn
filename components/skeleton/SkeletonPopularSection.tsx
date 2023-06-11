import React from 'react'
import { ScrollView, Skeleton, Stack } from 'native-base'

const SkeletonPopularSection = () => {
  return (
    <Stack style={{ gap: 3 }}>
      <Skeleton px={3} height={25} width={200} rounded={'xs'} />
      <ScrollView
        horizontal
        contentContainerStyle={{ gap: 10, paddingLeft: 3 }}
        showsHorizontalScrollIndicator={false}>
        <Skeleton rounded={'md'} width={250} height={280} />
        <Skeleton rounded={'md'} width={250} height={280} />
        <Skeleton rounded={'md'} width={250} height={280} />
        <Skeleton rounded={'md'} width={250} height={280} />
        <Skeleton rounded={'md'} width={250} height={280} />
      </ScrollView>
    </Stack>
  )
}

export default SkeletonPopularSection

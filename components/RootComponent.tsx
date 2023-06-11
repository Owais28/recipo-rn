import React, { useEffect, useState } from 'react'
import SafeAreaBox from './Container/SafeAreaBox'
import { Animated } from 'react-native'
import { VStack } from 'native-base'
import AppHeaderSection from './sections/Home/AppHeaderSection'
import SkeletonTrendingSection from './skeleton/SkeletonTrendingSection'
import SkeletonChefsSection from './skeleton/SkeletonChefsSection'
import SkeletonPopularSection from './skeleton/SkeletonPopularSection'
import TrendingSection from './sections/Home/TrendingSection'
import ChefsSection from './sections/Home/ChefsSection'
import PopularRecipeSection from './sections/Home/PopularRecipeSection'
import CategoriesSection from './sections/Home/CategoriesSection'
import HorizontalPopularRecipeCard from './Card/HorizontalPopularRecipeCard'
import RecommendedRecipeSection from './sections/Home/RecommendedRecipeSection'

const RootComponent = () => {
  const [isContentLoaded, setContentLoaded] = useState<boolean>(false)

  useEffect(() => {
    setTimeout(() => setContentLoaded(true), 2500)
  }, [])

  if (!isContentLoaded) {
    return (
      <SafeAreaBox>
        <Animated.ScrollView showsVerticalScrollIndicator={false}>
          <VStack mb={2} safeAreaBottom style={{ gap: 15 }}>
            <AppHeaderSection />
            <SkeletonTrendingSection />
            <SkeletonChefsSection />
            <SkeletonPopularSection />
          </VStack>
        </Animated.ScrollView>
      </SafeAreaBox>
    )
  }

  return (
    <SafeAreaBox>
      <Animated.ScrollView showsVerticalScrollIndicator={false}>
        <VStack mb={2} safeAreaBottom style={{ gap: 15 }}>
          <AppHeaderSection />
          <CategoriesSection />
          <TrendingSection />
          <ChefsSection />
          <PopularRecipeSection />
          <RecommendedRecipeSection />
        </VStack>
      </Animated.ScrollView>
    </SafeAreaBox>
  )
}

export default RootComponent

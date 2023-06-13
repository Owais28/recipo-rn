import React, { FC, useRef } from 'react'
import SafeAreaBox from '../../components/Container/SafeAreaBox'

import { Animated } from 'react-native'
import HorizontalPopularRecipeCard from '../../components/Card/HorizontalPopularRecipeCard'
import { HeaderWithBackButton } from '../../components/headers/Headers'
import RubikText from '../../components/Typography/TextRubik'
import { Box, theme } from 'native-base'
import { usePathname } from 'expo-router'

// const AnimatedHStack = Animated.createAnimatedComponent(HStack)
// const AnimatedStyledView = Animated.createAnimatedComponent(VStack)

const renderItem = () => <HorizontalPopularRecipeCard />
const renderFilter = ({ item }: { item: string }) => (
  <Box
    flexShrink={0}
    // flexBasis={'max-content'}
    px={4}
    py={2}
    bgColor={'blueGray.100'}
    borderWidth={0.5}
    borderColor={'blueGray.300'}
    rounded={'full'}
    height={'10'}>
    <RubikText lineBreakMode={'tail'} fontSize={'xs'} color={'blueGray.800'}>
      {item}
    </RubikText>
  </Box>
)

const CategoryScreen: FC = () => {
  const scrollX = useRef(new Animated.Value(0)).current
  const pathname = usePathname()

  console.log(pathname.split('/'))
  return (
    <SafeAreaBox>
      {/*// <Animated.ScrollView>*/}
      {/*<AnimatedHeaderForCategoryScreen*/}
      {/*  scrollX={scrollX}*/}
      {/*  headerTitle={'appetizers'}*/}
      {/*/>*/}
      <HeaderWithBackButton headerTitle={pathname.split('/')[2]} />
      <Animated.FlatList
        horizontal
        data={[
          'popular',
          'recent',
          'veg',
          'quick',
          'popular',
          'recent',
          'veg',
          'quick',
          'popular',
          'recent',
          'veg',
          'quick',
        ]}
        renderItem={renderFilter}
        contentContainerStyle={{
          paddingLeft: theme.sizes['3'],
          paddingRight: theme.sizes['3'],
          // marginBottom: theme.sizes['3'],
          marginTop: theme.sizes['1'],
          // paddingTop: theme.sizes['3'],
          gap: theme.sizes['3'],
          // alignItems: 'center',
          // justifyContent: 'center',
          height: 50,
        }}
      />
      {/*<TouchableOpacity*/}
      {/*  style={{*/}
      {/*    width: 40,*/}
      {/*    height: 40,*/}
      {/*    backgroundColor: theme.colors.blueGray['100'],*/}
      {/*    display: 'flex',*/}
      {/*    alignItems: 'center',*/}
      {/*    justifyContent: 'center',*/}
      {/*    borderRadius: 100,*/}
      {/*  }}>*/}
      {/*  <Octicons*/}
      {/*    name="search"*/}
      {/*    size={19}*/}
      {/*    color={theme.colors.blueGray['800']}*/}
      {/*    accessibilityLabel={'search-icon'}*/}
      {/*  />*/}
      {/*</TouchableOpacity>*/}
      <Animated.FlatList
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollX } } }],
          { useNativeDriver: false }
        )}
        // onScroll={(event) => console.log(event.nativeEvent.contentOffset.y)}
        data={[...new Array(10)]}
        renderItem={renderItem}
        contentContainerStyle={{
          gap: theme.sizes['3'],
          padding: theme.sizes['3'],
        }}
      />
    </SafeAreaBox>
  )
}

export default CategoryScreen

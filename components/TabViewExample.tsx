import { Animated } from 'react-native'
import IngredientsList from './Section/RecipoInfo/IngredientsList'
import React, { useRef } from 'react'

const data = [
  <IngredientsList
    ingredients={[
      { itemName: 'one', amount: '10' },
      { itemName: 'one', amount: '10' },
      { itemName: 'one', amount: '10' },
      { itemName: 'one', amount: '10' },
      { itemName: 'one', amount: '10' },
      { itemName: 'one', amount: '10' },
      { itemName: 'one', amount: '10' },
      { itemName: 'one', amount: '10' },
      { itemName: 'one', amount: '10' },
    ]}
  />,
  <IngredientsList
    ingredients={[
      { itemName: 'one', amount: '10' },
      { itemName: 'one', amount: '10' },
      { itemName: 'one', amount: '10' },
      { itemName: 'one', amount: '10' },
      { itemName: 'one', amount: '10' },
      { itemName: 'one', amount: '10' },
      { itemName: 'one', amount: '10' },
      { itemName: 'one', amount: '10' },
      { itemName: 'one', amount: '10' },
    ]}
  />,
  <IngredientsList
    ingredients={[
      { itemName: 'one', amount: '10' },
      { itemName: 'one', amount: '10' },
      { itemName: 'one', amount: '10' },
      { itemName: 'one', amount: '10' },
      { itemName: 'one', amount: '10' },
      { itemName: 'one', amount: '10' },
      { itemName: 'one', amount: '10' },
      { itemName: 'one', amount: '10' },
      { itemName: 'one', amount: '10' },
    ]}
  />,
]

const TabViewExample = () => {
  const scrollX = useRef(new Animated.Value(0)).current

  return (
    <Animated.FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={data}
      pagingEnabled
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        { useNativeDriver: false }
      )}
      bounces={false}
      // contentContainerStyle={{ width}}
      renderItem={({ item, index }) => {
        return <>{item}</>
      }}
    />
    // </VStack>
  )
}

export default TabViewExample

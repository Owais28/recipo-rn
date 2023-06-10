import { Text } from 'native-base'
import React from 'react'
import Animated from 'react-native-reanimated'

type Props = {}

export default function ViewRecipePage({}: Props) {
  return (
    <Animated.View style={{ flex: 1 }}>
      <Text flex={1}>kjhsdb</Text>
      <Text>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore vel
        similique, quaerat corrupti aperiam in, ipsa cumque facilis odio, nemo
        temporibus. Corporis atque, sit porro laborum minus nostrum ipsam
        nesciunt.
      </Text>
    </Animated.View>
  )
}

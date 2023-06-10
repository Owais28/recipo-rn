import { Animated } from 'react-native'
import React, { PropsWithChildren, useEffect, useRef } from 'react'
import { Text } from 'native-base'
import { Easing } from 'react-native'

type Props = {}

const AnimatedView: React.FC<PropsWithChildren<Props>> = () => {
  const fadAnim = useRef(new Animated.Value(0)).current

  useEffect(() => {
    setTimeout(
      () =>
        Animated.timing(fadAnim, {
          toValue: 1,
          useNativeDriver: true,
          easing: Easing.bezier(0, 0.5, 1, 0.5),
        }).start(),
      3000
    )
  }, [])
  return (
    <Animated.View style={{ opacity: fadAnim }}>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, beatae
        rerum harum nobis officiis quidem alias veniam delectus cumque, dolorem
        nostrum blanditiis laudantium quod magnam voluptatum nesciunt mollitia
        perferendis possimus!
      </Text>
    </Animated.View>
  )
}

export default AnimatedView

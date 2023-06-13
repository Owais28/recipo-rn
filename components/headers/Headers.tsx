import { FC, useEffect, useRef } from 'react'
import { Easing, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { HStack, theme } from 'native-base'
import RubikMediumText from '../Typography/TextRubikMedium'
import { useRouter } from 'expo-router'
import { Animated } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import Colors from '../../constants/Colors'

export type HeaderProps = {
  link?: string
  headerTitle: string
}

export const HeaderWithBackButton: FC<HeaderProps> = ({
  headerTitle = 'Unknown',
  link,
}: HeaderProps) => {
  const router = useRouter()
  return (
    <HStack
      px={3}
      pt={2}
      pb={2}
      alignItems={'center'}
      justifyContent={'space-between'}>
      <TouchableOpacity
        onPress={(_event) => (link ? router.push(link) : router.back())}>
        <AntDesign
          name="arrowleft"
          size={22}
          color={theme.colors.trueGray['700']}
        />
      </TouchableOpacity>
      <RubikMediumText
        textAlign={'center'}
        color={'trueGray.700'}
        fontSize={'md'}>
        {headerTitle}
      </RubikMediumText>
      <AntDesign name="arrowright" size={24} color={'transparent'} />
    </HStack>
  )
}

const AnimatedHStack = Animated.createAnimatedComponent(HStack)
export const AnimatedHeaderForCategoryScreen: FC<HeaderProps> = ({
  headerTitle = 'appetizers',
  link,
}: HeaderProps) => {
  const scrollX = useRef(new Animated.Value(0)).current

  const router = useRouter()

  useEffect(() => {
    Animated.timing(scrollX, {
      toValue: 200,
      useNativeDriver: false,
      // easing: Easing.in(Easing.bounce),
      duration: 500,
    }).start()
  }, [])
  return (
    <Animated.View>
      <StatusBar translucent />
      <AnimatedHStack
        px={3}
        pt={scrollX}
        pb={2}
        alignItems={'center'}
        bgColor={Colors.light.freshGreen}
        style={{ height: scrollX }}
        justifyContent={'space-between'}>
        <TouchableOpacity
          onPress={(_event) => (link ? router.push(link) : router.back())}>
          <AntDesign
            name="arrowleft"
            size={22}
            color={theme.colors.trueGray['700']}
          />
        </TouchableOpacity>
        <RubikMediumText
          textAlign={'center'}
          color={'trueGray.700'}
          fontSize={'md'}>
          {headerTitle}
        </RubikMediumText>
        <AntDesign name="arrowright" size={24} color={'transparent'} />
      </AnimatedHStack>
    </Animated.View>
  )
}

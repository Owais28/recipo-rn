import {
  Box,
  Flex,
  HStack,
  Image,
  ITextProps,
  theme,
  VStack,
} from 'native-base'

import { AntDesign } from '@expo/vector-icons'
import Colors from '../../../constants/Colors'
import { LinearGradient } from 'expo-linear-gradient'
import RubikMediumText from '../../Typography/TextRubikMedium'
import React, { FC, PropsWithChildren } from 'react'
import Animated from 'react-native-reanimated'
import { SkeletonProps } from '../../types/types'
import { IconProps } from '@expo/vector-icons/build/createIconSet'
import { InterfaceTextProps } from 'native-base/lib/typescript/components/primitives/Text/types'
import RubikText from '../../Typography/TextRubik'

const AnimatedStyledImage = Animated.createAnimatedComponent(Image)

type MyIconProps = {
  name: string & IconProps
}
const MyAntDesignIcon = ({ name }: MyIconProps) => (
  <AntDesign
    name={!name ? 'clockcircleo' : name}
    size={15}
    color={Colors.light.freshGreen}
  />
)

const StyledRubikTextMedium: FC<
  PropsWithChildren<ITextProps & InterfaceTextProps>
> = ({ children, ...props }) => (
  <RubikText color={'blueGray.200'} ml={2} fontSize={12} {...props}>
    {children}
  </RubikText>
)

type RecipeInfoProps = {
  ratings: number | string
  preparationTime: string | number
  difficulty: string
}

const Info: FC<RecipeInfoProps> = (props) => {
  return (
    // <Skeleton startColor={'trueGray.300'} isLoaded={isLoaded} rounded={'full'}>
    <HStack px={1} alignItems={'center'}>
      <HStack alignItems={'center'} pr={9}>
        <MyAntDesignIcon name={'hearto'} />
        <StyledRubikTextMedium>{props.ratings}</StyledRubikTextMedium>
      </HStack>
      <HStack alignItems={'center'} pr={9}>
        <MyAntDesignIcon name="clockcircleo" />
        <StyledRubikTextMedium>
          {props.preparationTime} min
        </StyledRubikTextMedium>
      </HStack>
      <HStack alignItems={'center'} pr={9}>
        <MyAntDesignIcon name="clockcircleo" />
        <StyledRubikTextMedium>{props.difficulty}</StyledRubikTextMedium>
      </HStack>
    </HStack>
    // </Skeleton>
  )
}
type TitleProps = {
  title: string
}
const Title = (props: TitleProps) => (
  <RubikMediumText lineHeight={'sm'} pr={5} fontSize={'2xl'} color={'blue.50'}>
    {props.title}
  </RubikMediumText>
)

type RecipeImageProps = {
  imgUri: string
  recipeTitle: string
}

export const RecipeImageWithTitleAndInfo: FC<
  RecipeImageProps & RecipeInfoProps & SkeletonProps
> = (props) => {
  return (
    // <Skeleton minHeight={350} isLoaded={isLoaded}>
    <Box position={'relative'}>
      <AnimatedStyledImage
        source={{
          uri: props.imgUri,
        }}
        height={400}
        // height={imgHeight.interpolate({
        //   inputRange: [3, 1],
        //   outputRange: ['300','200']
        // })}
        alt="image-of-a-recipe"
      />
      <Flex
        alignItems={'center'}
        justifyContent={'center'}
        position={'absolute'}
        right={3}
        top={10}
        bgColor={'hsla(137.14,8.97%,30.59%,0.7)'}
        w={9}
        borderRadius={'full'}
        height={9}
        zIndex={2}>
        <AntDesign
          name="hearto"
          size={15}
          color={Colors.dark.tabIconSelected}
        />
      </Flex>
      <Box position={'absolute'} bottom={0} left={0} right={0}>
        <LinearGradient
          colors={['transparent', theme.colors.trueGray['800']]}
          style={{ paddingTop: 70 }}>
          <VStack px={3} style={{ gap: 3 }} pb={5}>
            <Title title={props.recipeTitle} />
            <Info
              ratings={props.ratings}
              preparationTime={props.preparationTime}
              difficulty={props.difficulty}
              isLoaded={props.isLoaded}
            />
          </VStack>
        </LinearGradient>
      </Box>
    </Box>
    // </Skeleton>
  )
}

export default RecipeImageWithTitleAndInfo

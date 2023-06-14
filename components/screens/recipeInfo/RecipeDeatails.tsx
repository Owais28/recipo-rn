import { HStack, ITextProps } from 'native-base'
import { IconProps } from '@expo/vector-icons/build/createIconSet'
import { AntDesign } from '@expo/vector-icons'
import Colors from '../../../constants/Colors'
import React, { FC, PropsWithChildren } from 'react'
import { InterfaceTextProps } from 'native-base/lib/typescript/components/primitives/Text/types'
import RubikText from '../../Typography/TextRubik'

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

type RecipeDetailsProps = {
  ratings: number | string
  preparationTime: string | number
  difficulty: string
}

const RecipeDeatails: FC<RecipeDetailsProps> = (props) => {
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

export default RecipeDeatails

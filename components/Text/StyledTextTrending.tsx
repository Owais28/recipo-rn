import { Text } from 'native-base'
import React, { PropsWithChildren } from 'react'
import Colors from '../../constants/Colors'
// import type {Text}
type Props = {
  props?: object
}

const StyledTextTrending: React.FC<PropsWithChildren<Props>> = ({
  children,
}) => {
  return (
    <Text
      fontFamily={'YesevaOne-Regular'}
      color={Colors.primary1}
      fontSize={'2xl'}
      mb={2}
      lineHeight={'xs'}>
      {children}
    </Text>
  )
}

export default StyledTextTrending

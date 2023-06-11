import React, { PropsWithChildren } from 'react'
import RubikMediumText from '../Typography/TextRubikMedium'
// import type {Text}
type Props = {
  props?: object
}

const StyledTextTrending: React.FC<PropsWithChildren<Props>> = ({
  children,
}) => {
  return (
    <RubikMediumText
      color={'trueGray.800'}
      fontSize={'lg'}
      mb={2}
      letterSpacing={'md'}
      lineHeight={'xs'}>
      {children}
    </RubikMediumText>
  )
}

export default StyledTextTrending

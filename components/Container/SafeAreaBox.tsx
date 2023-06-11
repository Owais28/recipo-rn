import { PropsWithChildren } from 'react'
import { Box, IBoxProps } from 'native-base'
import { InterfaceBoxProps } from 'native-base/lib/typescript/components/primitives/Box'

type Props = {
  props?: object
}

export default function SafeAreaBox({
  props,
  style,
  children,
}: PropsWithChildren<Props & IBoxProps & InterfaceBoxProps>) {
  return (
    <Box {...props} style={style} bgColor={'blueGray.50'} flex={1} safeArea>
      {children}
    </Box>
  )
}

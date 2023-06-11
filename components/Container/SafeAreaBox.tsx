import { Box } from 'native-base'
import { PropsWithChildren } from 'react'

type Props = {
  props?: object
}

export default function SafeAreaBox({
  props,
  children,
}: PropsWithChildren<Props>) {
  return (
    <Box {...props} bgColor={'warmGray.100'} safeArea>
      {children}
    </Box>
  )
}

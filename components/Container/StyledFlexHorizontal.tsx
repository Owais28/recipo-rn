import { StyleSheet } from 'react-native'
import React, { PropsWithChildren } from 'react'
import { Flex, ScrollView } from 'native-base'

type Props = {}

const StyledFlexHorizontal = ({ children }: PropsWithChildren<Props>) => {
  return (
    <ScrollView horizontal>
      <Flex style={styles.flexContainer}>{children}</Flex>
    </ScrollView>
  )
}

export default StyledFlexHorizontal

const styles = StyleSheet.create({
  flexContainer: {
    flexDirection: 'row',
    flex: 1,
    overflow: 'scroll',
    padding: 15,
    gap: 15,
    width: '100%',
  },
})

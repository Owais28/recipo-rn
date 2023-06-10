import { Box, HStack, Text } from 'native-base'
import { Octicons } from '@expo/vector-icons'
import Colors from '../../../constants/Colors'

const AppHeaderSection = () => {
  return (
    <Box
      px={4}
      pt={2}
      pb={1}
      // borderBottomWidth={1}
      // borderBottomColor={'green.700'}
    >
      <HStack alignItems={'center'} justifyContent={'space-between'}>
        <Octicons name="bell" size={19} color={Colors.light.text} />
        <Text
          letterSpacing={'xl'}
          fontSize={'md'}
          color={Colors.light.freshGreen}
          fontFamily={'YesevaOne-Regular'}>
          Recipo
        </Text>
        <Octicons
          name="search"
          size={19}
          color="black"
          accessibilityLabel={'search-icon'}
        />
      </HStack>
    </Box>
  )
}

export default AppHeaderSection

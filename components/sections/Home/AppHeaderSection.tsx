import { Box, HStack, Text, theme } from 'native-base'
import { Octicons } from '@expo/vector-icons'
import Colors from '../../../constants/Colors'
import { TouchableOpacity } from 'react-native'

const AppHeaderSection = () => {
  return (
    <Box
      px={3}
      pt={2}
      pb={1}
      // borderBottomWidth={1}
      // borderBottomColor={'green.700'}
    >
      <HStack alignItems={'center'} justifyContent={'space-between'}>
        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
            backgroundColor: theme.colors.blueGray['100'],
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 100,
          }}>
          <Octicons
            name="bell"
            size={19}
            color={theme.colors.blueGray['800']}
          />
        </TouchableOpacity>
        <Text
          letterSpacing={'xl'}
          fontSize={'md'}
          color={Colors.light.freshGreen}
          fontFamily={'YesevaOne-Regular'}>
          Recipo
        </Text>
        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
            backgroundColor: theme.colors.blueGray['100'],
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 100,
          }}>
          <Octicons
            name="search"
            size={19}
            color={theme.colors.blueGray['800']}
            accessibilityLabel={'search-icon'}
          />
        </TouchableOpacity>
      </HStack>
    </Box>
  )
}

export default AppHeaderSection

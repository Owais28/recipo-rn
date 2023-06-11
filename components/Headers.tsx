import { FC } from 'react'
import { TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { HStack, theme } from 'native-base'
import RubikMediumText from './Typography/TextRubikMedium'
import { useRouter } from 'expo-router'

type HeaderProps = {
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
        onPress={(event) => (link ? router.push(link) : router.back())}>
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

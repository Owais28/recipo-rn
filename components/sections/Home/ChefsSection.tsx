import React, { FC } from 'react'
import { Avatar, Box, FlatList, HStack, Stack, VStack } from 'native-base'
import RubikMediumText from '../../Typography/TextRubikMedium'
import RubikText from '../../Typography/TextRubik'
import { CHEFS } from '../../../constants/data'
import { useRouter } from 'expo-router'
import { TouchableOpacity } from 'react-native'

export type ChefProps = {
  imgUri: string
  profileUri: string
  name: { first: string; last: string }
}

const ChefAvatar: FC<ChefProps> = ({
  imgUri,
  name = { first: 'Owais', last: 'Athar' },
}) => {
  return (
    <VStack alignItems={'center'} justifyContent={'center'} style={{ gap: 5 }}>
      <Avatar source={{ uri: imgUri }} size={70} />
      <Box>
        <RubikText
          color={'trueGray.800'}
          lineHeight={'sm'}
          fontSize={'xs'}
          textAlign={'center'}>
          {name.first}
        </RubikText>
        <RubikText
          color={'trueGray.800'}
          fontSize={'xs'}
          lineHeight={'sm'}
          textAlign={'center'}>
          {name.last}
        </RubikText>
      </Box>
    </VStack>
  )
}

export type ChefsSectionProps = {
  chefs: ChefProps[]
}
const ChefsSection: FC<ChefsSectionProps> = () => {
  const router = useRouter()

  return (
    <Stack>
      {/*sections top*/}
      <HStack px={3} alignItems={'center'} justifyContent={'space-between'}>
        <RubikMediumText
          color={'trueGray.800'}
          fontSize={'sm'}
          mb={2}
          lineHeight={'xs'}>
          Popular Cooks
        </RubikMediumText>
        {/*<Link href={'view-chefs'}>*/}
        <TouchableOpacity onPress={(_event) => router.push('view-chefs')}>
          <RubikText color={'trueGray.400'} fontSize={'xs'}>
            View all
          </RubikText>
        </TouchableOpacity>
        {/*</Link>*/}
      </HStack>

      {/* <ScrollView horizontal mt={2}> */}
      <FlatList
        mt={2.5}
        horizontal
        data={[
          { key: 'Devin' },
          { key: 'Dan' },
          { key: 'Dominic' },
          { key: 'Jackson' },
          { key: 'James' },
          { key: 'Joel' },
          { key: 'John' },
          { key: 'Jillian' },
          { key: 'Jimmy' },
          { key: 'Julie' },
        ]}
        renderItem={({ item }) => (
          <ChefAvatar
            imgUri={CHEFS[0].imgUri}
            profileUri={'#'}
            name={{ first: item.key, last: item.key }}
          />
        )}
        showsHorizontalScrollIndicator={false}
        px={3}
        contentContainerStyle={{ gap: 14, paddingRight: 26 }}
      />
    </Stack>
  )
}

export default ChefsSection

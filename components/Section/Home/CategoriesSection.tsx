import { Box, Flex, ScrollView, Stack, Text } from 'native-base'

type Props = {}

const CategoryBox = () => {
  return (
    <Box height={50} borderRadius="full" overflow={'hidden'}>
      {/* <Image
        source={{
          uri: imgUrl,
          height: 100,
          width: 100
        }}
        alt='category-image'
      /> */}
      {/* <Box top={0} height={100} width={100}> */}
      {/* <LinearGradient colors={['transparent', '#212823']}> */}
      <Flex
        px={5}
        alignItems={'center'}
        justifyContent={'center'}
        bgColor={'#A3B09E'}
        height={'100%'}>
        <Text color={'#E9E9E9'} fontFamily={'Rubik-Medium'}>
          Breakfast
        </Text>
      </Flex>
      {/* </LinearGradient> */}
      {/* </Box> */}
    </Box>
  )
}

export default function CategoriesSection({}: Props) {
  return (
    <Stack>
      <Text
        pl={3}
        fontFamily={'Rubik-SemiBold'}
        color={'rgb(71,85,75)'}
        fontSize={'lg'}
        mb={2}
        lineHeight={'xs'}>
        Explore By Categories {''}
        {/* {'\n'} */}
        {/* Recipes */}
      </Text>

      <ScrollView horizontal mt={2} showsHorizontalScrollIndicator={false}>
        <Flex flexDir={'row'} style={{ gap: 15 }} px={3}>
          {[...new Array(10)].map((_item, index) => (
            <CategoryBox key={index} />
          ))}
        </Flex>
      </ScrollView>
    </Stack>
  )
}

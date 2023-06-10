import { AntDesign } from '@expo/vector-icons';
import { Avatar, Box, Flex, HStack, Input, Text, VStack } from 'native-base';
import React from 'react';
import Colors from '../../constants/Colors';
import { useRouter } from 'expo-router';
// import Animated, { SlideInLeft, SlideInUp } from 'react-native-reanimated';

type Props = {}

const StyledSearchbar = ({}: Props) => {
  const router =useRouter();
  return (
    <>
      <HStack
        px={3}
        alignItems={'center'}
        justifyContent={'space-between'}
        mt={5}
        mb={2}
        // position={'sticky'}
      >
        <VStack>
          <Text
            fontFamily={'Rubik-Medium'}
            fontSize={'md'}
            color={Colors.primary1}>
            Hello Owais 👋
          </Text>
          <Text fontFamily={'Rubik'} fontSize={'xs'} color={'gray.400'}>
            Glad you back to cook!
          </Text>
        </VStack>
        <Link href={'profile'}>
          <Avatar
            source={{
              uri: 'https://media.licdn.com/dms/image/C5603AQFLZuW0OwKW_Q/profile-displayphoto-shrink_200_200/0/1640854793366?e=1691625600&v=beta&t=dCnGHyCgensmJfVAc4l-aZlqhAdB6ZSzWjsDcJlQA8c',
            }}
          />
        </Link>
      </HStack>
      <Box px={3} height={50}>
        <Flex
          flexDir={'row'}
          bgColor={'trueGray.300'}
          pl={3}
          borderRadius={'lg'}
          borderColor="trueGray.200"
          borderWidth={1}>
          <VStack mr={1} alignItems={'center'} justifyContent={'center'}>
            <AntDesign name="search1" size={24} color="rgb(71,85,75)" />
          </VStack>

          <Box height={'100%'} flex={1}>
            <Input
              height={'100%'}
              colorScheme={'black'}
              fontFamily={'Rubik'}
              onPressIn={() => router.push('/search')}
              // outlineStyle={'none'}
              // outlineColor={'gold'}
              focusOutlineColor={'trueGray.300'}
              bgColor={'trueGray.300'}
              placeholder="Try something new today"
            />
          </Box>
        </Flex>
      </Box>
    </>
  )
}

export default StyledSearchbar

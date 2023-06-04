import {
  Avatar,
  Box,
  Divider,
  FlatList,
  Flex,
  HStack,
  Image,
  ScrollView,
  Skeleton,
  Text,
  VStack
} from 'native-base';
import React, { useEffect, useState } from 'react';
// import { SafeAreaView } from 'react-native';
// import SafeAreaBox from '../../components/Container/SafeAreaBox';
import { imgUrl } from '../../components/Card/TrendingRecipe/TrendingRecipeCard';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

type Props = {};

export default function ViewRecipePageIndex({}: Props) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 3000);
  }, []);

  return (
    // <Box >
    <ScrollView>
      {/* <Stack.Screen options={{ headerShown: false, statusBarTranslucent: true }} /> */}
      {/* <SafeAreaView /> */}
      <Skeleton h={300} isLoaded={isLoaded}>
        <Box height={300} position={'relative'}>
          <Image
            source={{
              uri: imgUrl,
              height: 300
            }}
            alt='image-of-a-recipe'
          />
          <Box
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            position={'absolute'}
            right={3}
            top={10}
            bgColor={'hsla(137.14,8.97%,30.59%,0.7)'}
            w={9}
            borderRadius={'full'}
            height={9}
            zIndex={2}
          >
            <AntDesign name='hearto' size={15} color='white' />
          </Box>
        </Box>
      </Skeleton>
      <VStack flex={1} bgColor={'#E9E9E9'} pb={5}>
        <Box borderRadius={'2xl'} mt={-5} bgColor={'#E9E9E9'} p={4} pb={0}>
          <Text fontSize={'lg'} noOfLines={2} fontFamily={'Rubik-SemiBold'}>
            Egg Avacado Sandwich
          </Text>
        </Box>

        {/* Details */}
        <VStack px={3} mt={4} mb={2} style={{ gap: 9 }}>
          <HStack style={{ gap: 6 }} alignItems={'center'}>
            <Avatar size={12} source={{ uri: imgUrl }} />
            <VStack>
              <HStack style={{ gap: 2 }} alignItems='center'>
                <Text
                  fontSize={14}
                  lineHeight={'sm'}
                  color={'gray.700'}
                  fontFamily={'Rubik-Medium'}
                >
                  Owais Athar
                </Text>
                {/* <MaterialCommunityIcons name='check-decagram' size={24} color='black' /> */}
                <VStack alignItems={'center'}>
                  <MaterialIcons name='verified' size={15} color='#46B1E3' />
                </VStack>
              </HStack>
              <Text fontSize={10} color={'trueGray.400'} fontFamily={'Rubik'}>
                Professional Chef
              </Text>
            </VStack>
          </HStack>
          <Divider bgColor={'trueGray.300'} />
          <Box
            display={'flex'}
            flexDir={'row'}
            alignItems={'center'}
            // justifyContent={'space-evenly'}
            // mt={3}
          >
            <Flex
              direction='row'
              alignItems={'center'}
              // mr={4}
              // bgColor={'trueGray.600'}
              pr={10}
              // borderRadius={'sm'}
              // justifyContent={'space-between'}
            >
              {/* <Skeleton> */}
              {/* <Flex alignItems={'center'} justifyContent={'center'}> */}
              <AntDesign name='star' size={15} color={'orange'} />
              {/* </Flex> */}
              <Text color={'gray.700'} fontFamily={'Rubik-Medium'} ml={1.5} fontSize={12}>
                4.5{' '}
                <Text ml={1} fontSize={9} fontFamily={'Rubik'} color={'gray.400'}>
                  {'('}
                  {200} reviews{')'}
                </Text>
              </Text>
              {/* </Skeleton> */}
            </Flex>
            <Flex direction='row' pr={10} alignItems={'center'}>
              {/* <Flex alignItems={'center'} justifyContent={'center'}> */}
              <AntDesign name='clockcircleo' size={13} color={'#a1a1aa'} />
              {/* </Flex> */}
              <Text color={'gray.700'} fontFamily={'Rubik-Medium'} ml={1.5} fontSize={12}>
                20 min
              </Text>
            </Flex>
            <Flex direction='row' alignItems={'center'}>
              {/* <Flex alignItems={'center'} justifyContent={'center'}> */}
              <AntDesign name='clockcircleo' size={13} color={'#a1a1aa'} />
              {/* </Flex> */}
              <Text color={'gray.700'} fontFamily={'Rubik-Medium'} ml={1.5} fontSize={12}>
                Easy
              </Text>
            </Flex>
          </Box>
        </VStack>
      </VStack>
      <VStack bgColor={'#E9E9E9'} mt={3} px={3} py={4} style={{ gap: 3 }}>
        <Text fontFamily='Rubik-Medium' color={'gray.700'} fontSize={15}>
          Ingredient
        </Text>
        <FlatList
          data={[...new Array(20)]}
          renderItem={({}) => {
            return (
              <>
                <Text mb={2} py={2} color={'gray.600'}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum deleniti
                  dolores iste minima adipisci assumenda voluptas optio, nihil nulla eius non eaque
                  in. Quam, ipsum. Odio rerum veniam odit ipsa!
                </Text>
                <Divider bgColor={'trueGray.300'} />
              </>
            );
          }}
          keyExtractor={(item) => item + 1}
        />
      </VStack>
    </ScrollView>
    // {/* </SafeAreaView > */}
    // {/* <StatusBar translucent showHideTransition={'fade'} barStyle={'default'} /> */}
    // </Box>
  );
}

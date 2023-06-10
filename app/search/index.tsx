import { View } from 'react-native'
import React from 'react'
import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Input,
  ScrollView,
  Text,
  VStack,
} from 'native-base'
import { AntDesign, Entypo} from '@expo/vector-icons'
import { Stack } from 'native-base'
import Animated from 'react-native-reanimated'


export default function SearchIndex() {
  const imgUrl =
  'https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80';
  return (
    <>

      <View>
        <Animated.ScrollView>
          <VStack mb={2} style={{ gap: 15 }}>
            <Box px={3} mt={2} height={50} >
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

                <Box height={'100%'} mr={4} flex={1}>
                  <Input
                    height={'100%'}
                    width={'100%'}
                    colorScheme={'black'}
                    fontFamily={'Rubik'}
                    // outlineStyle={'none'}
                    // outlineColor={'gold'}
                    focusOutlineColor={'trueGray.300'}
                    bgColor={'trueGray.300'}
                    placeholder="Try something new today"
                  />
                </Box>
                <VStack mr={1} alignItems={'center'} justifyContent={'center'}>
                  <Entypo name="cross" size={24} color="black" />
                </VStack>
              </Flex>
            </Box>

            {/* 2 Section */}

            <ScrollView horizontal>
              <Flex flexDir={'row'} style={{ gap: 15 }} px={3}>
                {[...new Array(8)].map(( key) => {
                  return (
                    <Box key={key} height={50} borderRadius="full" overflow={'hidden'}>
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
                    </Box>
                  )
                })}
              </Flex>
            </ScrollView>
          </VStack>

          {/* 3 Section */}

          {[...new Array(4)].map((key) => {
            return (
              <Stack key={key} direction="row" mt={8}>
                <Box>
                  <Image
                    ml={4}
                    rounded={'xl'}
                    src={imgUrl}
                    size={'md'}
                    alt="recipe-image"
                  />
                </Box>
                <Stack ml={4} mt={2}>
                  <Center>
                    <Heading fontSize="2xl" mt={2} overflow={'hidden'}>
                      The Indian Thali
                    </Heading>
                  </Center>
                  <Heading fontSize="lg" ml={4} mt={2}>
                    By chef
                  </Heading>
                </Stack>
              </Stack>
            )
          })}
          <VStack mt={8} ml={5}>
            <Heading fontWeight={'extrabold'}>History</Heading>
            <Text mt={4} fontSize="2xl">Salted Egg Steamed Beancurd</Text>
            <Text mt={4} fontSize="2xl">Salted Egg Steamed Beancurd</Text>
            <Text mt={4} mb={8} fontSize="2xl">Salted Egg Steamed Beancurd</Text>
          </VStack>
        </Animated.ScrollView>
      </View>
    </>
  )
}

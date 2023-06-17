import { View } from 'react-native'
import React from 'react'
import {
  Box,
  Center,
  FlatList,
  Flex,
  HStack,
  Heading,
  Image,
  Input,
  ScrollView,
  Text,
  VStack,
} from 'native-base'
import { AntDesign, Entypo } from '@expo/vector-icons'
import { Stack } from 'native-base'
import Animated from 'react-native-reanimated'
import PopularRecipeCard from '../../components/Card/PopularRecipe/PopularRecipeCard'

export default function SearchIndex() {
  const imgUrl =
    'https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'

  const chef =
    'https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNoZWZ8ZW58MHx8MHx8fDA%3D&w=1000&q=80'

  return (
    <>
      <View>
        <Animated.ScrollView>
          <VStack mb={2} style={{ gap: 15 }}>
            <Box px={3} mt={2} height={50}>
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

            <FlatList
              mt={2}
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
              renderItem={({ item }) => <PopularRecipeCard key={item.key} />}
              // flexDir={'row'}
              // ItemSeparatorComponent={() => <View width={15} />}
              showsHorizontalScrollIndicator={false}
              // numColumns={10}
              px={3}
              contentContainerStyle={{ gap: 14, paddingRight: 26 }}
            />
          </VStack>

          {/* 3 Section */}
          {/* <Flex direction="row" mt={8} justifyContent={'space-between'}>
            <Heading ml={4} fontWeight={'extrabold'}>
              Recommendation
            </Heading>
            <Text mr={4} color={'blue.500'}>
              See All
            </Text>
          </Flex>
          {[...new Array(3)].map((key) => {
            return (
              <Stack key={key} direction="row" mt={8}>
                <Box>
                  <Image
                    ml={4}
                    rounded={'xl'}
                    src={imgUrl}
                    size={'xl'}
                    alt="recipe-image"
                  />
                </Box>
                <Stack ml={4} mt={2}>
                  <Center>
                    <Heading fontSize="xl" mt={2} overflow={'hidden'}>
                      The Indian Thali
                    </Heading>
                  </Center>
                  <Flex
                    direction="row"
                    alignItems={'center'}
                    mr={4}
                    my={2}
                  >
                    <AntDesign name="star" size={12} color={'gold'} />
                    <Text
                      color={'rgb(71,85,75)'}
                      fontFamily={'Rubik-Medium'}
                      ml={1.5}
                      fontSize={10}>
                      4.5{' '}
                      <Text ml={1} fontSize={9} color={'gray.400'}>
                        {'('}
                        {200} reviews{')'}
                      </Text>
                    </Text>
                  </Flex>
                  <Heading fontSize="md">By chef</Heading>
                </Stack>
              </Stack>
            )
          })} */}
          <>
            <Heading ml={4} mb={6} mt={8} fontWeight={'extrabold'}>
              Chefs
            </Heading>
            <ScrollView horizontal>
              <VStack direction="column">
                <Flex flexDir={'row'} style={{ gap: 15 }} px={3}>
                  {[...new Array(8)].map((key) => {
                    return (
                      <Image
                        height={24}
                        width={24}
                        rounded={'full'}
                        src={chef}
                        size={'md'}
                        alt="recipe-image"
                      />
                    )
                  })}
                </Flex>
              </VStack>
            </ScrollView>
          </>

          {/* section 5 */}

          <VStack my={10} ml={5}>
            <Heading fontWeight={'extrabold'}>History</Heading>
            {/* <Text mt={4} fontSize="2xl">
              Salted Egg Steamed Beancurd
            </Text>
            <Text mt={4} fontSize="2xl">
              Salted Egg Steamed Beancurd
            </Text>
            <Text mt={4} mb={8} fontSize="2xl">
              Salted Egg Steamed Beancurd
            </Text>  */}
             {[...new Array(3)].map((key) => {
            return (
              <Stack key={key} direction="row" mt={8}>
                <Box>
                  <Image
                    rounded={'xl'}
                    src={imgUrl}
                    size={'xl'}
                    alt="recipe-image"
                  />
                </Box>
                <Stack ml={4} mt={2}>
                  <Center>
                    <Heading fontSize="xl" mt={2} overflow={'hidden'}>
                      The Indian Thali
                    </Heading>
                  </Center>
                  <Flex
                    direction="row"
                    alignItems={'center'}
                    mr={4}
                    my={2}
                    // bgColor={'trueGray.600'}
                    // px={2}
                    // borderRadius={'sm'}
                  >
                    {/* <Skeleton> */}
                    {/* <Flex alignItems={'center'} justifyContent={'center'}> */}
                    <AntDesign name="star" size={12} color={'gold'} />
                    {/* </Flex> */}
                    <Text
                      color={'rgb(71,85,75)'}
                      fontFamily={'Rubik-Medium'}
                      ml={1.5}
                      fontSize={10}>
                      4.5{' '}
                      <Text ml={1} fontSize={9} color={'gray.400'}>
                        {'('}
                        {200} reviews{')'}
                      </Text>
                    </Text>
                    {/* </Skeleton> */}
                  </Flex>
                  <Heading fontSize="md">By chef</Heading>
                </Stack>
                </Stack>
                 )
                })}
          </VStack>
        </Animated.ScrollView>
      </View>
    </>
  )
}

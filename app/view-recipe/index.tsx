import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Image,
  Skeleton,
  Text,
  VStack,
} from 'native-base'
import React, { useEffect, useState } from 'react'
import { imgUrl } from '../../components/Card/TrendingRecipe/TrendingRecipeCard'
import { AntDesign, MaterialIcons } from '@expo/vector-icons'
import Animated, { SlideInDown, SlideOutDown } from 'react-native-reanimated'
import Colors from '../../constants/Colors'
import RubikText from '../../components/Typography/TextRubik'
import RubikMediumText from '../../components/Typography/TextRubikMedium'
import { Alert, Dimensions, Share } from 'react-native'
import IngredientsList from '../../components/Section/RecipoInfo/IngredientsList'

export default function ViewRecipePageIndex() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 3000)
  }, [])

  const SCREEN_HEIGHT = Dimensions.get('window').height

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'https://recipo.vercel.app',
        title: 'From React Native',
        url: 'https://recipo.vercel.app',
      })
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error: any) {
      Alert.alert(error.message)
    }
  }

  return (
    <Animated.View style={{ height: SCREEN_HEIGHT, flex: 1 }}>
      <Animated.ScrollView
        scrollsToTop
        style={{ flex: 1 }}
        entering={SlideInDown}
        exiting={SlideOutDown}
        showsVerticalScrollIndicator={false}>
        {/* Image */}
        <Skeleton h={300} isLoaded={isLoaded}>
          <Box height={300} position={'relative'}>
            <Image
              source={{
                uri: imgUrl,
                height: 300,
              }}
              alt="image-of-a-recipe"
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
              zIndex={2}>
              <AntDesign
                name="hearto"
                size={15}
                color={Colors.dark.tabIconSelected}
              />
            </Box>
          </Box>
        </Skeleton>
        {/* <Animated.ScrollView> */}

        <VStack flexShrink={0} bgColor={'#E9E9E9'} pb={5}>
          {/* <Skeleton height={500}> */}
          <Box borderRadius={'2xl'} mt={-5} bgColor={'#E9E9E9'} p={4} pb={0}>
            <Skeleton.Text
              // size={}
              // size={'full'}
              colorScheme={'blueGray'}
              color={'amber.1000'}
              startColor={'trueGray.300'}
              rounded={'sm'}
              lines={2}
              _line={{ rounded: 'xs', height: 5 }}
              isLoaded={isLoaded}>
              <Text fontSize={'lg'} noOfLines={2} fontFamily={'Rubik-SemiBold'}>
                Egg Avacado Sandwich
              </Text>
            </Skeleton.Text>
          </Box>
          {/* <Box> */}
          <Button
            position={'absolute'}
            bg={'white'}
            p={3}
            borderRadius={'full'}
            top={-42}
            right={3}
            _pressed={{
              bgColor: 'warmGray.100',
            }}>
            <AntDesign
              name="sharealt"
              size={18}
              color={Colors.primary1}
              onPress={onShare}
            />
          </Button>
          {/* </Box> */}

          {/* Details */}
          <VStack px={4} mt={4} mb={2} style={{ gap: 9 }}>
            <HStack style={{ gap: 6 }} alignItems={'center'}>
              <Skeleton
                size={12}
                startColor={'trueGray.300'}
                isLoaded={isLoaded}
                rounded={'full'}>
                <Avatar size={12} source={{ uri: imgUrl }} />
              </Skeleton>
              <VStack minWidth={Dimensions.get('window').width - 240}>
                <Skeleton.Text
                  lines={2}
                  _line={{ rounded: 'xs' }}
                  isLoaded={isLoaded}
                  startColor={'trueGray.300'}>
                  <HStack style={{ gap: 2 }} alignItems="center" pr={3}>
                    <RubikMediumText
                      fontSize={14}
                      lineHeight={'sm'}
                      color={'gray.700'}>
                      Owais Athars
                    </RubikMediumText>
                    {/* <MaterialCommunityIcons name='check-decagram' size={24} color='black' /> */}
                    <VStack alignItems={'center'}>
                      <MaterialIcons
                        name="verified"
                        size={15}
                        color="#46B1E3"
                      />
                    </VStack>
                  </HStack>
                  {/* <Skeleton.Text lines={1} _line={{ rounded: 'xs' }} startColor={'trueGray.300'}> */}
                  <RubikText fontSize={10} color={'trueGray.400'}>
                    Professional Chef
                  </RubikText>
                  {/* </Skeleton.Text> */}
                </Skeleton.Text>
              </VStack>
            </HStack>
            <Divider bgColor={'trueGray.300'} />
            <Skeleton
              startColor={'trueGray.300'}
              isLoaded={isLoaded}
              rounded={'full'}>
              <Box
                display={'flex'}
                flexDir={'row'}
                alignItems={'center'}
                // justifyContent={'space-evenly'}
                // mt={3}
              >
                <Flex
                  direction="row"
                  alignItems={'center'}
                  // mr={4}
                  // bgColor={'trueGray.600'}
                  pr={10}
                  // borderRadius={'sm'}
                  // justifyContent={'space-between'}
                >
                  {/* <Skeleton> */}
                  {/* <Flex alignItems={'center'} justifyContent={'center'}> */}
                  <AntDesign name="star" size={15} color={'orange'} />
                  {/* </Flex> */}
                  <RubikMediumText color={'gray.700'} ml={1.5} fontSize={12}>
                    4.5{' '}
                    <RubikText ml={1} fontSize={9} color={'gray.400'}>
                      {'('}
                      {200} reviews{')'}
                    </RubikText>
                  </RubikMediumText>
                  {/* </Skeleton> */}
                </Flex>
                <Flex direction="row" pr={10} alignItems={'center'}>
                  {/* <Flex alignItems={'center'} justifyContent={'center'}> */}
                  <AntDesign name="clockcircleo" size={13} color={'#a1a1aa'} />
                  {/* </Flex> */}
                  <RubikMediumText color={'gray.700'} ml={1.5} fontSize={12}>
                    20 min
                  </RubikMediumText>
                </Flex>
                <Flex direction="row" alignItems={'center'}>
                  {/* <Flex alignItems={'center'} justifyContent={'center'}> */}
                  <AntDesign name="clockcircleo" size={13} color={'#a1a1aa'} />
                  {/* </Flex> */}
                  <RubikMediumText color={'gray.700'} ml={1.5} fontSize={12}>
                    Easy
                  </RubikMediumText>
                </Flex>
              </Box>
            </Skeleton>
          </VStack>
          {/* </Skeleton> */}
        </VStack>
        <VStack
          divider={<Divider style={{ marginTop: 10, marginBottom: 10 }} />}
          flex={1}
          bgColor={'#E9E9E9'}
          mt={3}
          px={4}
          py={4}
          style={{ gap: 3 }}>
          {/* <Animated.ScrollView style={{ height: 300, overflow: 'scroll' }}> */}
          <RubikMediumText color={'gray.700'} fontSize={15}>
            Ingredients
          </RubikMediumText>
          <IngredientsList
            ingredients={[
              { itemName: 'one', amount: '10' },
              { itemName: 'one', amount: '10' },
              { itemName: 'one', amount: '10' },
              { itemName: 'one', amount: '10' },
              { itemName: 'one', amount: '10' },
              { itemName: 'one', amount: '10' },
              { itemName: 'one', amount: '10' },
              { itemName: 'one', amount: '10' },
              { itemName: 'one', amount: '10' },
            ]}
          />
          {/* <ScrollView> */}
          {/* </ScrollView> */}

          {/* Review */}
          {/* <ScrollView
              height={300}
              overflowX={'auto'}
              scrollEnabled
              // scrollEventThrottle={16}
              // stickyHeaderIndices={[0]}
            > */}
          {/* {[...new Array(10)].map((item, key) => {
              return (
                <VStack style={{ gap: 5 }} key={key}>
                  <HStack alignItems={'center'}>
                    <Avatar size={10} source={{ uri: imgUrl }} />
                    <VStack ml={3}>
                      <Text fontFamily={'Rubik-Medium'} fontSize={11}>
                        Owais Athar
                      </Text>
                      <HStack style={{ gap: 2 }}>
                        {/* <Icon colorScheme={'orange'} color={'orange'} bgColor={'amber.100'}> */}
          {/* <FontAwesome name='star' size={12} color='gold' /> */}
          {/* <FontAwesome name='star' size={12} color='gold' /> */}
          {/* <FontAwesome name='star' size={12} color='gold' /> */}
          {/* <FontAwesome name='star-half-o' size={12} color='gold' /> */}
          {/* <FontAwesome name='star-o' size={12} color='gold' /> */}
          {/* </Icon> */}
          {/* </HStack> */}
          {/* </VStack> */}
          {/* </HStack> */}
          {/* <Text
                    fontSize={11}
                    fontFamily={'Rubik'}
                    noOfLines={4}
                    textTransform={'lowercase'}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, consequuntur
                    placeat fuga nesciunt animi hic voluptatum eveniet soluta dolore perferendis
                    voluptas id repellendus saepe maiores iusto consectetur ut, nihil tenetur.
                  </Text> */}
          {/* <Divider mt={2} /> */}
          {/* </VStack> */}
          {/* ); */}
          {/* })} */}
        </VStack>

        {/* </Animated.ScrollView> */}
        {/* <Tab.Item title={'dds'} /> */}
      </Animated.ScrollView>
      <Box
        justifyContent={'flex-end'}
        px={4}
        width={'full'}
        bottom={0}
        pb={3}
        pt={3}>
        <Button
          shadow={'2'}
          _text={{ fontFamily: 'Rubik-Medium' }}
          width={'full'}
          // colorScheme={'orange'}
          bgColor={Colors.primary1}>
          Let's Cooking
        </Button>
      </Box>
    </Animated.View>
  )
}

import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Image,
  ITextProps,
  Skeleton,
  theme,
  VStack,
} from 'native-base'
import React, {
  FC,
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { imgUrl } from '../../components/Card/TrendingRecipe/TrendingRecipeCard'
import { AntDesign, MaterialIcons } from '@expo/vector-icons'
import Animated, {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated'
import Colors from '../../constants/Colors'
import RubikText from '../../components/Typography/TextRubik'
import RubikMediumText from '../../components/Typography/TextRubikMedium'
import { Alert, Dimensions, Share } from 'react-native'
import { Animated as RAnimated } from 'react-native'
import TabViewExample from '../../components/TabViewExample'
import { LinearGradient } from 'expo-linear-gradient'
import { IconProps } from '@expo/vector-icons/build/createIconSet'
import { InterfaceTextProps } from 'native-base/lib/typescript/components/primitives/Text/types'
import { StatusBar } from 'expo-status-bar'
// import { convertStringNumberToNumber } from 'native-base/lib/typescript/utils/convertStringNumberToNumber'

// const AnimatedImage = Animated.createAnimatedComponent(Image)
export const useDummyIsLoaded = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 3000)
  }, [])

  return [isLoaded, setIsLoaded]
}

export default function ViewRecipePageIndex() {
  // const [index, setIndex] = React.useState(0)
  // const imgHeight = useRef(new RAnimated.Value(3)).current
  // const animatedValue = new RAnimated.Value(0)
  // const animatedScrollY = useRef(new RAnimated.Value(0)).current
  const [isLoaded] = useDummyIsLoaded()
  const [isHeaderShow, setIsHeaderShown] = useState(false)

  const ReAnimatedScrollY = useSharedValue(0)
  const ReAnimatedScrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      ReAnimatedScrollY.value = event.contentOffset.y
    },
  })

  // const animatedStyle = useAnimatedStyle(() => {
  //   return {
  //     shouldShow: ReAnimatedScrollY.value <= 200 ? false : true,
  //   }
  // })

  const cachedFun = useCallback(() => {
    switch (isHeaderShow) {
      case true: {
        if (ReAnimatedScrollY.value >= 200) setIsHeaderShown(false)
        if (ReAnimatedScrollY.value <= 200) setIsHeaderShown(true)
        break
      }
      case false: {
        if (ReAnimatedScrollY.value <= 200) setIsHeaderShown(false)
        if (ReAnimatedScrollY.value >= 200) setIsHeaderShown(true)
        break
      }
      default:
        break
    }
  }, [ReAnimatedScrollY.value, isHeaderShow])

  const SCREEN_HEIGHT = Dimensions.get('window').height

  const _onShare = async () => {
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

  // useEffect(() => {
  // animatedScrollY.addListener(({ value }) => {
  //   switch (isHeaderShow) {
  //     case true: {
  //       if (value >= 200) setIsHeaderShown(false)
  //       if (value <= 200) setIsHeaderShown(true)
  //       break
  //     }
  //     case false: {
  //       if (value <= 200) setIsHeaderShown(false)
  //       if (value >= 200) setIsHeaderShown(true)
  //       break
  //     }
  //     default: {
  //       break
  //     }
  //   }
  //   if (value <= 200) return
  //   else setIsHeaderShown(true)
  // })
  // cachedFun()
  // }, [ReAnimatedScrollY.value])

  return (
    <Animated.View style={{ height: SCREEN_HEIGHT, flex: 1 }}>
      {isHeaderShow ? (
        <StatusBar animated backgroundColor={Colors.light.freshGreen} />
      ) : (
        <StatusBar animated translucent />
      )}
      <Animated.ScrollView
        // onScroll={RAnimated.event(
        //   [{ nativeEvent: { contentOffset: { y: animatedScrollY } } }],
        //   { useNativeDriver: true }
        // )}
        onScroll={ReAnimatedScrollHandler}
        // onScrollBeginDrag={(event) => cachedFun()}
        // onScrollEndDrag={(event) => cachedFun()}
        // onResponderStart={(event) => cachedFun}
        // onPointerEnter={(event) => cachedFun()}
        // onScroll={(event) => console.log(event.nativeEvent.contentOffset.y)}
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}>
        <ViewRecipePageIndex.Image />
        {/* <Animated.ScrollView> */}

        <VStack flexShrink={0} bgColor={'#E9E9E9'} pb={5}>
          {/* <Skeleton height={500}> */}
          {/*<Box borderRadius={'2xl'} mt={-5} bgColor={'#E9E9E9'} p={4} pb={0}>*/}
          {/*  <Skeleton.Text*/}
          {/*    // size={}*/}
          {/*    // size={'full'}*/}
          {/*    colorScheme={'blueGray'}*/}
          {/*    color={'amber.1000'}*/}
          {/*    startColor={'trueGray.300'}*/}
          {/*    rounded={'sm'}*/}
          {/*    lines={2}*/}
          {/*    _line={{ rounded: 'xs', height: 5 }}*/}
          {/*    isLoaded={isLoaded}>*/}
          {/*    <Text fontSize={'lg'} noOfLines={2} fontFamily={'Rubik-SemiBold'}>*/}
          {/*      Egg Sansd s sds*/}
          {/*    </Text>*/}
          {/*  </Skeleton.Text>*/}
          {/*</Box>*/}
          {/*/!* <Box> *!/*/}
          {/*<Button*/}
          {/*  position={'absolute'}*/}
          {/*  bg={'white'}*/}
          {/*  p={3}*/}
          {/*  borderRadius={'full'}*/}
          {/*  top={-42}*/}
          {/*  right={3}*/}
          {/*  _pressed={{*/}
          {/*    bgColor: 'warmGray.100',*/}
          {/*  }}>*/}
          {/*  <AntDesign*/}
          {/*    name="sharealt"*/}
          {/*    size={18}*/}
          {/*    color={Colors.primary1}*/}
          {/*    onPress={onShare}*/}
          {/*  />*/}
          {/*</Button>*/}
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
          <HStack alignItems={'center'} justifyContent={'space-between'}>
            <RubikMediumText color={'gray.700'} fontSize={12}>
              Ingredients
            </RubikMediumText>

            <RubikMediumText color={'gray.700'} fontSize={12}>
              Reviews
            </RubikMediumText>

            <RubikMediumText color={'gray.700'} fontSize={12}>
              Nutrients
            </RubikMediumText>
          </HStack>
          {/*<IngredientsList*/}
          {/*  ingredients={[*/}
          {/*    { itemName: 'one', amount: '10' },*/}
          {/*    { itemName: 'one', amount: '10' },*/}
          {/*    { itemName: 'one', amount: '10' },*/}
          {/*    { itemName: 'one', amount: '10' },*/}
          {/*    { itemName: 'one', amount: '10' },*/}
          {/*    { itemName: 'one', amount: '10' },*/}
          {/*    { itemName: 'one', amount: '10' },*/}
          {/*    { itemName: 'one', amount: '10' },*/}
          {/*    { itemName: 'one', amount: '10' },*/}
          {/*  ]}*/}
          {/*/>*/}
          {/*<TabViewExample />*/}

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
        <TabViewExample />
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
        <Skeleton isLoaded={isLoaded}>
          <Button
            shadow={'2'}
            _text={{ fontFamily: 'Rubik-Medium' }}
            width={'full'}
            // colorScheme={'orange'}
            bgColor={Colors.primary1}>
            Let's Cooking
          </Button>
        </Skeleton>
      </Box>
    </Animated.View>
  )
}

const AnimatedStyledImage = Animated.createAnimatedComponent(Image)

ViewRecipePageIndex.Image = () => {
  const [isLoaded] = useDummyIsLoaded()

  return (
    // <Skeleton minHeight={350} isLoaded={isLoaded}>
    <Box position={'relative'}>
      <AnimatedStyledImage
        source={{
          uri: imgUrl,
        }}
        height={400}
        // height={imgHeight.interpolate({
        //   inputRange: [3, 1],
        //   outputRange: ['300','200']
        // })}
        alt="image-of-a-recipe"
      />
      <Flex
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
      </Flex>
      <Box position={'absolute'} bottom={0} left={0} right={0}>
        <LinearGradient
          colors={['transparent', theme.colors.trueGray['800']]}
          style={{ paddingTop: 70 }}>
          <VStack px={3} style={{ gap: 3 }} pb={5}>
            <RubikMediumText
              lineHeight={'sm'}
              pr={5}
              fontSize={'2xl'}
              color={'blue.50'}>
              Grilled Meat Skewer Grilled Meat Skewer
            </RubikMediumText>
            <ViewRecipePageIndex.DetailsTop isLoaded={isLoaded} />
          </VStack>
        </LinearGradient>
      </Box>
    </Box>
    // </Skeleton>
  )
}

const StyledRubikTextMedium: FC<
  PropsWithChildren<ITextProps & InterfaceTextProps>
> = ({ children, ...props }) => (
  <RubikText color={'blueGray.200'} ml={2} fontSize={12} {...props}>
    {children}
  </RubikText>
)

type MyIconProps = {
  name: string & IconProps
}
const MyAntDesignIcon = ({ name }: MyIconProps) => (
  <AntDesign
    name={!name ? 'clockcircleo' : name}
    size={15}
    color={Colors.light.freshGreen}
  />
)

ViewRecipePageIndex.DetailsTop = ({ isLoaded }) => {
  return (
    // <Skeleton startColor={'trueGray.300'} isLoaded={isLoaded} rounded={'full'}>
    <HStack px={1} alignItems={'center'}>
      <HStack alignItems={'center'} pr={9}>
        <MyAntDesignIcon name={'hearto'} />
        <StyledRubikTextMedium>4.5 </StyledRubikTextMedium>
      </HStack>
      <HStack alignItems={'center'} pr={9}>
        <MyAntDesignIcon name="clockcircleo" />
        <StyledRubikTextMedium>20 min</StyledRubikTextMedium>
      </HStack>
      <HStack alignItems={'center'} pr={9}>
        <MyAntDesignIcon name="clockcircleo" />
        <StyledRubikTextMedium>Easy</StyledRubikTextMedium>
      </HStack>
    </HStack>
    // </Skeleton>
  )
}

// TODO: uncomment skeletons

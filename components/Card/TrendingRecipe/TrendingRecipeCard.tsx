// import { Image } from 'react-native';
import { Box, Flex, Image, Pressable, Text } from 'native-base'
import { PropsWithChildren } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { useRouter } from 'expo-router'
import { AntDesign } from '@expo/vector-icons'
import { GestureResponderEvent } from 'react-native'

type Props = {}

const StyledCardContainer = ({ children }: PropsWithChildren<Props>) => {
  return (
    <Box
      // p={3}
      _light={{
        bgColor: 'white',
      }}
      _dark={{
        bgColor: 'coolGray.100',
      }}
      width={280}
      overflow={'hidden'}
      height={350}
      rounded={'md'}
      // shadow={}
    >
      {children}
    </Box>
  )
}

export const imgUrl =
  'https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'

const TrendingRecipeCard = ({}: Props) => {
  // const [isLoaded, setIsLoaded] = useState(false);

  const router = useRouter()

  // const [fontsLoaded] = useFonts({
  //   'Rubik-Regular': require('../../../assets/fonts/Rubik-Regular.ttf'),
  //   'Rubik-Bold': require('../../../assets/fonts/Rubik-Bold.ttf'),
  //   'Rubik-SemiBold': require('../../../assets/fonts/Rubik-SemiBold.ttf'),
  //   'Rubik-Medium': require('../../../assets/fonts/Rubik-Medium.ttf')
  // });

  // useEffect(() => {
  //   setTimeout(() => setIsLoaded(true), 3000);
  // }, []);

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  // if (!fontsLoaded) {
  //   return null;
  // }

  return (
    <Pressable
      onPress={(_e: GestureResponderEvent) => router.push('/view-recipe')}>
      {/* <Skeleton height={350} isLoaded={isLoaded}> */}
      <StyledCardContainer>
        {/* Image */}
        <Box overflow={'hidden'}>
          {/* <AspectRatio w='100%' ratio={1} overflow={'hidden'} height={200}> */}
          <Image
            source={{ uri: imgUrl }}
            height={'100%'}
            alt="image"
            resizeMethod="resize"
          />
          {/* </AspectRatio> */}
        </Box>

        {/* Card Details */}
        <Box
          position={'absolute'}
          bottom={0}
          // bg={{
          //   // linearGradient: {
          //   //   colors: ['black', 'white'],
          //   //   start: [0, 0],
          //   //   end: [1, 0]
          //   // }
          // }}
          width={'100%'}>
          <LinearGradient
            colors={['transparent', '#212823']}
            style={{ paddingTop: 70 }}>
            <Box px={5} pb={5}>
              {/* <BlurView intensity={200} style={{ padding: 10, borderRadius: 5 }}> */}
              <Text
                fontSize={'lg'}
                numberOfLines={2}
                // fontWeight={'semibold'}
                fontFamily={'Rubik-SemiBold'}
                _light={{
                  color: 'white',
                }}
                lineHeight={23}>
                Weeknight Favourite
              </Text>
              {/* <Skeleton.Text lines={1}> */}
              <Text
                fontSize={11}
                _light={{
                  color: 'warmGray.300',
                }}
                numberOfLines={1}
                fontFamily={'Rubik-Regular'}>
                By Owais Athar
              </Text>
              {/* </Skeleton.Text> */}
              {/* <Divider bgColor={'warmGray.700'} mt={3} /> */}
              <Box
                display={'flex'}
                flexDir={'row'}
                alignItems={'center'}
                // justifyContent={''}
                mt={3}>
                {/* <Flex
                  direction='row'
                  alignItems={'center'}
                  mr={4}
                  // bgColor={'trueGray.600'}
                  // px={2}
                  // borderRadius={'sm'}
                > */}
                {/* <Skeleton> */}
                {/* <AntDesign name='star' size={12} color={'gold'} /> */}
                {/* <Text color={'warmGray.100'} fontFamily={'Rubik'} ml={1.5} fontSize={10}> */}
                {/* 4.5{' '} */}
                {/* <Text ml={1} fontSize={9} color={'warmGray.300'}> */}
                {/* {'('} */}
                {/* {200} reviews{')'} */}
                {/* </Text> */}
                {/* </Text> */}
                {/* </Skeleton> */}
                {/* </Flex> */}
                <Flex direction="row" alignItems={'center'}>
                  <AntDesign name="clockcircleo" size={11} color="#ccc" />
                  <Text
                    color={'warmGray.300'}
                    fontFamily={'Rubik'}
                    ml={1.5}
                    fontSize={10}>
                    20 min
                  </Text>
                </Flex>
              </Box>
            </Box>
          </LinearGradient>
          {/* </BlurView> */}
        </Box>
        <Box
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          position={'absolute'}
          right={3}
          top={3}
          bgColor={'hsla(137.14,8.97%,30.59%,0.7)'}
          w={9}
          borderRadius={'full'}
          height={9}>
          <AntDesign name="hearto" size={15} color="white" />
        </Box>
      </StyledCardContainer>
      {/* </Skeleton> */}
    </Pressable>
  )
}

export default TrendingRecipeCard

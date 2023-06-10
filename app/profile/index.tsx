// import { View, Text } from 'react-native';
import React from 'react'
import SafeAreaBox from '../../components/Container/SafeAreaBox'
import {
  Box,
  Button,
  Divider,
  HStack,
  Image,
  Skeleton,
  Text,
  VStack,
} from 'native-base'
import { imgUrl } from '../../components/Card/TrendingRecipe/TrendingRecipeCard'
import Colors from '../../constants/Colors'
import { AntDesign } from '@expo/vector-icons'
import Animated, { FadeOutDown, SlideInDown } from 'react-native-reanimated'

// type Props = {}

const ProfilePage = () => {
  return (
    <SafeAreaBox>
      <VStack style={{ gap: 5 }}>
        {/* Cover Image */}
        <Box height={200}>
          <Skeleton height={'100%'}>
            <Image alt="cover-pic" source={{ uri: imgUrl }} />
          </Skeleton>
        </Box>
        <Animated.View entering={SlideInDown} exiting={FadeOutDown}>
          <VStack
            style={{ gap: 15 }}
            safeAreaBottom
            safeArea
            pb={5}
            bgColor={'white'}
            borderTopRadius={'xl'}
            px={3}>
            {/* <Skeleton.Circle> */}
            {/* Profile Image */}
            {/* <Box
            position={'absolute'}
            borderRadius={'full'}
            borderColor={'white'}
            borderWidth={3}
            shadow={['9', '1']}
            w={100}
            height={100}
            zIndex={2}
          >
            <Image alt='profile-pic' source={{ uri: imgUrl }} />
          </Box> */}
            {/* Name */}
            <VStack style={{ gap: 2 }}>
              <Text
                fontFamily={'Rubik-Medium'}
                fontSize={'lg'}
                color={Colors.primary1}
                textAlign={'center'}>
                Owais Athar
              </Text>
              <Text
                fontFamily={'Rubik'}
                fontSize={'xs'}
                textAlign={'center'}
                color="trueGray.400">
                @Owais28
              </Text>
            </VStack>
            <HStack
              alignItems={'center'}
              justifyContent={'space-evenly'}
              divider={<Divider bgColor={'trueGray.100'} />}>
              {/* Followers */}
              <VStack alignItems={'center'} textAlign={'center'}>
                <Text
                  fontFamily={'Rubik-Medium'}
                  fontSize={'lg'}
                  color={Colors.primary1}>
                  12k
                </Text>
                <Text
                  fontFamily={'Rubik'}
                  fontSize={'xs'}
                  color={'trueGray.400'}>
                  Followers
                </Text>
              </VStack>

              {/* Recipes */}
              <VStack alignItems={'center'} textAlign={'center'}>
                <Text
                  fontFamily={'Rubik-Medium'}
                  fontSize={'lg'}
                  color={Colors.primary1}>
                  300
                </Text>
                <Text
                  fontFamily={'Rubik'}
                  fontSize={'xs'}
                  color={'trueGray.400'}>
                  Recipes
                </Text>
              </VStack>

              {/* Collections */}
              <VStack alignItems={'center'} textAlign={'center'}>
                <Text
                  fontFamily={'Rubik-Medium'}
                  fontSize={'lg'}
                  color={Colors.primary1}>
                  10
                </Text>
                <Text
                  fontFamily={'Rubik'}
                  fontSize={'xs'}
                  color={'trueGray.400'}>
                  Collection
                </Text>
              </VStack>
            </HStack>
            {/* </Skeleton.Circle> */}
          </VStack>

          <VStack
            bg={'white'}
            px={4}
            py={3}
            divider={<Divider bgColor={'trueGray.100'} />}>
            <HStack
              alignItems={'center'}
              justifyContent={'space-between'}
              py={4}>
              <HStack alignItems={'center'} style={{ gap: 5 }}>
                <AntDesign
                  name="user"
                  size={20}
                  color={Colors.dark.tabIconDefault}
                />
                <Text
                  fontFamily={'Rubik-Medium'}
                  fontSize={'xs'}
                  color={'trueGray.700'}>
                  Profile
                </Text>
              </HStack>
              <Button></Button>
            </HStack>
            <HStack
              alignItems={'center'}
              justifyContent={'space-between'}
              py={4}>
              <HStack alignItems={'center'} style={{ gap: 5 }}>
                <AntDesign
                  name="bells"
                  size={20}
                  color={Colors.dark.tabIconDefault}
                />
                <Text
                  fontFamily={'Rubik-Medium'}
                  fontSize={'xs'}
                  color={'trueGray.700'}>
                  Notifications
                </Text>
              </HStack>
              <Button></Button>
            </HStack>

            <HStack
              alignItems={'center'}
              justifyContent={'space-between'}
              py={4}>
              <HStack alignItems={'center'} style={{ gap: 5 }}>
                <AntDesign
                  name="book"
                  size={20}
                  color={Colors.dark.tabIconDefault}
                />
                <Text
                  fontFamily={'Rubik-Medium'}
                  fontSize={'xs'}
                  color={'trueGray.700'}>
                  Collection
                </Text>
              </HStack>
              <Button></Button>
            </HStack>

            <HStack
              alignItems={'center'}
              justifyContent={'space-between'}
              py={4}>
              <HStack alignItems={'center'} style={{ gap: 5 }}>
                <AntDesign
                  name="setting"
                  size={20}
                  color={Colors.dark.tabIconDefault}
                />
                <Text
                  fontFamily={'Rubik-Medium'}
                  fontSize={'xs'}
                  color={'trueGray.700'}>
                  Setting
                </Text>
              </HStack>
              <Button></Button>
            </HStack>

            <HStack
              alignItems={'center'}
              justifyContent={'space-between'}
              py={4}>
              <HStack alignItems={'center'} style={{ gap: 5 }}>
                <AntDesign
                  name="logout"
                  size={20}
                  color={Colors.dark.tabIconDefault}
                />
                <Text
                  fontFamily={'Rubik-Medium'}
                  fontSize={'xs'}
                  color={'trueGray.400'}>
                  Logout
                </Text>
              </HStack>
              <Button></Button>
            </HStack>
          </VStack>
        </Animated.View>
      </VStack>
    </SafeAreaBox>
  )
}

export default ProfilePage

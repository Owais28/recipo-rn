import React from 'react'
import { Avatar, Box, Divider, HStack, Image, Text, VStack } from 'native-base'
import { imgUrl } from '../TrendingRecipe/TrendingRecipeCard'
import { Link } from 'expo-router'
import { AntDesign, MaterialIcons } from '@expo/vector-icons'
import RubikText from '../../Typography/TextRubik'
import RubikMediumText from '../../Typography/TextRubikMedium'

// type Props = {};
const PopularRecipeCard = () => {
  const imgUri: string =
    'https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNoZWZ8ZW58MHx8MHx8fDA%3D&w=1000&q=80'

  return (
    // <TouchableOpacity>
    <Box
      width={250}
      position="relative"
      bgColor={'white'}
      borderRadius={'md'}
      overflow={'hidden'}>
      <PopularRecipeCard.Image />
      <Link href={'/view-recipe'}>
        <VStack style={{ gap: 3.5 }} py={3} px={3} width={250}>
          <PopularRecipeCard.Title />
          <PopularRecipeCard.ChefInfo />
          <Divider bgColor={'trueGray.100'} width={'100%'} />
          <PopularRecipeCard.BottomDetails />
        </VStack>
      </Link>
    </Box>
    // {/*</TouchableOpacity>*/}
  )
}

PopularRecipeCard.Image = () => {
  return (
    <>
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
        height={9}
        zIndex={2}>
        <AntDesign name="hearto" size={15} color="white" />
      </Box>
      <Box overflow="hidden" height={180}>
        <Image src={imgUrl} height={180} alt="recipe-image" />
      </Box>
    </>
  )
}

PopularRecipeCard.Title = () => {
  return (
    <RubikMediumText
      noOfLines={1}
      color={'rgb(71,85,75)'}
      fontWeight="semibold">
      Popular Recipe Card
    </RubikMediumText>
  )
}

PopularRecipeCard.ChefInfo = () => {
  return (
    <HStack style={{ gap: 3 }} alignItems={'center'}>
      <Avatar size={6} source={{ uri: imgUrl }} />
      <HStack style={{ gap: 2 }} alignItems="center">
        <Text fontSize={11} color={'rgb(71,85,75)'} fontFamily={'Rubik-Medium'}>
          Owais Athar
        </Text>
        {/* <MaterialCommunityIcons name='check-decagram' size={24} color='black' /> */}
        <VStack alignItems={'center'}>
          <MaterialIcons name="verified" size={12} color="#46B1E3" />
        </VStack>
      </HStack>
    </HStack>
  )
}

PopularRecipeCard.BottomDetails = () => {
  return (
    <HStack
      display={'flex'}
      flexDir={'row'}
      alignItems={'center'}
      width={'100%'}>
      <HStack alignItems={'center'} mr={4}>
        {/* <Skeleton> */}
        {/* <Flex alignItems={'center'} justifyContent={'center'}> */}
        <AntDesign name="star" size={12} color={'gold'} />
        {/* </Flex> */}
        <RubikMediumText color={'rgb(71,85,75)'} ml={1.5} fontSize={10}>
          4.5{' '}
          <Text ml={1} fontSize={9} color={'gray.400'}>
            {'('}
            {200} reviews{')'}
          </Text>
        </RubikMediumText>
        {/* </Skeleton> */}
      </HStack>
      <HStack alignItems={'center'} justifyItems={'center'}>
        <AntDesign name="clockcircleo" size={11} color={'#a1a1aa'} />
        <RubikText color={'rgb(71,85,75)'} ml={1.5} fontSize={10}>
          20 min
        </RubikText>
      </HStack>
    </HStack>
  )
}
export default PopularRecipeCard

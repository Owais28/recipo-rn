import { Avatar, Divider, HStack, Skeleton, VStack } from 'native-base'
import { imgUrl } from '../../Card/TrendingRecipe/TrendingRecipeCard'
import { Dimensions } from 'react-native'
import RubikMediumText from '../../Typography/TextRubikMedium'
import { MaterialIcons } from '@expo/vector-icons'
import RubikText from '../../Typography/TextRubik'
import React, { FC } from 'react'

type ChefDetailsProps = {
  name: string
  chefTitle: string
  ProfileUri: string
  imgUri: string
  isLoaded: boolean
}
const ChefDetails: FC<ChefDetailsProps> = (props) => {
  return (
    <VStack flexShrink={0} bgColor={'blueGray.50'} pb={5}>
      <VStack px={4} mt={4} mb={2} style={{ gap: 9 }}>
        <HStack style={{ gap: 6 }} alignItems={'center'}>
          <Skeleton
            size={12}
            startColor={'trueGray.300'}
            isLoaded={props.isLoaded}
            rounded={'full'}>
            <Avatar size={12} source={{ uri: imgUrl }} />
          </Skeleton>
          <VStack minWidth={Dimensions.get('window').width - 240}>
            <Skeleton.Text
              lines={2}
              _line={{ rounded: 'xs' }}
              isLoaded={props.isLoaded}
              startColor={'trueGray.300'}>
              <HStack style={{ gap: 2 }} alignItems="center" pr={3}>
                <RubikMediumText
                  fontSize={14}
                  lineHeight={'sm'}
                  color={'gray.700'}>
                  {props.name}
                </RubikMediumText>
                <VStack alignItems={'center'}>
                  <MaterialIcons name="verified" size={15} color="#46B1E3" />
                </VStack>
              </HStack>
              {/* <Skeleton.Text lines={1} _line={{ rounded: 'xs' }} startColor={'trueGray.300'}> */}
              <RubikText fontSize={10} color={'trueGray.400'}>
                {props.chefTitle}
              </RubikText>
              {/* </Skeleton.Text> */}
            </Skeleton.Text>
          </VStack>
        </HStack>
        <Divider bgColor={'trueGray.300'} />
      </VStack>
    </VStack>
  )
}

export default ChefDetails

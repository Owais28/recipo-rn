import React, { FC, useEffect, useState } from 'react'
import { Divider, HStack, Skeleton, VStack } from 'native-base'
import RubikText from '../../Typography/TextRubik'

const StyledSkeleton = () => (
  <Skeleton.Text
    lines={2}
    startColor={'trueGray.300'}
    _line={{ height: 4, rounded: 'xs' }}
  />
)

type Props = {
  ingredients: ItemProps[]
}

const IngredientsList = ({ ingredients }: Props) => {
  const [isLoaded, setLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => setLoaded(true), 3000)
  }, [])

  if (!isLoaded) {
    return (
      <VStack style={{ gap: 10 }}>
        <StyledSkeleton />
        <StyledSkeleton />
      </VStack>
    )
  }
  return (
    <VStack style={{ gap: 10 }} divider={<Divider bgColor={'trueGray.200'} />}>
      {ingredients.map((item, k) => (
        <ListItem itemName={item.itemName} amount={item.amount} key={k} />
      ))}
    </VStack>
  )
}

type ItemProps = {
  itemName: string
  amount?: string
}
const ListItem: FC<ItemProps> = ({ itemName, amount }) => {
  return (
    <HStack alignItems={'center'} justifyContent={'space-between'}>
      <RubikText>{itemName}</RubikText>
      <RubikText>{amount}</RubikText>
    </HStack>
  )
}
IngredientsList.Item = ListItem
export default IngredientsList

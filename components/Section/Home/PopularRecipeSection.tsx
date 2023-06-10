import { FlatList, Stack, Text } from 'native-base'
import PopularRecipeCard from '../../Card/PopularRecipe/PopularRecipeCard'

type Props = {}

export default function PopularRecipeSection({}: Props) {
  return (
    <Stack>
      <Text
        pl={3}
        fontFamily={'YesevaOne-Regular'}
        color={'rgb(71,85,75)'}
        fontSize={'lg'}
        mb={2}
        lineHeight={'xs'}>
        Popular {''}
        {/* {'\n'} */}
        Recipes
      </Text>

      {/* <ScrollView horizontal mt={2}> */}
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
      {/* {[...new Array(10)].map((item, index) => (
            
          ))} */}
      {/* </ScrollView> */}
    </Stack>
  )
}

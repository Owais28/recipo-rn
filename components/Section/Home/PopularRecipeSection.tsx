import { Flex, ScrollView, Stack, Text } from 'native-base';
import PopularRecipeCard from '../../Card/PopularRecipe/PopularRecipeCard';

type Props = {};

export default function PopularRecipeSection({}: Props) {
  return (
    <Stack>
      <Text
        pl={3}
        fontFamily={'YesevaOne-Regular'}
        color={'rgb(71,85,75)'}
        fontSize={'lg'}
        mb={2}
        lineHeight={'xs'}
      >
        Popular {''}
        {/* {'\n'} */}
        Recipes
      </Text>

      <ScrollView horizontal mt={2}>
        <Flex flexDir={'row'} style={{ gap: 15 }} px={3}>
          {[...new Array(10)].map((item, index) => (
            <PopularRecipeCard key={index} />
          ))}
        </Flex>
      </ScrollView>
    </Stack>
  );
}

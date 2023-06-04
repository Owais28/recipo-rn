import React from 'react';
import { Stack, Text, ScrollView, Flex } from 'native-base';
import TrendingRecipeCard from '../../Card/TrendingRecipe/TrendingRecipeCard';

type Props = {};

const TrendingSection = (props: Props) => {
  return (
    <Stack>
      <Text
        pl={3}
        fontFamily={'YesevaOne-Regular'}
        color={'rgb(71,85,75)'}
        fontSize={'2xl'}
        mb={2}
        lineHeight={'xs'}
      >
        Trending {''}
        {'\n'}
        Today
      </Text>
      <ScrollView horizontal mt={2}>
        <Flex flexDir={'row'} style={{ gap: 15 }} px={3}>
          {[...new Array(10)].map((item, index) => (
            <TrendingRecipeCard key={index} />
          ))}
        </Flex>
      </ScrollView>
    </Stack>
  );
};

export default TrendingSection;

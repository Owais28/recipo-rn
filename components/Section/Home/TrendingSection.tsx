import React from 'react';
import { Stack, FlatList, HStack } from 'native-base';
import TrendingRecipeCard from '../../Card/TrendingRecipe/TrendingRecipeCard';
import StyledTextTrending from '../../Text/StyledTextTrending';

type Props = {};

const TrendingSection = () => {
  return (
    <Stack>
      <HStack>
        <StyledTextTrending>
          Trending {''}
          {'\n'}
          Today
        </StyledTextTrending>
      </HStack>
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
          { key: 'Julie' }
        ]}
        renderItem={({ item }) => <TrendingRecipeCard key={item.key} />}
        // flexDir={'row'}
        // style={{ gap: 15 }}
        pl={3}
        contentContainerStyle={{ gap: 14, paddingRight: 26 }}
        showsHorizontalScrollIndicator={false}
      />
    </Stack>
  );
};

export default TrendingSection;

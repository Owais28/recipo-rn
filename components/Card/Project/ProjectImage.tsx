import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Box, Heading, Image, Skeleton } from 'native-base';

type Props = {
  uri?: string;
};

const defaultProps = {
  uri: 'https://images.unsplash.com/photo-1605106702842-01a887a31122?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
};

const ProjectImage = ({ uri = defaultProps.uri }: Props) => {
  const [isLoaded, setLoading] = useState<true | false>(false);

  const disableLoading = () => {
    setTimeout(() => setLoading(true), 4000);
  };

  useEffect(() => {
    disableLoading();
  }, []);

  return (
    <Skeleton height={200} rounded="md" isLoaded={isLoaded}>
      <Box width={'100%'} rounded="md" overflow={'hidden'}>
        <Image
          // shadow={2}
          source={{ uri }}
          alt="Alternate Text"
          width={'100%'}
          height={200}
        />
      </Box>
    </Skeleton>
  );
};

export default ProjectImage;

const styles = StyleSheet.create({});

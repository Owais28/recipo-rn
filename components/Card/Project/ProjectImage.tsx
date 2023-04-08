import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Box, Heading, Image } from 'native-base';

type Props = {
  uri?: string;
};

const defaultProps = {
  uri: 'https://images.unsplash.com/photo-1605106702842-01a887a31122?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
};

const ProjectImage = ({ uri = defaultProps.uri }: Props) => {
  return (
    <Box width={'100%'} rounded="md" overflow={'hidden'}>
      <Image
        shadow={2}
        source={{ uri }}
        alt="Alternate Text"
        width={'100%'}
        height={200}
      />
    </Box>
  );
};

export default ProjectImage;

const styles = StyleSheet.create({});

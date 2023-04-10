import { StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Box, Flex, Progress, Skeleton, Text } from 'native-base';

type Props = {};

const ProjectProgress = (props: Props) => {
  const [isLoaded, setLoading] = useState<true | false>(false);

  const disableLoading = () => {
    setTimeout(() => setLoading(true), 4000);
  };

  useEffect(() => {
    disableLoading();
  }, []);

  return (
    <Box mt={2}>
      <Flex direction="row" justify="space-between">
        <Skeleton.Text lines={1} isLoaded={isLoaded}>
          <Box
            paddingX={2.5}
            minW={12}
            justifyContent="center"
            alignItems="center"
            _dark={{
              backgroundColor: 'gray.200'
            }}
            _light={{
              bgColor: 'gray.100'
            }}
            rounded="full"
          >
            <Text
              fontSize={9}
              letterSpacing="md"
              color="gray.600"
              noOfLines={3}
              lineHeight={17}
            >
              {'8'} / {'15'}
            </Text>
          </Box>
          <Box
            // paddingX={2.5}
            minW={12}
            justifyContent="center"
            alignItems="center"
            // _dark={{
            //   backgroundColor: 'gray.200'
            // }}
            // _light={{
            //   bgColor: 'gray.100'
            // }}
            rounded="full"
          >
            <Text
              fontSize={9}
              letterSpacing="md"
              color="gray.400"
              noOfLines={3}
              lineHeight={17}
            >
              5 Days left
            </Text>
          </Box>
        </Skeleton.Text>
      </Flex>
      <Progress value={70} colorScheme="primary" mt={4} />
    </Box>
  );
};

export default ProjectProgress;

const styles = StyleSheet.create({});

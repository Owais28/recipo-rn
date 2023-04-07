import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Button, Center, Skeleton, VStack } from 'native-base';
import { useRouter } from 'expo-router';

type Props = {};

const ProjectCard = (props: Props) => {
  const router = useRouter();
  return (
    // <Center w="100%">
    <VStack
      w="100%"
      maxW="400"
      borderWidth="1"
      space={8}
      alignItems={'center'}
      overflow="hidden"
      rounded="md"
      _dark={{
        borderColor: 'coolGray.500'
      }}
      _light={{
        borderColor: 'coolGray.200'
      }}
    >
      <Skeleton h="40" />
      <Skeleton.Text px="4" />
      <Skeleton px="4" my="4" rounded="md" startColor="primary.100" isLoaded>
        <Button
          colorScheme={'rose'}
          variant={'subtle'}
          onPress={(e) =>
            router.push({
              pathname: '/(project)/30',
              params: { id: 1000, name: 'Owais Athar' }
            })
          }
          width={'90%'}
          mb={5}
        >
          See Project
        </Button>
      </Skeleton>
    </VStack>
    // </Center>
  );
};

export default ProjectCard;

const styles = StyleSheet.create({});

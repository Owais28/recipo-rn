import { StyleSheet } from 'react-native';
import React from 'react';
import { Skeleton, Text } from 'native-base';

type Props = {};

const ProjectDescription = (props: Props) => {
  return (
    <>
      <Text fontSize={12} color="gray.600" noOfLines={3} lineHeight={17}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
        accusamus, veniam aut qui minus doloribus nostrum accusantium,
        perferendis repudiandae similique velit consequatur modi deserunt culpa
        obcaecati totam maxime rem sunt!
      </Text>
      <Skeleton.Text mt={2} />
    </>
  );
};

export default ProjectDescription;

const styles = StyleSheet.create({});

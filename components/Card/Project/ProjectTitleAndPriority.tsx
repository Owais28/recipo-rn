import { StyleSheet } from 'react-native';
import React from 'react';
import { Badge, Box, Flex, Spacer, Text } from 'native-base';

interface Props {
  title: string;
  priority: number | 1 | 2 | 3;
}

const defaultProps = {
  title: 'Undefined',
  priority: 1
};

const LowBadge = () => {
  return (
    <Badge colorScheme="success" rounded="md">
      <Text fontSize={10}>Low</Text>
    </Badge>
  );
};

const MedBadge = () => {
  return (
    <Badge colorScheme="amber" rounded="md">
      <Text fontSize={10}>Medium</Text>
    </Badge>
  );
};

const HighBadge = () => {
  return (
    <Badge colorScheme="error" rounded="md">
      <Text fontSize={10}>High</Text>
    </Badge>
  );
};

const RenderPriority = ({ priority }: { priority: number | 1 | 2 | 3 }) => {
  return (
    <>
      {priority === 1 ? (
        <LowBadge />
      ) : priority === 2 ? (
        <MedBadge />
      ) : (
        <HighBadge />
      )}
    </>
  );
};
const ProjectTitleAndPriority = ({
  title = defaultProps.title,
  priority = defaultProps.priority
}: Props) => {
  return (
    <Flex
      flexDir={'row'}
      alignItems={'center'}
      justifyContent={'space-between'}
      mt={2}
    >
      <Text
        fontSize={17}
        fontWeight="bold"
        noOfLines={1}
        flex={1}
        fontFamily={'Rubik'}
      >
        {title}
      </Text>
      <RenderPriority priority={priority} />
    </Flex>
  );
};

export default ProjectTitleAndPriority;

const styles = StyleSheet.create({});

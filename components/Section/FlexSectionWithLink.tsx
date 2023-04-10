import { Linking, StyleSheet } from 'react-native';
import React, { PropsWithChildren, ReactNode } from 'react';
import StyledFlexHorizontal from '../Container/StyledFlexHorizontal';
import { Box, Flex, Text } from 'native-base';
import { Link } from 'expo-router';

type Props = {
  title: string;
  linkText: string;
  link?: string;
};

const defaultProps = {
  title: 'Untitled',
  linkText: 'undefined'
};

const FlexSectionWithLink = ({
  children,
  title = defaultProps.title,
  linkText = defaultProps.linkText,
  link
}: PropsWithChildren<Props>) => {
  return (
    <Box>
      <Flex
        paddingX={15}
        flexDir={'row'}
        alignItems={'center'}
        justify="space-between"
      >
        <Text fontWeight="bold">{title}</Text>
        <Text color="darkBlue.200" fontSize={11}>
          {linkText}
        </Text>
      </Flex>
      <StyledFlexHorizontal>{children}</StyledFlexHorizontal>
    </Box>
  );
};

export default FlexSectionWithLink;

const styles = StyleSheet.create({});

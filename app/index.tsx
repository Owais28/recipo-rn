import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useRouter, useNavigation, Link } from 'expo-router';
import { ScrollView, VStack } from 'native-base';
import ProjectCard from '../components/Card/Project/ProjectCard';
import FlexSectionWithLink from '../components/Section/FlexSectionWithLink';

type Props = {};

const Index = (props: Props) => {
  const navigation = useNavigation();
  console.log(navigation.getId());

  const router = useRouter();

  return (
    <>
      <ScrollView style={[styles.flex, styles.container]}>
        <VStack space={5} mt={2} mb={2}>
          {/* <VStack space={4} overflow="scroll"> */}
          {/* <View
      // contentContainerStyle={[styles.container, styles.flex]}
    > */}

          <FlexSectionWithLink
            title="Recent Projects"
            linkText="See all projects"
          >
            {/* <StyledFlexHorizontal> */}
            {[...new Array(20)].map((item, index) => (
              <ProjectCard key={index} />
            ))}
            {/* </StyledFlexHorizontal> */}
          </FlexSectionWithLink>
          <FlexSectionWithLink
            title="Recent Projects"
            linkText="See all projects"
          >
            {/* <StyledFlexHorizontal> */}
            {[...new Array(20)].map((item, index) => (
              <ProjectCard key={index} />
            ))}
            {/* </StyledFlexHorizontal> */}
          </FlexSectionWithLink>
          {/* </VStack> */}
        </VStack>
      </ScrollView>
      {/* <SafeAre */}
    </>
    // </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    // paddingTop: 15,
    // paddingBottom: 15
  },
  flex: {
    flex: 1,
    // alignItems: 'stretch',
    gap: 10,
    overflow: 'scroll'
  },
  button: {
    ...Platform.select({
      ios: {},
      android: {
        elevation: 4,
        // Material design blue from https://material.google.com/style/color.html#color-color-palette
        backgroundColor: '#2196F3',
        borderRadius: 2
      }
    })
  },
  buttonText: {
    textAlign: 'center',
    margin: 8,
    ...Platform.select({
      ios: {
        // iOS blue from https://developer.apple.com/ios/human-interface-guidelines/visual-design/color/
        color: '#007AFF',
        fontSize: 18
      },
      android: {
        color: 'white',
        fontWeight: '500'
      }
    })
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});

import {
  ActivityIndicator,
  Button,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import React from 'react';
import { useRouter, useNavigation, Link } from 'expo-router';
import { Box, ScrollView, VStack } from 'native-base';
import ProjectCard from '../components/ProjectCard/ProjectCard';

type Props = {};

const Index = (props: Props) => {
  const navigation = useNavigation();
  console.log(navigation.getId());

  const router = useRouter();

  return (
    <ScrollView style={[styles.container, styles.flex]}>
      <VStack space={4}>
        {/* <View
      // contentContainerStyle={[styles.container, styles.flex]}
    > */}

        <Text style={styles.heading}>React Native{'\n'}App &copy;</Text>
        <VStack space={4}>
          {[...new Array(20)].map((item, index) => (
            <ProjectCard key={index} />
          ))}
        </VStack>
      </VStack>
    </ScrollView>
    // </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    padding: 15
  },
  flex: {
    flex: 1,
    // alignItems: 'stretch',
    gap: 10
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
    fontSize: 50,
    fontWeight: 'bold'
  }
});

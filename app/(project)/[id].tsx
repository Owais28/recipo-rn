import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Stack, usePathname, useSearchParams } from 'expo-router';

type Props = {};

const Project = (props: Props) => {
  const params = useSearchParams();
  console.log(params);

  return (
    <ScrollView>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: 'Project',
          title: 'Project'
        }}
      />
      <Text>Id : {params.id}</Text>
    </ScrollView>
  );
};

export default Project;

const styles = StyleSheet.create({});

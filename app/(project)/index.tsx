import { Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

// type Props = {};

const Index = () => {
  return (
    <View>
      <Stack.Screen options={{ headerShown: true, headerTitle: 'Projects' }} />
      <Text>index</Text>
    </View>
  )
}

export default Index

// const styles = StyleSheet.create({})

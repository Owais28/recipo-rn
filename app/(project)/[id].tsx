import { ScrollView, Text } from 'react-native'
import React from 'react'
import { Stack, useSearchParams } from 'expo-router'

// type Props = {};

const Project = () => {
  const params = useSearchParams()
  console.log(params)

  return (
    <ScrollView>
      <Stack.Screen
        options={{
          headerShown: false,
          headerTitle: 'Project',
          title: 'Project',
        }}
      />
      <Text>Id : {params.id}</Text>
    </ScrollView>
  )
}

export default Project

// const styles = StyleSheet.create({})

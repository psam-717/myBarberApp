import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: 'white'}}>Barber shop home screens</Text>

      <View style={{flexDirection: 'row'}}>
        <Text style={{marginHorizontal: 10, color: 'white'}}>Already have an account? </Text>
        <Pressable
          onPress={() => {
            router.push('onboarding')
          }}
        >
          <Text style={{color: 'gold', }}>Sign in</Text>
        </Pressable>
      </View>

    </View>
  )
}

export default App

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "black"
    }
})
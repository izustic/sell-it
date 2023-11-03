import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import Constants from 'expo-constants'

export default function Screen({children}) {
  return (
    <SafeAreaView style={styles.screen}>
      {children}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    height: "auto",
  }
})
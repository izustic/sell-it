import { View, Text, StyleSheet, Platform } from 'react-native'
import React from 'react'

export default function AppText({children, style}) {
  return (
    <Text style={[styles.text, style]}>
      {children}
    </Text>
  )
}
const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "sans-serif" : "System"
  }
})
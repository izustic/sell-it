import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

import AppText from './AppText'

export default function PickerItem( { label, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{label}</AppText>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  text: {
    padding: 20
  }
})
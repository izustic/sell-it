import { StyleSheet, TextInput, View, Platform } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'

import colors from "../config/colors"

export default function AppTextInput({icon, ...otherProps}) {
  return (
    <View style={styles.container}>
      {icon && <MaterialCommunityIcons name={icon} size={20} color={colors.medium} style={styles.icon}/>}
      <TextInput style={styles.textInput} {...otherProps}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
    alignItems: "center"
  },
  icon: {
    marginRight: 10
  },
  textInput: {
    color: colors.dark,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "sans-serif" : "System"
  }
})
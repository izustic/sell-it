import { StyleSheet, TextInput, View, Platform, Keyboard } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'

import colors from "../config/colors"
import defaultStyles from "../config/styles"

export default function AppTextInput({icon, ...otherProps}) {

  return (
    <View style={styles.container} >
      {icon && <MaterialCommunityIcons name={icon} size={20} color={defaultStyles.colors.medium} style={styles.icon}/>}
      <TextInput placeholderTextColor={defaultStyles.colors.medium} style={defaultStyles.text} {...otherProps} clearButtonMode='always' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
  },
  icon: {
    marginRight: 10
  }
})
import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet, Platform, StatusBar } from "react-native";

export default StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "gray",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
});
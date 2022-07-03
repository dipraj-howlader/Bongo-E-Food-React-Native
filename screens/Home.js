import { View, Text } from 'react-native'
import React from 'react'
import HeaderTabs from '../components/HeaderTabs'
import SafeAreaAndroid from '../components/SafeAreaAndroid'

export default function Home() {
  return (
    <View style={SafeAreaAndroid.AndroidSafeArea}>
 <HeaderTabs> </HeaderTabs>
 </View>
  )
}

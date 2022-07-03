import { View, Text } from 'react-native'
import React from 'react'
import HeaderTabs from '../components/HeaderTabs'
import SafeAreaAndroid from '../components/SafeAreaAndroid'
import SearchBar from '../components/SearchBar'

export default function Home() {
  return (
    <View style={SafeAreaAndroid.AndroidSafeArea}>
      <View style={{backgroundColor:'white',
      padding: 15,
      }}>
 <HeaderTabs> </HeaderTabs>
 <SearchBar></SearchBar>
 </View>
 </View>
  )
}

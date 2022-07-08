import { View, Text } from 'react-native'
import React from 'react'
import About from '../components/RestaurantDetail/About'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import MenuItems from '../components/RestaurantDetail/MenuItems'

// import SafeAreaAndroid from '../components/Home/SafeAreaAndroid';


export default function RestaurantDetail() {
  return (
    <View >
     <About />
     <Divider width={1.8} style={{
        marginVertical: 10,
     }} />
     <MenuItems />
     </View>
  )
}
import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import HeaderTabs from '../components/HeaderTabs'
import SafeAreaAndroid from '../components/SafeAreaAndroid'
import SearchBar from '../components/SearchBar'
import Categories from '../components/Categories'
import RestaurantItems, { localRestaurants } from '../components/RestaurantItems'
import { useState } from 'react';

const YELP_API_KEY = ""

export default function Home() {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  return (
    <View style={SafeAreaAndroid.AndroidSafeArea}>
      <View style={{backgroundColor:'white',
      padding: 15,
      }}>
 <HeaderTabs> </HeaderTabs>
 <SearchBar></SearchBar>
 </View>
 <ScrollView showsHorizontalScrollIndicator={false}>
 <Categories></Categories>
 <RestaurantItems restaurantData={restaurantData}></RestaurantItems>
 </ScrollView>
 </View>

  )
}

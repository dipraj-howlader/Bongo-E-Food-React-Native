import { View, ScrollView } from "react-native";
import React from "react";
import HeaderTabs from "../components/Home/HeaderTabs";
import SafeAreaAndroid from "../components/Home/SafeAreaAndroid";
import SearchBar from "../components/Home/SearchBar";
import Categories from "../components/Home/Categories";
import RestaurantItems, {
  localRestaurants,
} from "../components/Home/RestaurantItems";
import { useState, useEffect } from "react";
import BottomTabs from "../components/Home/BottomTabs";
// import { Divider } from "react-native-elements";

const YELP_API_KEY =
  "j2vVtit2J_8JvHpHOiMZ-fSoGFFEjreuQvkaz-_UT05uDdaD8IZNAP_8rmGgRlzpjLxDI8XqciA20U_dB5yPhHX_UIPMVkAHaOphgflB7jm5LCCnmAxDxfLuRnrGYnYx";
// const Google_api ='AIzaSyDPD2m1dotJbryf0bOJrGRdKt5x6OOmzS8';

export default function Home() {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [activeTab, setActiveTab] = useState("Delivery");


  const getRestaurantFromYelp = () => {
    const yelpUrl =
      "https://api.yelp.com/v3/businesses/search?term=restaurants&location=Hollywood";
    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };
    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setRestaurantData(
          json.businesses.filter((businesses) => businesses.transactions.includes(activeTab.toLowerCase()))
        )
      );
  };
  // getRestaurantFromYelp();
  useEffect(() => {
    getRestaurantFromYelp();
  }, [activeTab]);

  return (
    <View style={SafeAreaAndroid.AndroidSafeArea}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab}> </HeaderTabs>
        <SearchBar></SearchBar>
      </View>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <Categories></Categories>
        <RestaurantItems restaurantData={restaurantData}></RestaurantItems>
      </ScrollView>
      {/* <Divider width={1} /> */}
      <BottomTabs> </BottomTabs>
      {/* 2:11:40 */}
    </View>
  );
}

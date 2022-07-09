import { View, Text } from "react-native";
import React from "react";
import About from "../components/RestaurantDetail/About";
import { Divider } from "react-native-elements/dist/divider/Divider";
import MenuItems from "../components/RestaurantDetail/MenuItems";
import ViewCart from "../components/RestaurantDetail/ViewCart";

// import SafeAreaAndroid from '../components/Home/SafeAreaAndroid';

export default function RestaurantDetail({ route, navigation }) {
  return (
    <View>
      <About route={route} />
      <Divider
        width={1.8}
        style={{
          marginVertical: 10,
        }}
      />
      <MenuItems   restaurantName={route.params.name}/>
      <ViewCart
        navigation={navigation}
        restaurantName={route.params.name}
      ></ViewCart>
    </View>
  );
}

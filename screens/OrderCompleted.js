import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import LottieView from "lottie-react-native";
import  firebase from "../firebase";
import MenuItems from "../components/RestaurantDetail/MenuItems";
import SafeAreaAndroid from "../components/Home/SafeAreaAndroid";
import { useNavigation } from '@react-navigation/core'

export default function OrderCompleted() {

  const navigation = useNavigation();
  const auth = firebase.auth();


  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("LoginScreen")
      })
      .catch(error => alert(error.message))
  }


  const [lastOrder, setLastOrder] = useState({
    items: [
      {
        title: "Bologna",
        description: "With butter lettuce, tomato and sauce bechamel",
        price: "$13.50",
        image:
          "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
      },
    ],
  });

  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );

  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });

  useEffect(() => {
    const db = firebase.firestore();
    const unsubscribe = db
      .collection("orders")
      .orderBy("createdAt", "desc")
      .limit(1)
      .onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
          setLastOrder(doc.data());
        });
      });

    return () => unsubscribe();
  }, []);

  return (
    <View
      style={[
        { flex: 1, backgroundColor: "white" },
      ]}
    >
      {/* green checkmark */}
      <View
        style={{
          margin: 10,
          alignItems: "center",
          height: "100%",
        }}
      >
        <LottieView
          style={{ height: 100, alignSelf: "center", marginBottom: 10 }}
          source={require("../assets/animations/check-mark.json")}
          autoPlay
          speed={0.5}
          loop={false}
        />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
        "{auth.currentUser?.email}" order at {restaurantName} has been placed for ${totalUSD}
        </Text>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          style={{height:1000}}
        >
          <MenuItems
            foods={lastOrder.items}
            hideCheckbox={true}
            marginLeft={10}
          />
        </ScrollView>
        <View>
      <TouchableOpacity
        onPress={handleSignOut}

      >
        <Text style={styles.button} >Sign out</Text>
      </TouchableOpacity>
    </View>
        {/* <LottieView
          style={{height: 120, alignSelf: "center", }}
          source={require("../assets/animations/cooking.json")}
          autoPlay
          speed={0.5}
        /> */}
      </View>
    </View>
  );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
   button: {
    backgroundColor: '#0782F9',
    // width: '100%',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    fontWeight:"400",
    fontSize: 15,
    marginBottom: 20,
  },
  buttonText: {
    color: 'black',
    fontWeight: '700',
    fontSize: 16,
  },
})
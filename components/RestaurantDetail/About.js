import { View, Text, Image } from "react-native";
import React from "react";

const yelpRestaurantInfo = {
  name: "Farhouse Kitchien Thai Cuisine",
  image:
    "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
  price: "$$",
  reviews: "1500",
  rating: 5,
  categories: [
    {
      title: "Thai",
    },
    {
      title: "Comfort Food",
    },
  ],
};

// const images =   "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg";
// const title = "Farhouse Kitchien Thai Cuisine";
// const description = " Thai • Comfort • Food • $$ • 🎫 • 4⭐(2913+)";

export default function About(props) {
  const { name, image, price, rating, categories, reviews } =
    props.route.params;

  const formattedCategories = categories.map((cat) => cat.title).join(" • ");

  const description = `${formattedCategories} ${
    price ? " • " + price : ""
  } • 🎫 • ${rating} ⭐ (${reviews}+)`;

  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantName title={name} />
      <RestaurantDescription description={description} />
    </View>
  );
}
const RestaurantImage = (props) => (
  <Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
);

const RestaurantName = (props) => (
  <View>
    <Text
      style={{
        fontSize: 25,
        fontWeight: "600",
        marginTop: 10,
        marginHorizontal: 15,
      }}
    >
      {props.title}
    </Text>
  </View>
);

const RestaurantDescription = (props) => (
  <View>
    <Text
      style={{
        fontWeight: "300",
        fontSize: 15.5,
        marginTop: 10,
        marginHorizontal: 15,
      }}
    >
      {props.description}
    </Text>
  </View>
);

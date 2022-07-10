import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  StatusBar,
  Platform,
} from "react-native";
import React from "react";
import { Divider } from "react-native-elements/dist/divider/Divider";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch,useSelector } from "react-redux";


const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 5,
    // backgroundColor:'lightgray',
    padding: 5,
    borderRadius: 10,
  },

  titleStyle: {
    fontSize: 19,
    fontWeight: "600",
  },
  listWrapper: {
    // flex:1,
    // flexGrow:1,
    width: "100%",
    height: 400,
  },
});

// const show = () =>{
//   foods.map((food) => console.log(food))
// }
// show();
export default function MenuItems({ restaurantName,foods, hideCheckbox, marginLeft }) {
  const dispatch = useDispatch();
  const selectItem = (item, checkboxValue) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...item,
        restaurantName: restaurantName,
        checkboxValue: checkboxValue,
      },
    });


    const cartItems = useSelector(
      (state) => state.cartReducer.selectedItems.items
    );
  
    const isFoodInCart = (food, cartItems) => 
    Boolean(cartItems.find((item) => item.title === food.title));



  return (
    <View style={styles.listWrapper}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        {
        foods?.map((food, index) => (
          <View key={index} style={styles.menuItemStyle}>
            { hideCheckbox? (<></>) : (
                        <BouncyCheckbox
                          iconStyle={{
                            borderColor: "green",
                            borderRadius: 0,
                            fillColor: "green",
                          }}
                          isChecked={isFoodInCart(food, cartItems)}
                          onPress={(checkboxValue) => selectItem(food, checkboxValue)}
                        />
            )
}
            <FoodInfo food={food} />
            <FoodImage food={food} marginLeft={marginLeft? marginLeft: 0}  />
            <Divider
              width={0.5}
              orientation="vertical"
              style={{
                marginHorizontal: 20,
              }}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

// 2.:36
const FoodInfo = (props) => (
  <View
    style={{
      width: 180,
      justifyContent: "space-evenly",
    }}
  >
    <Text style={styles.titleStyle}>{props.food.title}</Text>
    <Text>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>
);

const FoodImage = ({marginLeft ,...props}) => (
  <View>
    <Image
      source={{ uri: props.food.image }}
      style={{
        width: 100,
        height: 100,
        borderRadius: 8,
        marginLeft: marginLeft
      }}
    />
  </View>
);
// 4:29
// lets do thissss

import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from "react-redux";

export default function ViewCart({}) {

  const { items } = useSelector(
    (state) => state.cartReducer.selectedItems
  );


  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

    const totalUSD = total.toLocaleString("en", {
      style: "currency",
      currency: "USD",
    });

    
  return (
    <>
    {
      total ? (
    <View style={{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        // flexDirection: 'row',
        position:'absolute',
        // padding:30,
        bottom: 35,
        zIndex: 999,
        marginLeft:30
    }}>
    <View style={{ flexDirection: "row", justifyContent: "center",alignContent:'center',alignItems:'center' }}>
        <TouchableOpacity 
        style={{
            marginTop: 15,
            backgroundColor: 'black',
            alignItems:'center',
            padding: 10,
            borderRadius: 30,
            width: 280,
            justifyContent:'center',
            position:'relative'
        }}>
      <Text style={{color:'white',
    fontSize:18,
    }}> ViewCart      {totalUSD}</Text>
    </TouchableOpacity>
    </View>
    </View>
      ):
      <></>
  }
    </>
  )
}
import { View, Text } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";

export default function HeaderTabs() {
  const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      {/* Header button */}
      <HeaderButton
        text="Delivery"
        btnColor="black"
        tetxColor="white"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      {/* Header button */}
      <HeaderButton
        text="Pickup"
        btnColor="white"
        tetxColor="black"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
}
const HeaderButton = (props) => (
  <TouchableOpacity
    style={{
      backgroundColor: props.activeTab===props.text? 'black':'white',
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 30,
    }}
    onPress ={() => props.setActiveTab(props.text)}
  >
    <Text style={{ color: props.activeTab === props.text?'white':'black', 
      fontWeight: "900" }}>
      {props.text}
    </Text>
  </TouchableOpacity>
);

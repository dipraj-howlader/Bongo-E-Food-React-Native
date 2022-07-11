import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from './screens/Home';
import RestaurantDetail from './screens/RestaurantDetail';
import configureStore from "./redux/store";
import { Provider as ReduxProvider } from "react-redux";
// import store from './redux/store';
import OrderCompleted from './screens/OrderCompleted';
import LoginScreen from "./screens/LoginScreen";

const store = configureStore();


export default function RootNavigation() {
    const Stack = createStackNavigator();

    const screenOptions = {
        headerShown: false,
      };
    return (
      <ReduxProvider store={store}>
        <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginScreen" screenOptions={screenOptions}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
          <Stack.Screen name="OrderCompleted" component={OrderCompleted} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      </ReduxProvider>
    )
}
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RecipeProvider } from "./src/providers/Recipes-hooks";
import List from "./src/views/List";
import Selected from "./src/views/Selected";
import NotificationBadge from "./src/containers/NotificationBadge";

const MainNavigator = createBottomTabNavigator(
  {
    Recipes: { screen: List },
    Selected: { screen: Selected }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === "Recipes") {
          iconName = `ios-information-circle${focused ? "" : "-outline"}`;
        } else if (routeName === "Selected") {
          iconName = `ios-star${focused ? "" : "-outline"}`;
          IconComponent = NotificationBadge;
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "orange",
      inactiveTintColor: "gray"
    }
  }
);

const Navigation = createAppContainer(MainNavigator);

const App: React.FC = () => (
  <RecipeProvider>
    <Navigation />
  </RecipeProvider>
);

export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center"
//   }
// });

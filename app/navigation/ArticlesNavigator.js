import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";
import ArticlesScreen from "../screens/ArticlesScreen";
import ArticleDetailsScreen from "../screens/ArticleDetailsScreen";
import Constants from "expo-constants";

const Stack = createStackNavigator();

const ArticleNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        title: false,
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="News"
        component={ArticlesScreen}
        options={{
          headerShown: false,
          headerRight: () => (
            <View style={styles.routeNameContainer}>
              <AppText style={styles.routeName}>Articles</AppText>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="ArticleDetails"
        component={ArticleDetailsScreen}
        options={{
          headerRight: () => (
            <View style={styles.routeNameContainer}>
              <AppText style={styles.routeName}>Article Details</AppText>
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  routeNameContainer: {
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  routeName: {
    color: colors.primary,
    fontSize: 25,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    width: "100%",
    height: "100%",
  },
  drawerLine1: {
    width: 35,
    height: 4,
    marginVertical: 2,
    backgroundColor: colors.dark,
    borderRadius: 5,
  },
  drawerLine2: {
    width: 35,
    height: 4,
    marginVertical: 2,
    transform: [{ translateX: 10 }],
    backgroundColor: colors.dark,
    borderRadius: 5,
  },
  drawerLine3: {
    marginVertical: 2,
    width: 35,
    height: 4,
    backgroundColor: colors.dark,
    borderRadius: 5,
  },
  drawerContainer: {
    justifyContent: "center",
    paddingTop: 80,
    paddingLeft: 20,
  },
  hambergerContainer: {
    flex: 1,
    backgroundColor: colors.primary,
    width: 80,
    height: 50,
    marginTop: Constants.statusBarHeight,
    // position: "absolute",
  },
});

export default ArticleNavigator;

import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import Animated from "react-native-reanimated";
import {
  MaterialCommunityIcons,
  Octicons,
  AntDesign,
  FontAwesome5,
} from "@expo/vector-icons";

import colors from "../config/colors";
import { LinearGradient } from "expo-linear-gradient";
import ArticlesScreen from "../screens/ArticlesScreen";
import ArticleNavigator from "./ArticlesNavigator";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Screens = ({ navigation, style }) => {
  return (
    <Animated.View
      style={[{ flex: 1, overflow: "hidden", elevation: 20 }, style]}
    >
      <Stack.Navigator
        screenOptions={{
          headerTransparent: true,
          title: false,
          // headerLeft: () => (
          //   <TouchableOpacity
          //     style={styles.iconContainer}
          //     onPress={() => navigation.openDrawer()}
          //   >
          //     <View style={styles.drawerLine1}></View>
          //     <View style={styles.drawerLine2}></View>
          //     <View style={styles.drawerLine3}></View>
          //   </TouchableOpacity>
          // ),
        }}
      >
        <Stack.Screen name="Articles" component={ArticleNavigator} />
      </Stack.Navigator>
    </Animated.View>
  );
};

const DrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerContainer}>
        <DrawerItem
          label="News"
          labelStyle={styles.label}
          onPress={() => props.navigation.navigate("News")}
          icon={() => (
            <MaterialCommunityIcons
              name="newspaper"
              size={25}
              color={colors.white}
            />
          )}
        />
        <DrawerItem
          label="Forum"
          labelStyle={styles.label}
          onPress={() => props.navigation.navigate("Login")}
          icon={() => (
            <MaterialCommunityIcons
              name="forum-outline"
              size={25}
              color={colors.white}
            />
          )}
        />
        <DrawerItem
          label="Discussions"
          labelStyle={styles.label}
          onPress={() => props.navigation.navigate("Signup")}
          icon={() => (
            <Octicons
              name="comment-discussion"
              size={25}
              color={colors.white}
            />
          )}
        />
        <DrawerItem
          label="Friends"
          labelStyle={styles.label}
          onPress={() => props.navigation.navigate("Signup")}
          icon={() => (
            <FontAwesome5 name="user-friends" size={25} color={colors.white} />
          )}
        />
        <DrawerItem
          label="About"
          labelStyle={styles.label}
          onPress={() => props.navigation.navigate("Signup")}
          icon={() => (
            <FontAwesome5
              name="question-circle"
              size={25}
              color={colors.white}
            />
          )}
        />
        <DrawerItem
          label="Settings"
          labelStyle={styles.label}
          onPress={() => props.navigation.navigate("Signup")}
          icon={() => (
            <Octicons name="settings" size={25} color={colors.white} />
          )}
        />
        <DrawerItem
          labelStyle={styles.label}
          label="Sign out"
          onPress={() => props.navigation.navigate("Signup")}
          icon={() => (
            <AntDesign name="logout" size={25} color={colors.white} />
          )}
        />
      </View>
    </DrawerContentScrollView>
  );
};
export default () => {
  const [progress, setProgress] = useState(new Animated.Value(0));
  const scale = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.9],
  });
  const borderRadius = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, 30],
  });
  const screensStyle = { borderRadius, transform: [{ scale }] };
  return (
    <LinearGradient
      style={{ flex: 1 }}
      // colors={["#134ade", "#5382ff", "#63be62"]}
      colors={["#37D5D6", "#2A2A72"]}
      start={{ x: 0.3, y: 0.1 }}
    >
      {/* background-color: #36096d; */}
      {/* background-image: linear-gradient(315deg, #36096d 0%, #37d5d6 74%); */}
      <Drawer.Navigator
        initialRouteName="Login"
        drawerType="slide"
        overlayColor="transparent"
        drawerContentOptions={{
          activeBackgroundColor: "transparent",
        }}
        drawerStyle={{ width: "65%", backgroundColor: "transparent" }}
        sceneContainerStyle={{
          backgroundColor: "transparent",
        }}
        drawerContent={(props) => {
          setProgress(props.progress);
          return <DrawerContent {...props} />;
        }}
      >
        <Drawer.Screen name="Screens">
          {(props) => <Screens {...props} style={screensStyle} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    paddingLeft: 20,
  },
  menuIcon: {
    transform: [
      {
        rotate: "90deg",
      },
    ],
  },

  drawerHeader: {
    justifyContent: "center",
    alignItems: "center",
  },
  drawerLine1: {
    width: 35,
    height: 4,
    marginVertical: 2,
    backgroundColor: "#000",
    borderRadius: 5,
  },
  drawerLine2: {
    width: 35,
    height: 4,
    marginVertical: 2,
    transform: [{ translateX: 10 }],
    backgroundColor: "#000",
    borderRadius: 5,
  },
  drawerLine3: {
    marginVertical: 2,
    width: 35,
    height: 4,
    backgroundColor: "#000",
    borderRadius: 5,
  },
  drawerContainer: {
    justifyContent: "center",
    paddingTop: 80,
    paddingLeft: 20,
  },
  label: {
    fontSize: 16,
    color: colors.white,
  },
});

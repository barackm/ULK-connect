import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import AppText from "./AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
export default function WelcomeScreenBtn({ image, title, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.iconContainer}>
        {image ? (
          <Image source={image} style={styles.image} />
        ) : (
          <MaterialCommunityIcons name="email" size={25} color={colors.dark} />
        )}
      </View>
      <AppText style={styles.title}>{title}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    display: "flex",
    flexDirection: "row",
    backgroundColor: colors.white,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 5,
  },
  iconContainer: {
    marginHorizontal: 10,
    width: 35,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
  },
});

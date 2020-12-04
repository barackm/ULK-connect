import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../config/colors";

export default function AppButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    backgroundColor: colors.primary,
    marginVertical: 10,
    borderRadius: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: colors.white,
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 16,
    letterSpacing: 0.5,
  },
});

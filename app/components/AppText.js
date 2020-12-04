import React from "react";
import { StyleSheet, Text } from "react-native";
import colors from "../config/colors";
export default function AppText({ style, children, ...rest }) {
  return (
    <Text style={[styles.text, style]} {...rest}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: colors.dark,
    fontFamily: "Roboto",
  },
});

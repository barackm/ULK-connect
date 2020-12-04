import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import colors from "../config/colors";
import { Feather } from "@expo/vector-icons";
const AppSearch = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Search article" style={styles.input} />
      </View>
      <View>
        <Feather name="search" size={23} color={colors.dark} />
      </View>
    </View>
  );
};

export default AppSearch;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 45,
    backgroundColor: colors.white,
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 6,
    flexDirection: "row",
    paddingHorizontal: 10,
    alignItems: "center",
  },
  inputContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  input: {
    fontSize: 16,
    flex: 1,
  },
});

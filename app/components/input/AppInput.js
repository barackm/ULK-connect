import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import colors from "../../config/colors";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
export default function App({ placeholder, icon = "user", type, ...rest }) {
  const [showPassword, setShowPassword] = useState(true);
  return (
    <View style={styles.container}>
      {icon && (
        <View style={styles.iconContainer}>
          <LinearGradient
            colors={["#a0b7f9", colors.hardPrimary]}
            style={styles.linearGradient}
          />
          <MaterialCommunityIcons name={icon} size={20} color={colors.white} />
        </View>
      )}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={type ? showPassword : false}
        {...rest}
      />
      {type && (
        <TouchableOpacity
          style={styles.iconContainerPaasword}
          onPress={() => setShowPassword(!showPassword)}
        >
          <FontAwesome5
            name={showPassword ? "eye" : "eye-slash"}
            size={20}
            color={colors.dark}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    backgroundColor: colors.light,
    borderRadius: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  iconContainer: {
    position: "relative",
    borderRadius: 17.5,
    height: 35,
    width: 35,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.12,
    shadowRadius: 5,
    elevation: 5,
    marginRight: 10,
  },
  iconContainerPaasword: {
    width: 25,
    marginLeft: 10,
  },
  linearGradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
    borderRadius: 15,
  },
  input: {
    flex: 1,
  },
});

import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  Modal,
  Dimensions,
} from "react-native";
import colors from "../config/colors";
import Constants from "expo-constants";
import AppText from "../components/AppText";
import WelcomeScreenBtn from "../components/WelcomeScreenBtn";
import AppButton from "../components/AppButton";
import AppInput from "../components/input/AppInput";
const { height } = Dimensions.get("window");
export default function WelcomeScreen({ navigation }) {
  const [loginModalVisible, setLoginModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.headerBg}>
        <Image
          style={styles.bgImage}
          source={require("../assets/bg-home.png")}
        />
      </View>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        {!loginModalVisible && (
          <View style={styles.details}>
            <AppText style={styles.text}>Welcome back</AppText>
            <AppText style={styles.subtext}>
              Academic Excellence for Business and the Professions.
            </AppText>
          </View>
        )}
      </View>
      {!loginModalVisible && (
        <View style={styles.btnsContainer}>
          <WelcomeScreenBtn
            title="Sign in with Google"
            image={require("../assets/google.png")}
          />
          <WelcomeScreenBtn
            title="Sign in with Facebook"
            image={require("../assets/facebook.png")}
          />
          <WelcomeScreenBtn
            title="Sign in with Email"
            onPress={() => setLoginModalVisible(true)}
          />
        </View>
      )}
      {!loginModalVisible && (
        <View style={styles.footer}>
          <AppText style={styles.footerText}>
            Don't you have an account ?
          </AppText>
          <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <AppText style={styles.signup}>Sign up here</AppText>
          </TouchableOpacity>
        </View>
      )}
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={loginModalVisible}
          onRequestClose={() => {}}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TouchableOpacity
                style={styles.closeContainer}
                onPress={() => {
                  setLoginModalVisible(!loginModalVisible);
                }}
              >
                <View style={styles.close}></View>
              </TouchableOpacity>
              <View style={styles.loginContainer}>
                <AppText style={styles.loginText}>Login with Email</AppText>
                <AppText style={styles.subtextLogin}>
                  Academic Excellence for Business and the Professions.
                </AppText>
                <View style={styles.loginFields}>
                  <AppInput placeholder="Enter your username" icon="email" />
                  <AppInput
                    type="password"
                    placeholder="Enter your password"
                    icon="lock"
                  />
                  <AppButton title="Sign in" />

                  <View style={styles.passwordForotten}>
                    <AppText style={styles.passwordText}>
                      Password Forgotten ?
                    </AppText>
                    <TouchableOpacity>
                      <AppText style={styles.passwordReset}>Reset here</AppText>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    width: "100%",
    height: "100%",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#f6f9ff",
  },
  headerBg: {
    position: "absolute",
    width: "100%",
    // top: Constants.statusBarHeight,
    top: 0,
    left: 0,
    right: 0,
    height: 400,
    overflow: "hidden",
    opacity: 0.2,
  },
  bgImage: {
    transform: [{ rotate: "180deg" }],
    top: 0,
    width: "100%",
    height: 400,
  },
  logoContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    marginTop: 20,
    width: 125,
    height: 111,
  },
  text: {
    fontSize: 30,
    // fontWeight: "bold",
    marginVertical: 10,
    color: "#000",
    // textTransform: "uppercase",
  },
  details: {
    flexDirection: "column",
    alignItems: "center",
  },
  subtext: {
    paddingHorizontal: 40,
    fontSize: 18,
    textAlign: "center",
  },
  btnsContainer: {
    width: "100%",
    paddingHorizontal: 30,
    marginTop: 20,
  },
  footer: {
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  signup: {
    color: colors.primary,
    fontSize: 16,
  },
  footerText: {
    fontSize: 16,
  },
  loginModal: {
    height: 500,
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 0,
    width: "100%",
    height: height / 2 + 100,
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,

    // borderRadius: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    paddingHorizontal: 20,
    paddingVertical: 20,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 80,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  closeContainer: {
    height: 30,
  },
  close: {
    width: 80,
    height: 4,
    backgroundColor: "#d2d4d8",
    borderRadius: 5,
  },
  loginText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  loginContainer: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  subtextLogin: {
    paddingHorizontal: 20,
    fontSize: 16,
    textAlign: "center",
    color: "#d2d4d8",
  },
  loginFields: {
    width: "100%",
  },
  passwordForotten: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 20,
  },
  passwordText: {
    marginRight: 10,
    fontSize: 16,
  },
  passwordReset: {
    color: colors.primary,
    fontWeight: "bold",
    fontSize: 16,
  },
});

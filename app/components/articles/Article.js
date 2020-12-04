import React from "react";
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import {
  AntDesign,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import colors from "../../config/colors";
import AppText from "../AppText";
const Article = ({ onLike, onComment, onPress }) => {
  return (
    <TouchableWithoutFeedback style={{ flex: 1 }} onPress={onPress}>
      <View style={styles.container} onPress={onPress}>
        <View style={styles.imageWrapper}>
          <Image
            source={require("../../assets/sport2.png")}
            style={styles.image}
          />
        </View>
        <View style={styles.articleDetails}>
          <View style={styles.articleHeader}>
            <AppText style={styles.categoryName}>Sport</AppText>
          </View>
          <View style={styles.articleContent}>
            <AppText style={styles.content} numberOfLines={2}>
              Add live scores, standings, box scores or any other sports data
              widgets for 15 days or API for 30 days into your website.
              Completely free.
            </AppText>
          </View>
          <View style={styles.articleControls}>
            <View style={styles.leftControls}>
              <TouchableWithoutFeedback onPress={onLike}>
                <View style={styles.likesContainer}>
                  <AntDesign name="like2" size={25} color={colors.dark} />
                  <AppText style={styles.text}>2.1k</AppText>
                </View>
              </TouchableWithoutFeedback>
              <View style={styles.timingContainer}>
                <MaterialCommunityIcons
                  name="history"
                  size={24}
                  color={colors.dark}
                />
                <AppText style={styles.text}>1hr ago</AppText>
              </View>
            </View>
            <TouchableWithoutFeedback
              style={styles.rightControls}
              onPress={onComment}
            >
              <FontAwesome5 name="comment-alt" size={20} color={colors.dark} />
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Article;

const styles = StyleSheet.create({
  container: {
    height: 100,
    flexDirection: "row",
    marginVertical: 10,
  },
  imageWrapper: {
    width: 80,
    height: "100%",
    overflow: "hidden",
    borderRadius: 12,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  articleDetails: {
    flex: 1,
    paddingLeft: 20,
  },
  articleControls: {
    flexDirection: "row",
  },
  timingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  likesContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  leftControls: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  articleContent: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
  },
  content: {
    fontSize: 15,
    fontWeight: "bold",
    color: colors.dark,
  },
  categoryName: {
    fontWeight: "bold",
    textTransform: "uppercase",
    color: colors.primary,
    fontSize: 17,
  },
  text: {
    marginLeft: 3,
    fontWeight: "400",
  },
});

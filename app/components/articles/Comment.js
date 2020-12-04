import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import colors from "../../config/colors";
import AppText from "../AppText";

const Comment = ({ comment }) => {
  console.log(comment);
  return (
    <View style={styles.container}>
      <View style={styles.userImage}>
        <Image source={comment.imageUrl} style={styles.image} />
      </View>
      <View style={styles.commentDetails}>
        <View style={styles.owner}>
          <AppText style={styles.name}>{comment.name}</AppText>
          <AppText style={styles.time}>{comment.timeStamp}</AppText>
        </View>
        <View style={styles.commentWrapper}>
          <AppText style={styles.comment}>{comment.comment}</AppText>
        </View>
      </View>
    </View>
  );
};

export default Comment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginVertical: 10,
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  owner: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  commentDetails: {
    paddingLeft: 10,
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  commentWrapper: {
    paddingTop: 5,
  },
  comment: {},
});

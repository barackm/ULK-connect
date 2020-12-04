import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Modal,
  Dimensions,
  FlatList,
} from "react-native";
import {
  MaterialCommunityIcons,
  FontAwesome,
  FontAwesome5,
  AntDesign,
} from "@expo/vector-icons";
import Constants from "expo-constants";
import colors from "../config/colors";
import AppText from "../components/AppText";
import Comment from "../components/articles/Comment";
const { height } = Dimensions.get("window");

const ArticleDetailsScreen = ({ navigation }) => {
  const [commentModalVisible, setCommentModalVisible] = useState(false);
  const [moreOptionsVisible, setMoreOptionsVisible] = useState(false);
  const comments = [
    {
      id: 1,
      userId: 1,
      imageUrl: require("../assets/user.jpg"),
      name: "Mark Lemon",
      timeStamp: "2 june 2020",
      comment:
        "So far, Mr Cook has not commented on these reports Stratford police refuse to comment on whether anyone has been arrested",
    },
    {
      id: 2,
      userId: 2,
      imageUrl: require("../assets/user.jpg"),
      name: "Mark Lemon",
      timeStamp: "2 june 2020",
      comment:
        "So far, Mr Cook has not commented on these reports Stratford police refuse to comment on.",
    },
    {
      id: 3,
      userId: 3,
      imageUrl: require("../assets/user.jpg"),
      name: "Mark Lemon",
      timeStamp: "2 june 2020",
      comment:
        "Add live scores, standings, box scores or any other sports datawidgets for 15 days",
    },
    {
      id: 4,
      userId: 4,
      imageUrl: require("../assets/user.jpg"),
      name: "Mark Lemon",
      timeStamp: "2 june 2020",
      comment:
        "So far, Mr Cook has not commented on these reports Stratford police refuse to comment on whether anyone has been arrested",
    },
  ];
  return (
    <View style={styles.container}>
      {commentModalVisible && (
        <TouchableOpacity
          style={styles.overlay}
          onPress={() => console.log("modal closed")}
        ></TouchableOpacity>
      )}
      {moreOptionsVisible && <View style={styles.commentMoreOptions}></View>}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.goback}
          onPress={() => navigation.goBack()}
        >
          <MaterialCommunityIcons
            name="chevron-left"
            size={40}
            color={colors.dark}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.options}
          onPress={() => setMoreOptionsVisible(!moreOptionsVisible)}
        >
          <MaterialCommunityIcons
            name="dots-vertical"
            size={35}
            color={colors.dark}
          />
        </TouchableOpacity>
      </View>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={styles.articleOwnerDetails}>
          <View style={styles.articleTitle}>
            <AppText style={styles.articleTitle} numberOfLines={3}>
              Add live scores, standings, box scores or any other sports data
              widgets for 15 days
            </AppText>
          </View>
          <View style={styles.ownerContainer}>
            <View style={styles.imageWrapper}>
              <Image
                source={require("../assets/code.jpeg")}
                style={styles.profile}
              />
            </View>
            <View style={styles.profileDetails}>
              <AppText style={styles.name}>Andy Waruwu</AppText>
              <AppText style={styles.time}>2m ago</AppText>
            </View>
            <View style={styles.controls}>
              <TouchableOpacity style={styles.share}>
                <FontAwesome
                  name="mail-forward"
                  size={24}
                  color={colors.dark}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.comment}
                onPress={() => setCommentModalVisible(true)}
              >
                <FontAwesome5
                  name="comment-alt"
                  size={20}
                  color={colors.dark}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.articleImageWrapper}>
          <Image
            style={styles.articleImage}
            source={require("../assets/article2.jpg")}
          />
        </View>
        <View style={styles.articleMainContent}>
          <AppText style={styles.articleSubtitle}>
            box scores or any other sports data widgets for 15 days box scores
            or any other sports data widge
          </AppText>
          <View style={styles.article}>
            <AppText style={styles.articleText}>
              react native navigation back button back in react natvie how to
              know back button is pressed in react native react native class
              backhandler navigate on back press react native react native
              backhandle navigate how to enable back button in react native how
              to check if user press back button in react native
            </AppText>
          </View>
        </View>

        <View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={commentModalVisible}
            onRequestClose={() => {}}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <TouchableOpacity
                  style={styles.closeContainer}
                  onPress={() => {
                    setCommentModalVisible(!commentModalVisible);
                  }}
                >
                  <View style={styles.close}></View>
                </TouchableOpacity>
                <ScrollView
                  style={{ flex: 1 }}
                  showsVerticalScrollIndicator={false}
                >
                  <View style={styles.commentsHeader}>
                    <AppText style={styles.commentCount}>Comments (9)</AppText>
                    <TouchableOpacity style={styles.addCommentBtn}>
                      <AppText style={styles.addComment}>Add Comment</AppText>
                    </TouchableOpacity>
                  </View>
                  <FlatList
                    data={comments}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <Comment comment={item} />}
                  />
                </ScrollView>
              </View>
            </View>
          </Modal>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.likeBtn}>
        <AntDesign name="like2" size={20} color={colors.white} />
        <AppText style={styles.likes}>2.1k</AppText>
      </TouchableOpacity>
    </View>
  );
};

export default ArticleDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingTop: Constants.statusBarHeight + 10,
    paddingHorizontal: 5,
    position: "relative",
  },
  goback: {},
  articleOwnerDetails: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  articleTitle: {
    fontWeight: "bold",
    fontSize: 20,
  },
  imageWrapper: {
    width: 50,
    height: 50,
    borderRadius: 15,
    overflow: "hidden",
  },
  profile: {
    width: "100%",
    height: "100%",
  },
  ownerContainer: {
    paddingTop: 20,
    flexDirection: "row",
  },
  profileDetails: {
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingVertical: 3,
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  time: {
    fontSize: 15,
  },
  controls: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  share: {
    marginHorizontal: 10,
    marginRight: 30,
  },
  articleImageWrapper: {
    height: 200,
    marginTop: 20,
  },
  articleImage: {
    width: "100%",
    height: "100%",
  },
  articleMainContent: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  articleSubtitle: {
    fontWeight: "bold",
    fontSize: 17,
  },
  article: {
    paddingTop: 10,
    paddingBottom: 50,
  },
  articleText: {
    fontSize: 15,
  },
  likeBtn: {
    position: "absolute",
    bottom: 40,
    right: 20,
    width: 90,
    height: 40,
    borderRadius: 10,
    backgroundColor: colors.primary,
    elevation: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  likes: {
    color: colors.white,
    fontWeight: "bold",
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
    height: height / 2 + 150,
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    paddingHorizontal: 25,
    paddingVertical: 20,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 80,
  },
  closeContainer: {
    height: 30,
    alignItems: "center",
  },
  close: {
    width: 80,
    height: 4,
    backgroundColor: "#d2d4d8",
    borderRadius: 5,
  },
  commentsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  commentCount: {
    fontSize: 17,
    fontWeight: "bold",
  },
  addComment: {
    fontSize: 17,
    fontWeight: "bold",
    color: colors.primary,
  },
  overlay: {
    flex: 1,
    position: "absolute",
    zIndex: 9999,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#00000081",
  },
  commentMoreOptions: {
    position: "absolute",
    right: 20,
    backgroundColor: colors.light,
    width: 250,
    height: 250,
    zIndex: 9999,
    borderRadius: 5,
    top: Constants.statusBarHeight + 50,
    elevation: 10,
  },
});

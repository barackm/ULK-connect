import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import AppSearch from "../components/AppSearch";
import colors from "../config/colors";
import Constants from "expo-constants";
import AppText from "../components/AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Article from "../components/articles/Article";
const articles = [
  {
    id: 1,
    title: "Hey this is an article title",
    image: require("../assets/article1.png"),
    likes: "2.1k",
    time: "1hr ago",
  },
  {
    id: 2,
    title: "Hey this is an article title",
    image: require("../assets/article1.png"),
    likes: "2.1k",
    time: "1hr ago",
  },
  {
    id: 3,
    title: "Hey this is an article title",
    image: require("../assets/article1.png"),
    likes: "2.1k",
    time: "1hr ago",
  },
  {
    id: 4,
    title: "Hey this is an article title",
    image: require("../assets/article1.png"),
    likes: "2.1k",
    time: "1hr ago",
  },
];
const ArticlesScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerControls}>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => navigation.openDrawer()}
          >
            <View style={styles.drawerLine1}></View>
            <View style={styles.drawerLine2}></View>
            <View style={styles.drawerLine3}></View>
          </TouchableOpacity>
          <AppText style={styles.routeName}>Articles</AppText>
        </View>
        <AppSearch />
        <View style={styles.articleCategory}>
          <AppText style={styles.category}>Newest</AppText>
          <TouchableOpacity style={styles.categoryBtn}>
            <AppText style={styles.categoryBtnText}>More</AppText>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.articlesContainer}>
        <FlatList
          refreshing={true}
          data={articles}
          keyExtractor={(item) => item.id}
          renderItem={(item) => (
            <Article
              article={item}
              onPress={() => navigation.navigate("ArticleDetails", item)}
              onLike={() => console.log("post liked")}
              onComment={() => console.log("post commented")}
            />
          )}
        />
      </ScrollView>
    </View>
  );
};

export default ArticlesScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  header: {
    paddingHorizontal: 25,
  },
  routeName: {
    fontSize: 25,
    fontWeight: "bold",
  },
  articleCategory: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  category: {
    fontSize: 18,
    fontWeight: "bold",
  },
  categoryBtnText: {
    fontSize: 16,
    color: colors.primary,
  },
  articlesContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  drawerLine1: {
    width: 35,
    height: 4,
    marginVertical: 2,
    backgroundColor: colors.dark,
    borderRadius: 5,
  },
  drawerLine2: {
    width: 35,
    height: 4,
    marginVertical: 2,
    transform: [{ translateX: 10 }],
    backgroundColor: colors.dark,
    borderRadius: 5,
  },
  drawerLine3: {
    marginVertical: 2,
    width: 35,
    height: 4,
    backgroundColor: colors.dark,
    borderRadius: 5,
  },
  iconContainer: {
    height: "100%",
    justifyContent: "center",
    width: 80,
  },
  headerControls: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 60,
    alignItems: "center",
    zIndex: 1,
  },
});

import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";

import Avatar from "./Avatar";
import Text from "./Text";

import Colors from "../styles/Colors";

const EpisodeCard = ({ name, episode, date, id, navigation, type }) => {
  const handleClick = () => {
    navigation.navigate("Episode", { id });
  };
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={handleClick}>
      <View style={styles.avatarContainer}>
        <Avatar
          size={70}
          imageProps={{
            image:
              "https://www.pngall.com/wp-content/uploads/4/Rick-And-Morty-PNG-Image.png",
          }}
        />
      </View>
      <View style={styles.episodeDetail}>
        {type === "summary" && (
          <View style={styles.textContainer}>
            <Text weight="bold" color={Colors.textColor}>
              Episode Name :{" "}
            </Text>
            <View style={{ width: "60%" }}>
              <Text>{name}</Text>
            </View>
          </View>
        )}

        <View
          style={
            type === "episodeDetail" ? styles.episodeCard : styles.textContainer
          }
        >
          <Text weight="bold" color={Colors.textColor}>
            Season/Episode :{" "}
          </Text>
          <Text>{episode}</Text>
        </View>
        <View
          style={
            type === "episodeDetail" ? styles.episodeCard : styles.textContainer
          }
        >
          <Text weight="bold" color={Colors.textColor}>
            Date :{" "}
          </Text>
          <Text>{date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default EpisodeCard;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: Colors.cardBackground,
    borderRadius: 16,
    flexDirection: "row",
    paddingVertical: 8,
    alignItems: "center",
    marginTop: 16,
  },
  avatarContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  episodeCard: {
    flexDirection: "row",
    marginRight: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    flexDirection: "row",
    marginRight: 16,
  },
  episodeDetail: {
    flex: 1,
    justifyContent: "center",
  },
});

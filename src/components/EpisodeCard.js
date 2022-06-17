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
              Bölüm İsmi :{" "}
            </Text>
            <View style={{ width: "60%" }}>
              <Text>{name}</Text>
            </View>
          </View>
        )}

        <View style={styles.textContainer}>
          <Text weight="bold" color={Colors.textColor}>
            Sezon/Bölüm :{" "}
          </Text>
          <Text>{episode}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text weight="bold" color={Colors.textColor}>
            Tarih :{" "}
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
    padding: 8,
    alignItems: "center",
    marginTop: 16,
  },
  avatarContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },
  textContainer: {
    flexDirection: "row",
  },
  episodeDetail: {
    flex: 1,
    justifyContent: "center",
  },
});

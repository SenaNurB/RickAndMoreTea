import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";

import Avatar from "./Avatar";
import Text from "./Text";

const EpisodeCard = ({ name, episode, date, id, navigation }) => {
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
      <View
        style={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        <View style={styles.textContainer}>
          <Text weight="bold" color="#D6D5A8">
            Bölüm İsmi :{" "}
          </Text>
          <View style={{ width: "60%" }}>
            <Text>{name}</Text>
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text weight="bold" color="#D6D5A8">
            Sezon/Bölüm :{" "}
          </Text>
          <Text>{episode}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text weight="bold" color="#D6D5A8">
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
    backgroundColor: "#51557E",
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
  textContainer: { flexDirection: "row" },
});

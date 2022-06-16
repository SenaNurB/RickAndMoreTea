import { StyleSheet, SafeAreaView, View } from "react-native";
import React from "react";

import Avatar from "../components/Avatar";
import Text from "../components/Text";

import useCharacterData from "../api/useCharacterData";

const CharacterDetail = ({ route }) => {
  const { id } = route.params;
  const { status, data: character, error } = useCharacterData(id);
  console.log(character);
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginTop: 16, alignItems: "center" }}>
        <Avatar
          size={200}
          imageProps={{
            image: character.image,
          }}
        />
      </View>
      <View style={{ paddingHorizontal: 50, paddingVertical: 16 }}>
        <View style={styles.textContainer}>
          <Text weight="bold" color="#D6D5A8">
            İsmi :{" "}
          </Text>
          <Text>{character.name}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text weight="bold" color="#D6D5A8">
            Yaşadığı Yer :{" "}
          </Text>
          <Text>{character.location.name}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text weight="bold" color="#D6D5A8">
            Cinsiyet :{" "}
          </Text>
          <Text>{character.gender}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text weight="bold" color="#D6D5A8">
            Türü :{" "}
          </Text>
          <Text>{character.species}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text weight="bold" color="#D6D5A8">
            Durumu :{" "}
          </Text>
          <Text>{character.status}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CharacterDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B2430",
    padding: 16,
  },
  textContainer: { flexDirection: "row" },
});

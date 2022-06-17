import { StyleSheet, SafeAreaView, View } from "react-native";
import React from "react";

import Avatar from "@components/Avatar";
import Text from "@components/Text";
import ErrorMessage from "@components/ErrorMessage";
import Loading from "@components/Loading";

import { useCharacterData } from "@api";

const CharacterDetail = ({ route }) => {
  const { id } = route.params;
  const { status, data: character, error } = useCharacterData(id);

  if (status === "loading") {
    return <Loading />;
  } else if (status === "error") {
    return <ErrorMessage message={error.message} />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Avatar
          size={200}
          rounded={200}
          imageProps={{
            image: character.image,
          }}
        />
      </View>
      <View style={styles.characterDetail}>
        <View style={styles.row}>
          <View style={styles.textContainer}>
            <Text weight="bold" color="#D6D5A8">
              İsmi :{" "}
            </Text>
            <Text>{character.name}</Text>
          </View>
          <View style={styles.textContainer}>
            <Text align="center" weight="bold" color="#D6D5A8">
              Yaşadığı Yer :{" "}
            </Text>
            <Text align="center">{character.location.name}</Text>
          </View>
        </View>

        <View style={styles.row}>
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
            <Text align="center">{character.species}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.textContainer}>
            <Text weight="bold" color="#D6D5A8">
              Durumu :{" "}
            </Text>
            <Text>{character.status}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CharacterDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B2430",
  },
  textContainer: {
    backgroundColor: "#1B2430",
    flex: 1,
    margin: 8,
    padding: 16,
    borderRadius: 16,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarContainer: {
    marginTop: 16,
    alignItems: "center",
  },
  characterDetail: {
    flex: 1,
    paddingHorizontal: 25,
    paddingVertical: 50,
    backgroundColor: "#51557E",
    marginTop: 16,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
  },
});

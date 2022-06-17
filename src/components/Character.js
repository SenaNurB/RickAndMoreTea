import { StyleSheet, View, TouchableOpacity } from "react-native";
import React from "react";

import Avatar from "./Avatar";
import Loading from "./Loading";
import Text from "./Text";
import ErrorMessage from "@components/ErrorMessage";

import { useCharacterData } from "@api";

const Character = ({ id, navigation }) => {
  const { status, data: character, error } = useCharacterData(id);

  const handleClick = () => {
    navigation.navigate("Character Detail", { id });
  };

  if (status === "loading") {
    return <Loading />;
  } else if (status === "error") {
    return <ErrorMessage message={error.message} />;
  }
  return (
    <TouchableOpacity style={styles.characterButton} onPress={handleClick}>
      <Avatar
        size={90}
        rounded={90}
        imageProps={{
          image: character.image,
        }}
      />
      <View style={styles.nameContainer}>
        <Text align="center">{character.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Character;

const styles = StyleSheet.create({
  characterButton: {
    width: "45%",
    margin: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  nameContainer: {
    width: "100%",
    alignItems: "center",
  },
});

import { StyleSheet, SafeAreaView, View, FlatList } from "react-native";
import React from "react";

import Loading from "@components/Loading";
import Text from "@components/Text";
import EpisodeCard from "@components/EpisodeCard";
import Character from "@components//Character";
import ErrorMessage from "@components/ErrorMessage";

import Colors from "../styles/Colors";

import { useEpisode } from "@api";

const EpisodeScreen = ({ route, navigation }) => {
  const { id } = route.params;
  const {
    status: episodeStatus,
    data: episode,
    error: episodeError,
  } = useEpisode(id);

  if (episodeStatus === "loading") {
    return <Loading />;
  } else if (episodeStatus === "error") {
    return <ErrorMessage message={episodeError.message} />;
  }

  const ids = episode.characters.map((character, index) => {
    const myArray = character.split("/");
    return myArray[5];
  });

  const characters = ids.map((id, index) => {
    return id;
  });

  const renderItem = ({ item }) => {
    return <Character id={item} navigation={navigation} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginTop: 16 }}>
        <Text weight="bold" size={24} align="center">
          {episode.name}
        </Text>
      </View>

      <View style={styles.detailContainer}>
        <EpisodeCard
          name={episode.name}
          episode={episode.episode}
          date={episode.air_date}
          id={episode.id}
        />
        <Text style={styles.textHeader}>Bölümdeki Karakterler :</Text>
      </View>

      <FlatList
        data={characters}
        renderItem={renderItem}
        keyExtractor={(item) => item}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

export default EpisodeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    padding: 16,
  },
  detailContainer: {
    paddingHorizontal: 16,
  },
  textHeader: {
    marginVertical: 16,
    color: Colors.textColor,
    fontWeight: "bold",
    fontSize: 20,
  },
});

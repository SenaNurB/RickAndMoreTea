import { StyleSheet, SafeAreaView, View, FlatList } from "react-native";
import React from "react";

import useEpisode from "../api/useEpisode";

import Loading from "../components/Loading";
import Text from "../components/Text";
import EpisodeCard from "../components/EpisodeCard";
import Character from "../components/Character";

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
    return <Text style={styles.error}>{episodeError.message}</Text>;
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

      <View style={{ paddingHorizontal: 16 }}>
        <EpisodeCard
          name={episode.name}
          episode={episode.episode}
          date={episode.air_date}
          id={episode.id}
        />
        <Text
          style={{
            marginVertical: 16,
            color: "#D6D5A8",
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          Bölümdeki Karakterler :
        </Text>
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
    backgroundColor: "#1B2430",
    padding: 16,
  },
});

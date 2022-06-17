import { StyleSheet, SafeAreaView, View, ScrollView } from "react-native";
import React from "react";

import Text from "@components/Text";
import EpisodeCard from "@components/EpisodeCard";
import Loading from "@components/Loading";
import ErrorMessage from "@components/ErrorMessage";

import Colors from "../styles/Colors";

import { useEpisode } from "@api";

const HomeScreen = ({ navigation }) => {
  const { status, data: episodes, error } = useEpisode("");

  if (status === "loading") {
    return <Loading />;
  } else if (status === "error") {
    return <ErrorMessage message={error.message} />;
  }

  const episodeCards = episodes.results.map((episode, index) => {
    return (
      <EpisodeCard
        name={episode.name}
        episode={episode.episode}
        date={episode.air_date}
        id={episode.id}
        navigation={navigation}
        key={index}
        type="summary"
      />
    );
  });
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <Text align="center" weight="bold" size={20}>
          Rick And Morty Episodes
        </Text>
        {episodeCards}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    padding: 16,
  },
});

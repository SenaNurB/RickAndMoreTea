import { StyleSheet, Text, SafeAreaView } from "react-native";
import React from "react";

import useEpisode from "../api/useEpisode";

const EpisodeScreen = ({ route, navigation }) => {
  const { id } = route.params;
  const { status, data: episode, error } = useEpisode(id);
  console.log(episode);
  return (
    <SafeAreaView style={styles.container}>
      <Text>HomeScreen</Text>
    </SafeAreaView>
  );
};

export default EpisodeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

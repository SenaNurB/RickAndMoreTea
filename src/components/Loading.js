import React from "react";
import { ActivityIndicator, StyleSheet } from "react-native";

import Colors from "../styles/Colors";

const Loading = () => (
  <ActivityIndicator style={styles.container} color="white" />
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Loading;

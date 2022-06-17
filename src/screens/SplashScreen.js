import { StyleSheet, View, Image } from "react-native";
import React, { useEffect } from "react";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Home");
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../images/rickAndMortyyy.png")}
        style={styles.image}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1B2430",
  },
  image: {
    width: 300,
    height: 300,
  },
});

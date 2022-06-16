import React from "react";
import { StyleSheet } from "react-native";
import { Avatar as RNEAvatar } from "@rneui/themed";
import FastImage from "react-native-fast-image";

const AvatarImage = ({ image }) => {
  return (
    <FastImage
      source={{ uri: image }}
      style={styles.imageContainer}
      resizeMode={FastImage.resizeMode.cover}
    />
  );
};

const Avatar = ({
  source,
  style,
  imageProps,
  activeOpacity,
  onPress,
  size,
  rounded,
  ...props
}) => {
  return (
    <RNEAvatar
      activeOpacity={activeOpacity}
      source={source}
      avatarStyle={style}
      rounded={rounded}
      onPress={onPress}
      size={size}
      imageProps={imageProps}
      ImageComponent={AvatarImage}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    height: "100%",
  },
});

export default Avatar;

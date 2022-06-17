module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "@env": "./env.config.js",
          "@api": "./src/api",
          "@components": "./src/components",
          "@navigation": "./src/navigation",
          "@providers": "./src/providers",
          "@screens": "./src/screens",
        },
      },
    ],
  ],
};

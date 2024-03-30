import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
} from "react-native";
import React from "react";
import {
  useFonts,
  Roboto_300Light,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import * as assets from "../../assets";
import * as CONSTANT from "../../utils/constant";

const Home = () => {
  const [fontsLoaded, fontError] = useFonts({
    Roboto_300Light,
    Roboto_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.page}>
      <ImageBackground style={styles.background} source={assets.HomeHeader}>
        <View>
          <Text style={styles.welcome}>Selamat Datang,</Text>
          <Text style={styles.name}>Meril Lia</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Home;
const widthWindow = Dimensions.get("window").width;
const heightWindow = Dimensions.get("window").height;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  background: {
    width: widthWindow,
    height: heightWindow * 0.27,
    paddingTop: 36,
    paddingLeft: 32,
  },
  welcome: {
    color: CONSTANT.TEXT_PRIMARY_COLOR,
    fontFamily: "Roboto_300Light",
    fontSize: 18,
  },
  name: {
    color: CONSTANT.TEXT_SECONDARY_COLOR,
    fontFamily: "Roboto_700Bold",
    fontSize: 18,
  },
});

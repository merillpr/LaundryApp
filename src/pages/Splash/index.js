import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  StatusBar,
} from "react-native";
import * as React from "react";
import * as assets from "../../assets";

const Splash = ({ navigation }) => {
  React.useEffect(() => {
    setTimeout(() => {
      navigation.replace("MainApp");
    }, 3000);
  }, [navigation]);
  return (
    <>
      <StatusBar hidden={true} />
      <ImageBackground
        source={assets.SplashBackground}
        style={styles.background}
      >
        <Image source={assets.Logo} style={styles.logo} />
      </ImageBackground>
    </>
  );
};

export default Splash;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 198,
    height: 221,
  },
});

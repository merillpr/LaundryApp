import {
  Image,
  ImageComponent,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import * as React from "react";
import * as Icons from "../../assets/icons/index";
import * as CONSTANT from "../../utils/constant";

const TabItem = ({ label, isFocused, onPress, onLongPress }) => {
  let icon = null;
  switch (label) {
    case "Home":
      icon = isFocused ? Icons.IconHomeActive : Icons.IconHome;
      break;
    case "Order":
      icon = isFocused ? Icons.IconOrderActive : Icons.IconOrder;
      break;
    case "Account":
      icon = isFocused ? Icons.IconAccountActive : Icons.IconAccount;
      break;
    default:
      icon = Icons.IconHome;
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}
    >
      <Image source={icon} style={styles.icon} />
      <Text style={styles.label(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: CONSTANT.SECONDARY_COLOR,
    paddingTop: 8,
  },
  icon: {
    width: 25,
    height: 25,
  },
  label: (isFocused) => ({
    fontSize: 14,
    color: isFocused ? CONSTANT.ACTIVE_COLOR : CONSTANT.INACTIVE_COLOR,
  }),
});

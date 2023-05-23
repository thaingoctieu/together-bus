import React, { createContext, useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Modal,
  ScrollView,
} from "react-native";

function Weather() {
  return (
    <View style={styles.container}>
      <Text>Payment</Text>
    </View>
  );
}

export default Weather;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

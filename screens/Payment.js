import React, { createContext, useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Modal,
  ScrollView,
  ImageBackground,
} from "react-native";
import { Octicons, MaterialIcons } from "@expo/vector-icons";

function Payment() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Octicons name="arrow-left" size={35} color="black" onPress={"cc"}/>
        <Text style={styles.text}>Thanh toán</Text>
      </View>
      <View style={styles.orderInfo}>
        <ImageBackground 
        source={require("../assets/card.png")}
        style={styles.card}
        >
        <Text style={{color: "#fff", fontSize: 20, fontWeight: 500, marginTop: 16, marginLeft: 16}}>Thanh toán</Text>
        </ImageBackground>
      </View>
    </View>
  );
}

export default Payment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 42,
    paddingHorizontal: 18
  },
  header: {
    flexDirection: "row",
  },
  text: {
    marginLeft: 10,
    fontSize: 18,
  },
  orderInfo: {
    paddingTop: 16,
    flex: 1,
  },
  card: {
    // flex:1,
    // resizeMode: "cover",
    width: "100%",
    height: 240,
    overflow: 'hidden',
    borderRadius: 32, 
  }
});

import React, { createContext, useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Modal,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  ScrollViewBase,
} from "react-native";
import { Octicons} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { BusInfo } from "../components";

function SuccessfulPayment() {
  const navigation = useNavigation();

  const data = {
    date: "20/10/2021",
    totalTicket: 3,
    totalCost: 30000,
  }

  

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

  return (
    
    <View style={styles.container}>
      <View style={styles.header}>
        <Octicons name="x" 
          size={35} 
          color="black" 
          onPress={() => {
          navigation.pop();
        }}/>
        <Text style={styles.text}>Thanh toán</Text>
      </View>
      
      </View>
  );
}

export default SuccessfulPayment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 42,
    paddingHorizontal: 18,

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
  },
  card: {
    // flex:1,
    // resizeMode: "cover",
    width: "100%",
    height: 240,
    overflow: 'hidden',
    borderRadius: 32
  },
  infoText: {
    color: "#fff", 
    fontSize: 16, 
    fontWeight: 500, 
    paddingHorizontal:16, 
    paddingVertical: 8
  },
  btn: {
    position:'absolute',
    bottom:20,
    right:20,
    alignSelf:'flex-end',
    borderRadius: 50,
    padding: 18,
    backgroundColor: "#FF5F5F", // for ios
    borderRadius: 10,
    width: 150,
    alignItems: "center",
    marginTop: 20,
    shadowColor: '#000',  
    elevation: 6,  
  },
});

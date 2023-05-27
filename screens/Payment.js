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

function Payment() {
  const navigation = useNavigation();

  const data = {
    date: "20/10/2021",
    totalTicket: 3,
    totalCost: 30000,
  }

  const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  
];

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

  return (
    
    <View style={styles.container}>
      <View style={styles.header}>
        <Octicons name="arrow-left" 
          size={35} 
          color="black" 
          onPress={() => {
          navigation.pop();
        }}/>
        <Text style={styles.text}>Thanh toán</Text>
      </View>
      <View style={styles.orderInfo}>
        <ImageBackground 
        source={require("../assets/card.png")}
        style={styles.card}
        >
        <Text style={{color: "#fff", fontSize: 20, fontWeight: 500, marginTop: 20 , marginLeft: 16, marginBottom: 8}}>Thông tin đơn hàng</Text>
        <View style={{flexDirection:"row", justifyContent: "space-between"}}>
          <Text style = {styles.infoText}>Ngày mua:</Text>
          <Text style = {styles.infoText}>{data.date}</Text>
        </View>
        <View style={{flexDirection:"row", justifyContent: "space-between"}}>
          <Text style = {styles.infoText}>Tổng số vé:</Text>
          <Text style = {styles.infoText}>{data.totalTicket}</Text>
        </View>
        <View style={{flexDirection:"row", justifyContent: "space-between"}}>
          <Text style = {styles.infoText}>Tổng tiền:</Text>
          <Text style = {styles.infoText}>{data.totalCost+" VNĐ"}</Text>
        </View>
        </ImageBackground>
      </View>
      <View >
      <View style={{height:'90%', paddingVertical: 20}}>
        <FlatList
          data={DATA}
          renderItem={({item}) => <BusInfo />}
          keyExtractor={item => item.id}
        />
      </View>
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          navigation.push("PaymentMethod");
        }}
      >
        <Text
          style={{
            fontWeight: 500,
            fontSize: 13,
            color: "#fff", // for ios
          }}
        >
          THANH TOÁN
        </Text>
        </TouchableOpacity>
      </View>
  );
}

export default Payment;

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

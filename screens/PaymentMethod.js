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
  ScrollView,
  Image
} from "react-native";
import { Octicons} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { BusTicket} from "../components";

function PaymentMethod() {
  const navigation = useNavigation();

  const data = {
    date: "20/10/2021",
    totalTicket: 3,
    totalCost: 30000,
  }

  const DATA = [
    {
      id: 1,
      busname: "Tuyến xe 08",
      route: "Bến xe buýt Quận 8 - Đại học Quốc gia",
      time: "04:40 - 20:30",
      price: "7k VND",
      fav: false,
    },
    {
      id: 2,
      busname: "Tuyến xe 01",
      route: "Bến xe buýt Quận 8 - Đại học Quốc gia",
      time: "04:40 - 20:30",
      price: "7k VND",
      fav: true,
    },
    {
      id: 3,
      busname: "Tuyến xe 03",
      route: "Bến xe buýt Quận 8 - Đại học Quốc gia",
      time: "04:40 - 20:30",
      price: "7k VND",
      fav: true,
    },
    {
      id: 4,
      busname: "D4",
      route: "Bến xe buýt Quận 8 - Đại học Quốc gia",
      time: "04:40 - 20:30",
      price: "7k VND",
      fav: false,
    },
    {
      id: 5,
      busname: "D4",
      route: "Bến xe buýt Quận 8 - Đại học Quốc gia",
      time: "04:40 - 20:30",
      price: "7k VND",
      fav: false,
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
      <ScrollView>
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
      {DATA.map((dt, idx) => (
            <BusTicket info={dt} key={idx} />
      ))}
      <View>
            <View style={{paddingTop: 16}}>
              <Text style={{fontSize:16}}>Phương thức thanh toán</Text>
            </View>
            <View style={{flexDirection: "row", justifyContent: "space-between", paddingVertical: 16,}}>
              <View>
                <Image source={require("../assets/momo.png")} style={styles.logo}></Image>
              </View>
              <View>
                <Image source={require("../assets/Logo-ZaloPay-Square.webp")} style={styles.logo}></Image>
              </View>
              <View>
                <Image source={require("../assets/VCB.png")} style={styles.logo}></Image>
              </View>
              <View>
                <Image source={require("../assets/OCB.png")} style={styles.logo}></Image>
              </View>
            </View>
      </View>
      <View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            navigation.push("SuccessfulPayment");
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
      </ScrollView>
    </View>
  );
}

export default PaymentMethod;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 42,
    paddingHorizontal: 18,
    paddingBottom: 18,
    flexDirection:"column"
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
    borderRadius: 50,
    padding: 18,
    backgroundColor: "#FF5F5F", // for ios
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    marginTop: 20,
    
  },
  logo: {
    width: 68,
    height: 68,
    borderRadius: 20,
  }
});

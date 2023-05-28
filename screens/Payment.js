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
} from "react-native";
import { Octicons} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { AntDesign} from "@expo/vector-icons";
import { BusInfo, BusTicket } from "../components";
// import moment from "moment-timezone";
import moment from 'moment';
function Payment() {
  const navigation = useNavigation();
  
  // const dataCard = {
  //   date: "20/10/2021",
  //   totalTicket: 3,
  //   totalCost: 30000,
  // }

  const DATA = [
    {
      id: 1,
      busname: "Tuyến xe 08",
      busNo: "08",
      route: "Bến xe buýt Quận 8 - Đại học Quốc gia",
      time: "04:40 - 20:30",
      price: 7,
    },
    {
      id: 2,
      busname: "Tuyến xe 01",
      busNo: "01",
      route: "Bến xe buýt Quận 8 - Đại học Quốc gia",
      time: "04:40 - 20:30",
      price: 7,
    },
    {
      id: 3,
      busname: "Tuyến xe 03",
      busNo: "03",
      route: "Bến xe buýt Quận 8 - Đại học Quốc gia",
      time: "04:40 - 20:30",
      price: 6,
    },
    {
      id: 4,
      busname: "D4",
      busNo: "05",
      route: "Bến xe buýt Quận 8 - Đại học Quốc gia",
      time: "04:40 - 20:30",
      price: 7,
    },
  ];
  
  const [data, setData] = useState(DATA);
  const [dataCard, setDataCard] = useState({
    date: moment().format('L'),
    totalTicket: data.length,
    totalCost: data.reduce((total, item) => total + parseInt(item.price), 0)
  });
  const handleDeleteTicket = (id) => {
    setData((prevData) => {
      return prevData.filter((item) => item.id != id);
    });
    setDataCard((prevData) => ({ ...prevData, ['totalTicket']: prevData.totalTicket - 1, ['totalCost']: prevData.totalCost - data[id].price}));
  }

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
          <Text style = {styles.infoText}>{dataCard.date}</Text>
        </View>
        <View style={{flexDirection:"row", justifyContent: "space-between"}}>
          <Text style = {styles.infoText}>Tổng số vé:</Text>
          <Text style = {styles.infoText}>{dataCard.totalTicket}</Text>
        </View>
        <View style={{flexDirection:"row", justifyContent: "space-between"}}>
          <Text style = {styles.infoText}>Tổng tiền:</Text>
          <Text style = {styles.infoText}>{dataCard.totalCost+",000 VNĐ"}</Text>
        </View>
        </ImageBackground>
      </View>
      {/* <View > */}
      {/* <View style={{height:'90%', paddingVertical: 20}}> */}
        {/* <FlatList
          data={DATA}
          renderItem={({ item }) => <BusTicket info={item} />}
          keyExtractor={(item) => item.id}
        /> */}
        <ScrollView style={{paddingBottom: 60}}>
          {data.map((dt, idx) => (
              <View style={{flexDirection:'row', alignItems: "center", justifyContent: "center"}} key={idx} >
                <BusTicket info={dt}/>
                <AntDesign
                  onPress={() => handleDeleteTicket(dt.id)}
                  name="closecircle"
                  size={20}
                  color="#FF5F5F"
                />
              </View>
          ))}
        </ScrollView>
      {/* </View> */}
      {/* </View> */}
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

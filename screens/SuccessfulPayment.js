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
  Image
} from "react-native";
import { Octicons} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function SuccessfulPayment() {
  const navigation = useNavigation();

  const data = {
    name: "Hoa Nguyen",
    ID: "XTH018373032",
    totalCost: 27,
  }



  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Octicons name="x" 
          size={35} 
          color="black" 
          onPress={() => {
          navigation.navigate('UserIn',{screen:'Home'});
        }}/>
      </View>

      <View style={styles.info}>
        <Image source={require("../assets/tick-icon.png")} style={{width: 120, height:120, alignSelf: 'center'}}></Image>
        <Text style={{
          color: '#fff', 
          fontSize:19, padding: 18, 
          borderBottomWidth:1,
          borderBottomColor: '#fff',
          alignSelf: 'center',
          marginBottom: 20,
        }}>Giao dịch thành công
        </Text>
        <View style={{flexDirection:"row", justifyContent: "space-between"}}>
          <Text style = {styles.titleText}>Họ và tên:</Text>
          <Text style = {styles.infoText}>{data.name}</Text>
        </View>
        <View style={{flexDirection:"row", justifyContent: "space-between"}}>
          <Text style = {styles.titleText}>ID giao dịch:</Text>
          <Text style = {styles.infoText}>{data.ID}</Text>
        </View>
        <View style={{flexDirection:"row", justifyContent: "space-between"}}>
          <Text style = {styles.titleText}>Số tiền:</Text>
          <Text style = {styles.infoText}>{data.totalCost+",000 VNĐ"}</Text>
        </View>
      </View>

      <View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            navigation.navigate('UserIn',{screen:'Home'});
        }}>
          <Text
            style={{
              fontWeight: 500,
              fontSize: 13,
              color: "#fff", // for ios
            }}
          >
            XONG
          </Text>
        </TouchableOpacity>
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
    paddingHorizontal: 32,
    // paddingVertical: 30

  },
  info: {
    // marginHorizontal: 30,
    marginTop: 60,
    width: '100%',
    // height: 400,
    backgroundColor: "#214083",
    paddingTop: 32,
    paddingHorizontal: 16,
    paddingBottom: 52,
    borderRadius: 20,
  },
  titleText: {
    color: "#fff", 
    fontSize: 13, 
    fontWeight: 500, 
    paddingHorizontal:16, 
    paddingVertical: 24,
    fontWeight: 300,
    opacity: 0.5,
  },
  infoText: {
    color: "#fff", 
    fontSize: 13, 
    fontWeight: 500, 
    paddingHorizontal:16, 
    paddingVertical: 24,
    fontWeight: 400,
  },
  btn: {
    marginTop: 56,
    borderRadius: 50,
    padding: 18,
    backgroundColor: "#FF5F5F", // for ios
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    
  },
  
});

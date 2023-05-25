import React, { createContext, useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  ToastAndroid,
  Image,
  TouchableOpacity,
} from "react-native";
import { Octicons, MaterialIcons } from "@expo/vector-icons";

export default function FunctionBtn(props) {
  let color = "";
  let icon = <Octicons name="search" size={35} color="black" />;
  let fname = "";

  switch (props.name) {
    case "findbus":
      icon = <Octicons name="search" size={35} />;
      fname = "Tìm xe";
      color = "#D8CDF1";
      break;
    case "findroute":
      icon = <MaterialIcons name="my-location" size={35} />;
      fname = "Tìm đường";
      color = "#FEBBBA";
      break;
    case "busstop":
      icon = <Octicons name="location" size={35} />;
      fname = "Điểm dừng";
      color = "#99EE9C";
      break;
    case "payment":
      icon = <MaterialIcons name="payment" size={35} />;
      fname = "Thanh toán";
      color = "#F5E178";
      break;
    default:
      console.log("occurs some mistakes");
  }

  return (
    <TouchableOpacity style={{margin: 12}}>
      <View
        style={{
          backgroundColor: color,
          borderRadius: 10,
          width: 65,
          height: 65,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {icon}
      </View>
      <Text style={{ alignSelf: "center", marginTop: 10, fontSize: 12 }}>
        {fname}
      </Text>
    </TouchableOpacity>
  );
}

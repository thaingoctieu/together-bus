import React, { createContext, useState, useEffect, useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Octicons, MaterialIcons } from "@expo/vector-icons";

export default function Recent(props) {
  const info = props.info;
  let color = "";
  let icon = "";

  switch (info.fname) {
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
    <TouchableOpacity
      onPress={() => console.log("not handled yet")}
      style={{ margin: 12, flexDirection: "row", alignItems: "center" }}
    >
      <View
        style={{
          backgroundColor: color,
          borderRadius: 65,
          width: 65,
          height: 65,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {icon}
      </View>
      <View style={{ marginLeft: 15, width: "56%" }}>
        <Text
          style={{
            marginTop: 10,
            fontSize: 16,
            fontWeight: 500,
            marginBottom: 5,
          }}
        >
          {info.title}
        </Text>
        <Text style={{ color: "#9CAEB8" }}>{info.details}</Text>
      </View>
      <Text style={{ fontWeight: 500 }}>02/02/2023</Text>
    </TouchableOpacity>
  );
}

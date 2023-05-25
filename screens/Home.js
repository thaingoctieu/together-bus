import React, {
  useState,
  useEffect,
  useContext,
  ScreenWitdh,
  ScreenHeight,
} from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  ImageBackground,
} from "react-native";
import { FunctionBtn, Recent } from "../components/index";

function Home() {
  const data = [
    {
      fname: "findbus",
      title: "Xe 08",
      details: "Bến xe Quận 8 - ĐHQG",
      date: "24 Mar 2022",
    },
    {
      fname: "findbus",
      title: "Xe 50",
      details: "Bến xe Quận 8 - ĐHQG",
      date: "24 Mar 2022",
    },
    {
      fname: "busstop",
      title: "ĐH Bach Khoa cơ sở 1",
      details: "Lý Thường Kiệt Q.10 TP.HCM",
      date: "24 Mar 2022",
    },
  ];

  return (
    <ScrollView>
      <ImageBackground
        source={require("../assets/background.png")}
        resizeMode="cover"
        style={styles.container}
      >
        <View style={styles.header}>
          <View style={styles.avatar}></View>
          <View style={styles.user}>
            <Text style={{ fontSize: 16, color: "#fff" }}>Xin chào, </Text>
            <Text style={{ fontSize: 20, color: "#fff", fontWeight: 500 }}>
              User Name
            </Text>
          </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>Chức năng</Text>
          <View style={styles.fwrapper}>
            <FunctionBtn name="findbus" />
            <FunctionBtn name="findroute" />
            <FunctionBtn name="busstop" />
            <FunctionBtn name="payment" />
          </View>
          <View style={styles.map}></View>
          <Text style={styles.title}>Tìm kiếm gần đây</Text>
          {data.map((dt) => (
            <Recent info={dt} />
          ))}
        </View>
      </ImageBackground>
    </ScrollView>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#214083",
    height: ScreenHeight,
  },
  header: {
    // backgroundColor: "#214083",
    height: 160,
    padding: 30,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  content: {
    backgroundColor: "#fff",
    flexWrap: "wrap",
    padding: 15,
    paddingTop: 40,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  fwrapper: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  title: {
    fontSize: 22,
    marginLeft: 12,
    marginBottom: 10,
  },
  map: {
    width: ScreenWitdh,
    height: 160,
    backgroundColor: "#000",
    borderRadius: 20,
    margin: 12,
    marginBottom: 20,
  },
  avatar: {
    backgroundColor: "#fff",
    width: 60,
    height: 60,
    borderRadius: 60,
  },
  user: {
    marginLeft: 20,
    justifyContent: "space-evenly",
  },
});

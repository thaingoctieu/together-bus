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
          {data.map((dt, idx) => (
            <Recent info={dt} key={idx} />
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
    flex: 1,
    backgroundColor: "#fff",
    flexWrap: "wrap",
    padding: 20,
    paddingTop: 40,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  fwrapper: {
    paddingBottom: 20,
    paddingTop: 8,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  title: {
    fontSize: 20,
    paddingBottom: 10,
  },
  map: {
    flex: 1,
    width: "100%",
    height: 160,
    backgroundColor: "#000",
    borderRadius: 20,
    // paddingVertical: 20 ,
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

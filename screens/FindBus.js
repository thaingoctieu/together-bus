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
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from "react-native";

import { Octicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Search, BusInfo } from "../components";
import { getAllRoutes } from "../services/Routes";

export default function FindBus() {
  const navigation = useNavigation();
  const DATA = [
    {
      id: 1,
      busname: "Tuyến xe 08",
      route: "Bến xe buýt Quận 8 - Đại học Quốc gia",
      time: "04:40 - 20:30",
      price: 7,
      fav: false,
    },
    {
      id: 2,
      busname: "Tuyến xe 01",
      route: "Bến xe buýt Quận 8 - Đại học Quốc gia",
      time: "04:40 - 20:30",
      price: 7,
      fav: true,
    },
    {
      id: 3,
      busname: "Tuyến xe 03",
      route: "Bến xe buýt Quận 8 - Đại học Quốc gia",
      time: "04:40 - 20:30",
      price: 7,
      fav: true,
    },
    {
      id: 4,
      busname: "D4",
      route: "Bến xe buýt Quận 8 - Đại học Quốc gia",
      time: "04:40 - 20:30",
      price: 7,
      fav: false,
    },
  ];
  const [data, setData] = useState(DATA);

  const [all, setAll] = useState(true);

  useEffect(() => {
    // fetch data
    getAllRoutes().then((res) => {
      let newData = res.data.routes.map((dt, index) => {
        return {
          id: index,
          busname: "Tuyến xe " + dt.busNo,
          busNo: dt.busNo,
          route: dt.name,
          time: dt.operatingTime,
          price: dt.price + " VND",
          fav: false,
        };
      });
      setData(newData);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ImageBackground
          source={require("../assets/header.png")}
          style={styles.img}
        >
          <View
            style={{
              flexDirection: "row",
              paddingTop: 50,
              alignItems: "center",
              paddingBottom: 25,
            }}
          >
            <Octicons
              style={{ paddingLeft: 20 }}
              name="arrow-left"
              size={35}
              color="white"
              onPress={() => navigation.pop()}
            />
            <Text style={styles.title}>Chọn tuyến xe</Text>
          </View>
          <Search />
          <View
            style={{
              paddingVertical: 20,
              flexDirection: "row",
              //   justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => setAll(true)}
              style={{
                width: "50%",
                borderRightWidth: 2,
                borderRightColor: "#fff",
              }}
            >
              <Text style={styles.tab}>TẤT CẢ</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setAll(false)}
              style={{ width: "50%" }}
            >
              <Text style={styles.tab}>YÊU THÍCH</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
      <FlatList
        style={{ padding: 20 }}
        data={all === true ? data : data.filter((dt) => dt.fav === !all)}
        renderItem={({ item }) => <BusInfo info={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#214083",
    height: ScreenHeight,
  },
  header: {},
  title: {
    paddingLeft: 20,
    color: "white",
    fontSize: 20,
    fontWeight: 500,
  },
  img: {
    width: "100%",
    height: 220,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    overflow: "hidden",
  },
  tab: {
    fontSize: 18,
    fontWeight: 600,
    color: "#fff",
    alignSelf: "center",
  },
});

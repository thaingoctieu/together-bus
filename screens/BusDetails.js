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
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Octicons } from "@expo/vector-icons";

function Detail(props) {
  const tab = props.tab;
  const info = {
    bus_no: "08",
    name: "Bến xe buýt Quận 8 -  Đại học Quốc gia",
    time: "04:40 - 20:30",
    price: "7,000 VNĐ",
    price_dis: "3,000 VNĐ",
    price_30: "157,500 VNĐ",
    type: "Phổ thông - Có trợ giá",
    duration: "80 - 90 phút",
    num: "280 chuyến/ngày",
  };
  return (
    <View
      style={{
        borderBottomWidth: 1,
        borderColor: "#D9D9D9",
        padding: 20,
      }}
    >
      {tab["tab1"] === "tab1" ? (
        <Text style={{ fontWeight: 500 }}>{props.item.time}</Text>
      ) : tab["tab2"] === "tab2" ? (
        <Text style={{ fontWeight: 500 }}>{props.item.busstop}</Text>
      ) : (
        <ScrollView>
          <View style={{ flexDirection: "row", paddingVertical: 5 }}>
            <Text style={{ fontWeight: 500 }}>Tuyến số: </Text>
            <Text>{info.bus_no}</Text>
          </View>

          <View style={{ flexDirection: "row", paddingVertical: 5 }}>
            <Text style={{ fontWeight: 500 }}>Tên tuyến: </Text>
            <Text>{info.name}</Text>
          </View>

          <View style={{ flexDirection: "row", paddingVertical: 5 }}>
            <Text style={{ fontWeight: 500 }}>Thời gian hoạt động: </Text>
            <Text>{info.time}</Text>
          </View>

          <View style={{ flexDirection: "row", paddingVertical: 5 }}>
            <Text style={{ fontWeight: 500 }}>Giá vé: </Text>
            <Text>{info.price}</Text>
          </View>

          <View style={{ flexDirection: "row", paddingVertical: 5 }}>
            <Text style={{ fontWeight: 500 }}>
              Giá vé (Học sinh/sinh viên):{" "}
            </Text>
            <Text>{info.price_dis}</Text>
          </View>

          <View style={{ flexDirection: "row", paddingVertical: 5 }}>
            <Text style={{ fontWeight: 500 }}>Giá vé tập (30 vé)): </Text>
            <Text>{info.price_30}</Text>
          </View>

          <View style={{ flexDirection: "row", paddingVertical: 5 }}>
            <Text style={{ fontWeight: 500 }}>Loại tuyến: </Text>
            <Text>{info.type}</Text>
          </View>

          <View style={{ flexDirection: "row", paddingVertical: 5 }}>
            <Text style={{ fontWeight: 500 }}>Thời gian chạy: </Text>
            <Text>{info.type}</Text>
          </View>

          <View style={{ flexDirection: "row", paddingVertical: 5 }}>
            <Text style={{ fontWeight: 500 }}>Số chuyến: </Text>
            <Text>{info.type}</Text>
          </View>
        </ScrollView>
      )}
    </View>
  );
}

export default function BusDetails() {
  const [tab, setTab] = useState({
    tab1: "tab1",
    tab2: "tab",
    tab3: "tab",
  });
  const [tabname, setTabname] = useState({
    tab1: "tabnamea",
    tab2: "tabname",
    tab3: "tabname",
  });

  const DATA = [
    {
      id: 1,
      time: "04:40",
      busstop: "Bến xe buýt Quận 8",
    },
    {
      id: 2,
      time: "04:45",
      busstop: "Bùi Minh Trực",
    },
    {
      id: 3,
      time: "04:50",
      busstop: "Cầu Nhị Thiên Đường",
    },
    {
      id: 4,
      time: "04:56",
      busstop: "Tùng Thiện Vương",
    },
    {
      id: 5,
      time: "05:00",
      busstop: "Chợ Xóm Củi",
    },
    {
      id: 6,
      time: "05:07",
      busstop: "Bưu điện Quận 5",
    },
    {
      id: 7,
      time: "05:14",
      busstop: "Rạp Đại Quang",
    },
    {
      id: 8,
      time: "05:20",
      busstop: "Bến xe buýt Quận 8",
    },
    {
      id: 9,
      time: "05:25",
      busstop: "Bến xe buýt Quận 8",
    },
    {
      id: 10,
      time: "05:30",
      busstop: "Bến xe buýt Quận 8",
    },
  ];

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
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
          <Text style={styles.title}>Tuyến xe 08</Text>
        </View>
      </ImageBackground>
      <ImageBackground
        style={styles.map}
        source={require("../assets/busroute.png")}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#214083",
            borderRadius: 10,
            padding: 10,
            width: 70,
            position: 'absolute',
            right: 20,
            bottom: 20,
          }}
        >
          <Text style={{ color: "#fff", fontSize: 13, fontWeight: 500 }}>
            ĐẶT VÉ
          </Text>
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.details}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 20,
          }}
        >
          <Text style={styles.routename}>
            Bến xe buýt Quận 8 - Đại học Quốc gia
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: "#FF5F5F",
              borderRadius: 10,
              padding: 10,
            }}
          >
            <Text style={{ color: "#fff", fontSize: 13, fontWeight: 500 }}>
              LƯỢT ĐI
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity
            onPress={() => setTab({ tab1: "tab1", tab2: "tab", tab3: "tab" })}
            style={styles[tab.tab1]}
          >
            <Text
              style={tab.tab1 === "tab1" ? styles.tabnamea : styles.tabname}
            >
              BIỂU ĐỒ GIỜ
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setTab({ tab1: "tab", tab2: "tab2", tab3: "tab" })}
            style={styles[tab.tab2]}
          >
            <Text
              style={tab.tab2 === "tab2" ? styles.tabnamea : styles.tabname}
            >
              TRẠM DỪNG
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setTab({ tab1: "tab", tab2: "tab", tab3: "tab3" })}
            style={styles[tab.tab3]}
          >
            <Text
              style={tab.tab3 === "tab3" ? styles.tabnamea : styles.tabname}
            >
              THÔNG TIN
            </Text>
          </TouchableOpacity>
        </View>
        {tab.tab3 === "tab3" ? (
          <Detail tab={tab} />
        ) : (
          <FlatList
            data={DATA}
            renderItem={({ item }) => <Detail item={item} tab={tab} />}
            keyExtractor={(item) => item.id}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    height: 100,
  },
  title: {
    paddingLeft: 20,
    color: "white",
    fontSize: 22,
    fontWeight: 500,
  },
  map: {
    flex: 3,
  },
  details: {
    flex: 4,
    paddingVertical: 20,
    backgroundColor: "#fff",
  },
  routename: {
    color: "#474545",
    fontWeight: 500,
    fontSize: 14,
  },
  tab: {
    marginVertical: 12,
    height: 50,
    width: "33.3333%",
    justifyContent: "center",
  },
  tab1: {
    marginVertical: 12,
    backgroundColor: "#214083",
    height: 50,
    width: "33.3333%",
    justifyContent: "center",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  tab2: {
    marginVertical: 12,
    backgroundColor: "#214083",
    height: 50,
    width: "33.3333%",
    justifyContent: "center",
    borderRadius: 10,
  },
  tab3: {
    marginVertical: 12,
    backgroundColor: "#214083",
    height: 50,
    width: "33.3333%",
    justifyContent: "center",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  tabname: {
    fontSize: 12,
    alignSelf: "center",
  },
  tabnamea: {
    fontSize: 12,
    alignSelf: "center",
    color: "#fff",
  },
});

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
  TextInput,
} from "react-native";
import MapView from "react-native-maps";
import { Octicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { BusInfo } from "../components";

function Search() {
  const [input, setInput] = useState("");

  return (
    <View>
      <View style={styles.iwrapper}>
        <Text style={{ paddingRight: 10, fontWeight: 500 }}>Đi từ</Text>
        <MaterialIcons name="my-location" size={28} color="#000" />
        <TextInput
          style={{ height: "100%", fontSize: 14, paddingLeft: 20 }}
          placeholder="[Vị trí hiện tại]"
          name="findbus"
          onChangeText={(text) => setInput(text)}
          value={input}
        />
      </View>
    </View>
  );
}

export default function FindBusStop() {
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

  const [all, setAll] = useState(true);
  const [region, setRegion] = useState({
    region: {
      latitude: 10.762622,
      longitude: 106.660172,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  });

  const onRegionChange = (region) => {
    setRegion({ region });
  };

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
            <Text style={styles.title}>Chọn tuyết xe</Text>
          </View>
          <Search />
        </ImageBackground>
      </View>
      <ImageBackground style={{flex: 1}} source={require('../assets/pinnedmap.png')}></ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#214083",
    height: ScreenHeight,
  },
  title: {
    paddingLeft: 20,
    color: "white",
    fontSize: 22,
    fontWeight: 500,
  },
  img: {
    width: "100%",
    height: 190,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    overflow: "hidden",
  },
  tab: {
    fontSize: 20,
    fontWeight: 600,
    color: "#fff",
    alignSelf: "center",
  },
  iwrapper: {
    width: "90%",
    height: 48,
    borderRadius: 30,
    backgroundColor: "#FAFAFB",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    alignSelf: "center",
  },
});

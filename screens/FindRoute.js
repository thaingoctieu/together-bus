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
import { Octicons, MaterialIcons, SimpleLineIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import DropDownPicker from "react-native-dropdown-picker";

function PickRoute() {
  const [inputs, setInputs] = useState({
    from: "",
    to: "",
  });

  const handleOnchange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };

  return (
    <View>
      <View style={styles.iwrapper}>
        <Text style={{ paddingRight: 10, fontWeight: 500 }}>Đi từ</Text>
        <MaterialIcons name="my-location" size={28} color="#000" />
        <TextInput
          style={{ height: "100%", fontSize: 14, paddingLeft: 20 }}
          placeholder="[Vị trí hiện tại]"
          name="from"
          onChangeText={(text) => handleOnchange(text, "from")}
          value={inputs.from}
        />
      </View>
      <View style={styles.iwrapper}>
        <Text style={{ paddingRight: 14, fontWeight: 500 }}>Đến</Text>
        <SimpleLineIcons name="location-pin" size={24} color="black" />
        <TextInput
          style={{ height: "100%", fontSize: 14, paddingLeft: 20 }}
          placeholder="Địa điểm đến"
          name="to"
          onChangeText={(text) => handleOnchange(text, "to")}
          value={inputs.to}
        />
      </View>
    </View>
  );
}

export default function FindRoute() {
  const navigation = useNavigation();
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
  ];

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Tối đa 1 chuyến", value: "max1" },
    { label: "Tối đa 2 chuyến", value: "max2" },
    { label: "Tối đa 3 chuyến", value: "max3" },
  ]);

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
            <Text style={styles.title}>Chọn tuyến đường</Text>
          </View>
          <PickRoute />
        </ImageBackground>
      </View>
      <ImageBackground
        style={{ flex: 1 }}
        source={require("../assets/pinnedmap.png")}
      >
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            marginTop: -72,
          }}
        >
          <DropDownPicker
            style={{ borderRadius: 40, borderWidth: 0, height: 48 }}
            containerStyle={{ width: "60%", borderColor: "#fff" }}
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
          />
          <TouchableOpacity
            style={{
              backgroundColor: "#3787FF",
              borderRadius: 10,
              paddingVertical: 19,
              paddingHorizontal: 8,
              width: 80,
            }}
          >
            <Text style={{ color: "#fff", fontSize: 10, fontWeight: 500 }}>
              TÌM ĐƯỜNG
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
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
    height: 320,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    overflow: "hidden",
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
    marginBottom: 20,
  },
});

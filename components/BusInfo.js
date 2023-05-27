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
} from "react-native";
import {
  MaterialCommunityIcons,
  EvilIcons,
  MaterialIcons,
  AntDesign,
} from "@expo/vector-icons";

export default function BusInfo(props) {
  const info = props.info;
  const [fav, setFav] = useState(info.fav);

  return (
    <View style={styles.wrapper}>
      <View style={styles.icon}>
        <MaterialCommunityIcons name="bus" size={35} color="black" />
      </View>
      <View
        style={{
          width: "70%",
        }}
      >
        <Text style={styles.busname}>{info.busname}</Text>
        <Text style={[styles.details, { paddingVertical: 2 }]}>
          {info.route}
        </Text>
        <View style={{ flexDirection: "row" }}>
          {/* time */}
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <EvilIcons name="clock" size={16} color="#011A51" />
            <Text style={styles.details}>{info.time}</Text>
          </View>
          {/* price */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              paddingLeft: 15,
            }}
          >
            <MaterialIcons name="attach-money" size={16} color="#011A51" />
            <Text style={styles.details}>{info.price}</Text>
          </View>
        </View>
      </View>

      <AntDesign
        onPress={() => setFav(!fav)}
        name={fav ? "heart" : "hearto"}
        size={20}
        color="#011A51"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#a7b5cc",
  },
  icon: {
    backgroundColor: "#CDD4D4",
    height: 65,
    width: 65,
    borderRadius: 65,
    justifyContent: "center",
    alignItems: "center",
  },
  busname: {
    fontWeight: 500,
    fontSize: 14,
    color: "#011A51",
  },
  details: {
    fontSize: 12,
    color: "#011A51",
  },
});

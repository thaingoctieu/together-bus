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
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Search() {
  const [input, setInput] = useState("");

  return (
    <View>
      <View style={styles.iwrapper}>
        <Ionicons name="search-outline" size={28} color="#c1c1c1" />
        <TextInput
          style={{ height: "100%", fontSize: 16, paddingLeft: 20 }}
          placeholder="Tìm nhanh..."
          name="findbus"
          onChangeText={(text) => setInput(text)}
          value={input}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  iwrapper: {
    width: "90%",
    height: 48,
    borderRadius: 30,
    backgroundColor: "#FAFAFB",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    alignSelf: "center",
  },
});

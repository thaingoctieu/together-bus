import React, { createContext, useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Modal,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

function Login() {
  const navigation = useNavigation();

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const [hidepw, setHidepw] = useState(true);

  const handleOnchange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };
  return (
    <View style={styles.container}>
      <View style={styles.img}>
        <Image source={require("../assets/login.png")} />
      </View>
      <Text style={styles.header}>Đăng nhập</Text>
      <Text style={styles.subscript}>Nhập email và mật khẩu tại đây</Text>
      <View style={styles.iwrapper}>
        <TextInput
          style={styles.input}
          value={inputs.email}
          placeholder="Nhập email người dùng..."
          onChangeText={(text) => handleOnchange(text, "email")}
        />
      </View>
      <View style={styles.iwrapper}>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          value={inputs.password}
          placeholder="Nhập mật khẩu..."
          name="password"
          onChangeText={(text) => handleOnchange(text, "password")}
        />
        <TextInput />
        {/* <Icon
          onPress={() => setHidepw(!hidepw)}
          name={hidepw ? "eye-outline" : "eye-off-outline"}
          style={{
            fontSize: 25,
            marginLeft: 250,
            height: 70,
            marginBottom: 50,
          }}
        /> */}
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          navigation.navigate("UserIn");
        }}
      >
        <Text
          style={{
            fontWeight: 500,
            fontSize: 20,
            color: "#fff", // for ios
          }}
        >
          ĐĂNG NHẬP
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 35,
    fontWeight: 700,
    color: "#011A51",
    marginBottom: 20,
    marginTop: 10,
  },
  subscript: {
    color: "#49597B",
    marginBottom: 30,
  },
  img: {
    marginVertical: 30,
  },
  btn: {
    padding: 20,
    // color: "#FF5F5F", // for android
    backgroundColor: "#FF5F5F", // for ios
    borderRadius: 10,
    width: 300,
    alignItems: "center",
    marginTop: 20,
  },
  input: {
    padding: 20,
    fontSize: 16,
    height: 70,
  },
  iwrapper: {
    width: 300,
    height: 70,
    // marginBottom: 20,
    borderRadius: 10,
    borderColor: "#d1d1d1",
    borderWidth: 1,
    marginBottom: 20,
    backgroundColor: "#FAFAFB",
  },
});

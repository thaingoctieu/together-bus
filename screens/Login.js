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
  Alert,
  ToastAndroid,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, Octicons } from "@expo/vector-icons";
import { auth } from "../services";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setTokens } from "../services/Auth";
import { MyContext } from "../services/WithAxios";

function Login() {
  const navigation = useNavigation();
  const { phone, setPhone } = useContext(MyContext);

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
          name="email"
          keyboardType="email-address"
          onChangeText={(text) => handleOnchange(text, "email")}
        />
        <AntDesign
          onPress={() => handleOnchange("", "email")}
          name="closecircle"
          size={20}
          color="#363636"
        />
      </View>
      <View style={styles.iwrapper}>
        <TextInput
          style={[styles.input, { width: "85%" }]}
          secureTextEntry={hidepw}
          value={inputs.password}
          placeholder="Nhập mật khẩu..."
          name="password"
          onChangeText={(text) => handleOnchange(text, "password")}
        />
        <AntDesign
          onPress={() => setHidepw(!hidepw)}
          name={hidepw ? "eyeo" : "eye"}
          size={25}
          color="#363636"
        />
      </View>
      <TouchableOpacity
        onPress={() => console.log("Not implemented yet")}
        style={{ width: 300 }}
      >
        <Text style={{ alignSelf: "flex-end" }}>Quên mật khẩu</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          auth.login(inputs.email, inputs.password).then(async (res) => {
            setTokens(res.data.accessToken, res.data.refreshToken, res.data.phone);
            setPhone(res.data.phone);
            // navigation.navigate("UserIn");
          }).catch((err) => {
            console.log("error login", err);
            ToastAndroid.show("Đăng nhập thất bại", ToastAndroid.SHORT);
            return Promise.resolve();
          });
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
      <View style={{ flexDirection: "row", marginTop: 30 }}>
        <Text style={{ fontSize: 16 }}>Không có tài khoản? </Text>
        <TouchableOpacity onPress={() => console.log("Not implemented yet")}>
          <Text style={{ fontSize: 16, color: "#FB847C", fontWeight: 700 }}>
            Đăng ký
          </Text>
        </TouchableOpacity>
      </View>
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
    width: "88%",
  },
  iwrapper: {
    width: 300,
    height: 70,
    borderRadius: 10,
    borderColor: "#d1d1d1",
    borderWidth: 1,
    marginBottom: 25,
    backgroundColor: "#FAFAFB",
    flexDirection: "row",
    alignItems: "center",
  },
});

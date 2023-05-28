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
  ToastAndroid,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, Octicons } from "@expo/vector-icons";
import { account } from "../services";

function SignUp() {
  const navigation = useNavigation();

  const [inputs, setInputs] = useState({
    phone: "",
    name: "",
    password: "",
  });

  const [hidepw, setHidepw] = useState(true);

  const handleOnchange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };

  const getRandomEmail = (domain,length) =>
  {
      var text = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
      for( var i=0; i < length; i++ )
          text += possible.charAt(Math.floor(Math.random() * possible.length));
  
      return text + domain;
  }
  var email = getRandomEmail("@gmail.com", 10);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Xin chào</Text>
      <Text style={styles.subscript}>
        Đăng ký tài khoản để thuận tiện sử dụng ToBus
      </Text>
      <View style={styles.img}>
        <Image source={require("../assets/signup.png")} />
      </View>
      <View style={styles.iwrapper}>
        <TextInput
          style={styles.input}
          value={inputs.phone}
          placeholder="Nhập số điện thoại..."
          name="phone"
          keyboardType="numeric"
          onChangeText={(text) => handleOnchange(text, "phone")}
        />
        <AntDesign
          onPress={() => handleOnchange("", "phone")}
          name="closecircle"
          size={20}
          color="#363636"
        />
      </View>
      <View style={styles.iwrapper}>
        <TextInput
          style={styles.input}
          value={inputs.name}
          placeholder="Nhập tên người dùng..."
          name="name"
          onChangeText={(text) => handleOnchange(text, "name")}
        />
        <AntDesign
          onPress={() => handleOnchange("", "name")}
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
          account.createAccount({
            ...inputs,
            email,
          }).then((res) => {
            console.log(res);
            ToastAndroid.show("Đăng ký thành công", ToastAndroid.SHORT);
            navigation.navigate("Login");
          }).catch((err) => {
            console.log(err);
            ToastAndroid.show("Đăng ký thất bại", ToastAndroid.SHORT);
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
          ĐĂNG KÝ
        </Text>
      </TouchableOpacity>
      <View style={{ flexDirection: "row", marginTop: 30 }}>
        <Text style={{ fontSize: 16 }}>Đã có tài khoản? </Text>
        <TouchableOpacity onPress={() => {
          
          navigation.navigate("Login");
        }}>
          <Text style={{ fontSize: 16, color: "#FB847C", fontWeight: 700 }}>
            Đăng nhập
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default SignUp;

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

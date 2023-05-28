import React, { createContext, useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Modal,
  ScrollView,
  ToastAndroid,
  Image,
  TextInput,
  TouchableOpacity
} from "react-native";
import { Ionicons, MaterialIcons, Foundation , FontAwesome   } from '@expo/vector-icons';
import { getAccountInfo } from "../services/Account";
import { MyContext } from "../services/WithAxios";
function User() {
  data = {
    name: "Hoa Nguyen",
    DoB: "18/02/2002",
    email: "hoa123@gmail.com",
    phone: "0901073199"
  }

  const { phone } = useContext(MyContext);
  
  const [user, setUser] = useState(data);
  const handleOnchange = (text, input) => {
    setUser((prevState) => ({ ...prevState, [input]: text }));
  };
  useEffect(() => {
    getAccountInfo(phone).then((res) => {
      setUser({
        name: res.data.name,
        DoB: "18/02/2002",
        email: res.data.email,
        phone: res.data.phone,
      });
    });
  }, []);
  
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 22, color: "#011A51", fontWeight: "500"}}>Hồ sơ</Text>
        <View style={styles.avatar}></View>
        <Text style={{fontSize: 22, color: "#011A51", fontWeight: "500"}}>{user.name}</Text>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.item}>
          <Ionicons name="md-person" size={28} color="#3787FF" style={styles.icon}/>
          <TextInput 
            style={styles.textInput} 
            name="name"
            defaultValue={user.name}
            onChangeText={(text) => handleOnchange(text, "name")}
          />
          <MaterialIcons name="edit" size={26} color="black" style={{marginLeft: "auto", opacity: 0}}/>
        </View>
        <View style={styles.item}>
          <Ionicons  name="md-calendar" size={28} color="#3787FF" style={styles.icon}/>
          <TextInput 
            style={styles.textInput} 
            name= "DoB"
            defaultValue={user.DoB}
            onChangeText={(text) => handleOnchange(text, "DoB")}
          />
          <MaterialIcons name="edit" size={26} color="black" style={{marginLeft: "auto", opacity: 0}}/>
        </View>
        <View style={styles.item}>
          <Ionicons name="mail" size={28} color="#3787FF" style={styles.icon}/>
          <TextInput 
            style={styles.textInput} 
            name="email"
            defaultValue={user.email}
            onChangeText={(text) => handleOnchange(text, "email")}
          />
          <MaterialIcons name="edit" size={26} color="black" style={{marginLeft: "auto", opacity: 0}}/>
        </View>
        <View style={styles.item}>
          <Ionicons   name="call" size={28} color="#3787FF" style={styles.icon}/>
          <TextInput 
            style={styles.textInput} 
            name="phone"
            defaultValue={user.phone}
            onChangeText={(text) => handleOnchange(text, "phone")}
            />
          <MaterialIcons name="edit" size={26} color="black" style={{marginLeft: "auto", opacity: 0}}/>
        </View>
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          ToastAndroid.show("Lưu thành công", ToastAndroid.SHORT);
        }}
      >
        <Text
          style={{
            fontWeight: 500,
            fontSize: 13,
            color: "#fff", // for ios
          }}
        >
          LƯU THAY ĐỔI
        </Text>
        </TouchableOpacity>
    </View>
  );
}

export default User;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingVertical: 40,
    paddingHorizontal: 24,
    // justifyContent: "center",
  },
  avatar:{
    backgroundColor: "#011A51",
    borderRadius: 90,
    width: 100,
    height: 100,
    margin: 16,
  },
  infoContainer:{
    marginTop: 40,
    height: 360,
    justifyContent:"space-between"
  },
  icon: {
    backgroundColor: "#D7E7FF",
    padding: 10,
    borderRadius: 90,
    width: 48,
    height: 48,
    alignSelf: "center",
    justifyContent: "center",
  },
  item: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0.5,
    borderRadius: 14,
    borderColor: "#ccc",
    padding: 14,
  },
  btn: {
    marginTop: 36,
    alignItems: "center",
    borderRadius: 50,
    padding: 18,
    backgroundColor: "#FF5F5F", // for ios
    borderRadius: 10,
    width: "100%",
  },
  textInput: {
    paddingHorizontal: 26, 
    justifyContent: "flex-start"
  }
});

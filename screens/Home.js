import React, { createContext, useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Modal, ScrollView, ToastAndroid } from 'react-native';

function Home() {
    return (
        <View style={styles.container}>
            <Text>Home</Text>
        </View>
    )

}

export default Home

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });
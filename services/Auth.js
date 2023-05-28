import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
import { API_URL } from "./constant";

export async function login(phone, password) {
    return await axios.post(new URL('/auth/login', API_URL).href, {
        phone,
        password,
    }, { skipAuthRefresh: true });
}

export async function logout() {
    return await axios.post(new URL('/auth/logout', API_URL).href);
}

export async function refreshToken(refreshToken) {
    return await axios.post(new URL('/auth/refresh', API_URL).href, {
        refreshToken,
    }, { skipAuthRefresh: true });
}

// Obtain the fresh token each time the function is called
export async function getAccessToken() {
    return await AsyncStorage.getItem('accessToken');
}

export async function getRefreshToken() {
    return await AsyncStorage.getItem('refreshToken');
}

export async function setTokens(accessToken, refreshToken, phone) {
    await AsyncStorage.setItem('accessToken', accessToken);
    await AsyncStorage.setItem('refreshToken', refreshToken);
    await AsyncStorage.setItem('phone', phone);
}

export async function removeTokens() {
    await AsyncStorage.removeItem('accessToken');
    await AsyncStorage.removeItem('refreshToken');
    await AsyncStorage.removeItem('phone');
}
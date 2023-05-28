import axios from "axios";
import { API_URL } from "./constant";

export async function getAccountInfo(phone) {
    return await axios.get(new URL(`accounts/${phone}`, API_URL).href);
}

export async function createAccount(account) {
    return await axios.post(new URL('accounts/create', API_URL).href, account);
}
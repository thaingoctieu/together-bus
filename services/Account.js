import axios from "axios";
import { API_URL } from "./constant";

export async function getAccountInfo(phone) {
    return await axios.get(new URL(`accounts/${phone}`, API_URL).href);
}
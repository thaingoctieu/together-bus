import axios from "axios";
import { API_URL } from "./constant";

export async function getAllRoutes() {
    return await axios.get(new URL('routes', API_URL).href);
}

export async function getRouteInfo(busNo) {
    return await axios.get(new URL(`routes/${busNo}`, API_URL).href);
}
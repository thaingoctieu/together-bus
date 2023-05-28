import axios from "axios";
import { API_URL } from "./constant";

export async function getAllRoutes() {
    return await axios.get(new URL('routes', API_URL).href);
}

export async function getRouteInfo(busNo) {
    return await axios.get(new URL(`routes/${busNo}`, API_URL).href);
}

export async function getRouteStops(busNo) {
    return await axios.get(new URL(`routes/${busNo}/stops`, API_URL).href);
}

export async function getRouteTimes(busNo) {
    return await axios.get(new URL(`routes/${busNo}/timetables`, API_URL).href);
}
import axios from "axios";

const API = "https://api.coincap.io/v2/assets";

export const getAllData = (hook: any, limit: number = 10) => {
  axios
    .get(`${API}?limit=${limit}`)
    .then((response) => hook(response.data.data));
};

export const getDataById = (hook: any, id: string) => {
  axios.get(`${API}/${id}`).then((response) => hook(response.data.data));
};

export const getHistoryById = (hook: any, id: string, interval: string, start: number, end: number) => {
  axios.get(`${API}/${id}/history?interval=${interval}&start=${start}&end=${end}`).then((response) => hook(response.data.data));
};
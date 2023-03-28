import axios from 'axios';

const API = 'https://api.coincap.io/v2/assets';

export const getAllData = async (limit = 10, offset = 0) => {
  const response = await axios.get(`${API}?limit=${limit}&offset=${offset}`);
  return response.data.data;
};

export const getDataById = async (id: string) => {
  const response = await axios.get(`${API}/${id}`);
  return response.data.data;
};

export const getHistoryById = async (id: string, interval: string, start: number, end: number) => {
  const response = await axios.get(
    `${API}/${id}/history?interval=${interval}&start=${start}&end=${end}`
  );
  return response.data.data;
};

export const getFullHistoryById = async (id: string, interval: string) => {
  const response = await axios.get(`${API}/${id}/history?interval=${interval}`);
  return response.data.data;
};

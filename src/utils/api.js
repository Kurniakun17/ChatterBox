import axios from "axios";

export const BASE_URL = 'https://forum-api.dicoding.dev/v1';

export const APILogin = async (email, password) => {
  const res = await axios.post(BASE_URL + '/login', { email, password });
  return res.data;
};

export const APIRegister = async ({ name, email, password }) => {
  console.log(name, email, password);
  const res = await axios.post(`${BASE_URL}/register`, {
    name,
    email,
    password,
  });
  return res.data;
};

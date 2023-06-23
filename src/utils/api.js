import axios from 'axios';

export const BASE_URL = 'https://forum-api.dicoding.dev/v1';

export const putToken = (token) => {
  localStorage.setItem('token', token);
};

const getAccessToken = () => {
  return localStorage.getItem('token');
};

export const APILogin = async ({ email, password }) => {
  try {
    const res = await axios.post(BASE_URL + '/login', { email, password });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const APIRegister = async ({ name, email, password }) => {
  try {
    const res = await axios.post(`${BASE_URL}/register`, {
      name,
      email,
      password,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const APIgetOwnProfile = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/users/me`, {
      headers: { Authorization: `Bearer ${getAccessToken()}` },
    });
    return res.data.data.user;
  } catch (error) {
    
    return null;
    // console.log(error.message);
  }
};

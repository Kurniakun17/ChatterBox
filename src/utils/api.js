import axios from 'axios';

export const BASE_URL = 'https://forum-api.dicoding.dev/v1';

export const putAccessToken = (token) => {
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
    console.log(error.respond);
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
    console.log(error.respond);
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
  }
};

export const APIgetThread = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/threads`);
    const { data, status, message } = res.data;
    return data.threads;
  } catch (error) {
    console.log(error.respond);
  }
};

export const APIgetUsers = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/users`);
    const { data, status, message } = res.data;
    return data.users;
  } catch (error) {
    console.log(error.respond);
  }
};

export const APIgetDetailThread = async ({ id }) => {
  try {
    const res = await axios.get(`${BASE_URL}/threads/${id}`);

    const { data, status, message } = res.data;

    return data.detailThread;
  } catch (error) {
    console.log(error.respond);
    return {};
  }
};

export const APIupVoteThread = async ({ threadId }) => {
  try {
    const res = await axios.post(
      `${BASE_URL}/threads/${threadId}/up-vote`,
      {},
      { headers: { Authorization: `Bearer ${getAccessToken()}` } }
    );
  } catch (error) {
    console.log(error.respond);
  }
};

export const APIdownVoteThread = async ({ threadId }) => {
  try {
    const res = await axios.post(
      `${BASE_URL}/threads/${threadId}/down-vote`,
      {},
      { headers: { Authorization: `Bearer ${getAccessToken()}` } }
    );
  } catch (error) {
    console.log(error.respond);
  }
};

export const APIneutralizeVoteThread = async ({ threadId }) => {
  try {
    const res = await axios.post(
      `${BASE_URL}/threads/${threadId}/neutral-vote`,
      {},
      { headers: { Authorization: `Bearer ${getAccessToken()}` } }
    );
  } catch (error) {
    console.log(error.respond);
  }
};

export const APIupVoteComment = async ({ threadId, commentId }) => {
  try {
    const res = await axios.post(
      `${BASE_URL}/threads/${threadId}/comments/${commentId}/up-vote`,
      {},
      { headers: { Authorization: `Bearer ${getAccessToken()}` } }
    );
  } catch (error) {
    console.log(error.respond);
  }
};

export const APIdownVoteComment = async ({ threadId, commentId }) => {
  try {
    const res = await axios.post(
      `${BASE_URL}/threads/${threadId}/comments/${commentId}/down-vote`,
      {},
      { headers: { Authorization: `Bearer ${getAccessToken()}` } }
    );
  } catch (error) {
    console.log(error.respond);
  }
};

export const APIneutralizeVoteComment = async ({ threadId, commentId }) => {
  try {
    const res = await axios.post(
      `${BASE_URL}/threads/${threadId}/comments/${commentId}/neutral-vote`,
      {},
      { headers: { Authorization: `Bearer ${getAccessToken()}` } }
    );
  } catch (error) {
    console.log(error.respond);
  }
};

import axios from 'axios';

export const BASE_URL = 'https://forum-api.dicoding.dev/v1';

export const putAccessToken = (token) => {
  localStorage.setItem('token', token);
};

const getAccessToken = () => localStorage.getItem('token');

export const APILogin = async ({ email, password }) => {
  try {
    const res = await axios.post(`${BASE_URL}/login`, { email, password });
    return res.data;
  } catch (error) {
    return { ...error.respond };
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
    return { ...error.respond };
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
    const { data } = res.data;
    return data.threads;
  } catch (error) {
    return { ...error.respond };
  }
};

export const APIgetUsers = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/users`);
    const { data } = res.data;
    return data.users;
  } catch (error) {
    return { ...error.respond };
  }
};

export const APIgetDetailThread = async ({ id }) => {
  try {
    const res = await axios.get(`${BASE_URL}/threads/${id}`);

    const { data } = res.data;

    return data.detailThread;
  } catch (error) {
    return { ...error.respond };
  }
};

export const APIupVoteThread = async ({ threadId }) => {
  try {
    await axios.post(
      `${BASE_URL}/threads/${threadId}/up-vote`,
      {},
      { headers: { Authorization: `Bearer ${getAccessToken()}` } }
    );
  } catch (error) {
    return { ...error.respond };
  }
};

export const APIdownVoteThread = async ({ threadId }) => {
  try {
    await axios.post(
      `${BASE_URL}/threads/${threadId}/down-vote`,
      {},
      { headers: { Authorization: `Bearer ${getAccessToken()}` } }
    );
  } catch (error) {
    return { ...error.respond };
  }
};

export const APIneutralizeVoteThread = async ({ threadId }) => {
  try {
    await axios.post(
      `${BASE_URL}/threads/${threadId}/neutral-vote`,
      {},
      { headers: { Authorization: `Bearer ${getAccessToken()}` } }
    );
  } catch (error) {
    return { ...error.respond };
  }
};

export const APIupVoteComment = async ({ threadId, commentId }) => {
  try {
    await axios.post(
      `${BASE_URL}/threads/${threadId}/comments/${commentId}/up-vote`,
      {},
      { headers: { Authorization: `Bearer ${getAccessToken()}` } }
    );
  } catch (error) {
    return { ...error.respond };
  }
};

export const APIdownVoteComment = async ({ threadId, commentId }) => {
  try {
    await axios.post(
      `${BASE_URL}/threads/${threadId}/comments/${commentId}/down-vote`,
      {},
      { headers: { Authorization: `Bearer ${getAccessToken()}` } }
    );
  } catch (error) {
    return { ...error.respond };
  }
};

export const APIneutralizeVoteComment = async ({ threadId, commentId }) => {
  try {
    await axios.post(
      `${BASE_URL}/threads/${threadId}/comments/${commentId}/neutral-vote`,
      {},
      { headers: { Authorization: `Bearer ${getAccessToken()}` } }
    );
  } catch (error) {
    return { ...error.respond };
  }
};

export const APIaddComment = async ({ threadId, content }) => {
  try {
    const res = await axios.post(
      `${BASE_URL}/threads/${threadId}/comments`,
      {
        content,
      },
      { headers: { Authorization: `Bearer ${getAccessToken()}` } }
    );
    return res.data.data;
  } catch (error) {
    return { ...error.respond };
  }
};

export const APIaddThread = async ({ title, body, category }) => {
  try {
    const res = await axios.post(
      `${BASE_URL}/threads`,
      {
        title,
        body,
        category,
      },
      {
        headers: {
          Authorization: `Bearer ${getAccessToken()}`,
        },
      }
    );
    return res.data.data.thread;
  } catch (error) {
    return { ...error.respond };
  }
};

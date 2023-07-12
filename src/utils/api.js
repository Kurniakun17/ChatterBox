/* eslint-disable no-unused-vars */
import axios from 'axios';

export const BASE_URL = 'https://forum-api.dicoding.dev/v1';

export const putAccessToken = (token) => {
  localStorage.setItem('token', token);
};

const getAccessToken = () => localStorage.getItem('token');

export const API = (() => {
  const Login = async ({ email, password }) => {
    try {
      const res = await axios.post(`${BASE_URL}/login`, { email, password });
      return res.data;
    } catch (error) {
      return { ...error.respond };
    }
  };

  const Register = async ({ name, email, password }) => {
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

  const getOwnProfile = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/users/me`, {
        headers: { Authorization: `Bearer ${getAccessToken()}` },
      });
      return res.data.data.user;
    } catch (error) {
      return null;
    }
  };

  const getThread = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/threads`);
      const { data } = res.data;
      return data.threads;
    } catch (error) {
      return { ...error.respond };
    }
  };

  const getUsers = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/users`);
      const { data } = res.data;
      return data.users;
    } catch (error) {
      return { ...error.respond };
    }
  };

  const getDetailThread = async ({ id }) => {
    try {
      const res = await axios.get(`${BASE_URL}/threads/${id}`);

      const { data } = res.data;

      return data.detailThread;
    } catch (error) {
      return { ...error.respond };
    }
  };

  const upVoteThread = async ({ threadId }) => {
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

  const downVoteThread = async ({ threadId }) => {
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

  const neutralizeVoteThread = async ({ threadId }) => {
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

  const upVoteComment = async ({ threadId, commentId }) => {
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

  const downVoteComment = async ({ threadId, commentId }) => {
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

  const neutralizeVoteComment = async ({ threadId, commentId }) => {
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

  const addComment = async ({ threadId, content }) => {
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

  const addThread = async ({ title, body, category }) => {
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

  return {
    addComment,
    addThread,
    upVoteComment,
    downVoteComment,
    upVoteThread,
    downVoteThread,
    Login,
    Register,
    getDetailThread,
    getOwnProfile,
    getUsers,
    getThread,
    neutralizeVoteComment,
    neutralizeVoteThread
  };
})();

import axios from 'axios';

const API_URL = 'http://10.0.2.2:8000';

export const axiosInstance = axios.create({
  baseURL: API_URL,
  // headers: {
  //   Authorization: `${
  //     localStorage.getItem('access-token')
  //       ? `Bearer ${localStorage.getItem('access-token')}`
  //       : ''
  //   }`,
  // },
});

export const axiosInstanceWithoutAuth = axios.create({
  baseURL: API_URL,
});

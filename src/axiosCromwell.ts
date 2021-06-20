import axios from 'axios';
import { useDispatch } from "react-redux";
import { identity } from "./utils/FunctionUtils";
import { sessionExpired } from "./store/auth/actions";

const axiosCromwell = axios.create({
  baseURL: 'http://localhost:8080/',
  headers: {
    'Content-Type': 'application/json'
  }
});

axiosCromwell.interceptors.request.use(
  config => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers['Authorization'] = accessToken;
    }
    return config;
  },
  Promise.reject
);

axiosCromwell.interceptors.response.use(
  identity,
  async error => {
    const originalRequest = error.config;
    const refreshToken = localStorage.getItem('refreshToken');
    if (refreshToken && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const tokensResponse = await axiosCromwell.get('/auth/refresh', {params: {refreshToken}})
      if (tokensResponse.status === 200) {
        localStorage.setItem('accessToken', tokensResponse.headers['access-token']);
        localStorage.setItem('refreshToken', tokensResponse.headers['refresh-token']);
        return axios(originalRequest);
      }
    } else if (refreshToken && error.response.status === 401 && originalRequest._retry) {
      const dispatch = useDispatch();
      dispatch(sessionExpired);
    }
    return Promise.reject(error);
  }
);

export default axiosCromwell;

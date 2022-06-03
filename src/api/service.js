// axios 호출 Interface 생성

import axios from "axios";
import {refreshAccessToken} from "@/utils/authUtils";

// axios.defaults.xsrfCookieName = "csrftoken";
// axios.defaults.xsrfHeaderName = "X-CSRFToken";
// axios.defaults.withCredentials = true;
// axios.defaults.baseURL = "http://localhost:8000/"; // the FastAPI backend

const service = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1",
  timeout: 3000,
  withCredentials: true,
  xsrfCookieName: "csrftoken",
  xsrfHeaderName: "X-CSRFToken",
});

service.interceptors.request.use(
  async (config) => {
    const userInfo = sessionStorage.getItem("userInfo");
    console.log("interceptor userInfo: ", userInfo);
    const accessToken = userInfo ? JSON.parse(userInfo).access : null;
    console.log("interceptor access: ", accessToken);
    config.headers = {
      Authorization: `Bearer ${accessToken}`,
      Accept: "application/json",
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// Response interceptor for API calls
service.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      console.log("토큰 만료");
      originalRequest._retry = true;
      const sessionObj = sessionStorage.getItem("userInfo");
      let userInfo = sessionObj ? JSON.parse(sessionObj) : null;
      const access_token = await refreshAccessToken(userInfo.refreshToken);
      if (userInfo) {
        originalRequest.headers["Authorization"] = "Bearer " + access_token;
        userInfo.accessToken = access_token;
        sessionStorage.setItem("userInfo", JSON.stringify(userInfo));
      }
      return axios(originalRequest);
    }
    return Promise.reject(error);
  }
);

// 각 메소드별 함수를 생성해 주세요.
export default {
  async get(...options) {
    try {
      const res = await service.get(...options);
      return res;
    } catch (e) {
      return e;
    }
  },

  async patch(...options) {
    try {
      const res = await service.patch(...options);
      return res;
    } catch (e) {
      return e;
    }
  },

  async post(...options) {
    try {
      const res = await service.post(...options);
      return res;
    } catch (e) {
      return e;
    }
  },

  //   async put(...options) {
  //     // 공통
  //   },

  async delete(...options) {
    try {
      const res = await service.delete(...options);
      return res;
    } catch (e) {
      return e;
    }
  },
};

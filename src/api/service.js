// axios 호출 Interface 생성

import axios from "axios";
import { API_URL } from "./config";
// import { refreshAccessToken } from "@/utils/authUtils";

// axios.defaults.xsrfCookieName = "csrftoken";
// axios.defaults.xsrfHeaderName = "X-CSRFToken";
// axios.defaults.withCredentials = true;
// axios.defaults.baseURL = "http://localhost:8000/"; // the FastAPI backend

const service = axios.create({
  baseURL: API_URL,
  timeout: 3000,
  withCredentials: true,
  xsrfCookieName: "csrftoken",
  xsrfHeaderName: "X-CSRFToken",
});

service.interceptors.request.use(
  async (config) => {
    const userInfo = sessionStorage.getItem("userInfo");
    // console.log("interceptor request setting...");
    // console.log("interceptor userInfo: ", userInfo);
    const accessToken = userInfo ? JSON.parse(userInfo).access : null;
    // console.log("interceptor access: ", accessToken);
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
    if (
      (error.response.status === 401 || error.response.status === 422) &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      const sessionObj = sessionStorage.getItem("userInfo");
      let userInfo = sessionObj ? JSON.parse(sessionObj) : null;
      console.log(
        "Refresh Token 체크 userInfo.refreshToken: ",
        userInfo.refresh
      );
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + userInfo.refresh;
      axios
        .post(`${API_URL}jwt/refresh`)
        .then((res) => {
          console.log("New access Token: ", res.data.access);
          const access_token = res.data.access;
          if (userInfo) {
            originalRequest.headers["Authorization"] = "Bearer " + access_token;
            userInfo.access = access_token;
            sessionStorage.setItem("userInfo", JSON.stringify(userInfo));
            console.log(
              "Access 토큰 변경 완료, ",
              sessionStorage.getItem("userInfo")
            );
          }
          return axios(originalRequest);
        })
        .catch((err) => {
          console.log(err);
          alert(err);
        });

      // const access_token = await refreshAccessToken(userInfo.refresh);
      // console.log("New access Token: ", access_token);
      // if (userInfo) {
      //   originalRequest.headers["Authorization"] = "Bearer " + access_token;
      //   userInfo.access = access_token;
      //   sessionStorage.setItem("userInfo", JSON.stringify(userInfo));
      //   console.log(
      //     "Access 토큰 변경 완료, ",
      //     sessionStorage.getItem("userInfo")
      //   );
      // }
      // return axios(originalRequest);
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
      alert("POST ERROR!");
      return e;
    }
  },

  async logout(url, token) {
    try {
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      console.log("HEADER: ", axios.defaults.headers.common["Authorization"]);
      const res = await axios.post(url);
      return res;
    } catch (e) {
      alert("LOGOUT ERROR!");
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

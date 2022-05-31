// // axios 호출 Interface 생성

// import axios from "axios";

// // axios.defaults.xsrfCookieName = "csrftoken";
// // axios.defaults.xsrfHeaderName = "X-CSRFToken";
// // axios.defaults.withCredentials = true;
// // axios.defaults.baseURL = "http://localhost:8000/"; // the FastAPI backend
// const service = axios.create({
//   baseURL: "http://localhost:8000/api/v1",
//   timeout: 3000,
//   withCredentials: true,
//   xsrfCookieName: "csrftoken",
//   xsrfHeaderName: "X-CSRFToken",
// });

// service.interceptors.request.use(
//   async (config) => {
//     const accessToken = localStorage.getItem("access");
//     // const userInfo = window.sessionStorage.getItem("userInfo");
//     // const accessToken = userInfo ? JSON.parse(userInfo).accessToken : null;
//     if (accessToken)
//       config.headers = {
//         Authorization: `Bearer ${accessToken}`,
//         Accept: "application/json",
//       };
//     return config;
//   },
//   (error) => {
//     Promise.reject(error);
//   }
// );

// // Response interceptor for API calls
// service.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   async function (error) {
//     const originalRequest = error.config;
//     if (error.response.status === 401 && !originalRequest._retry) {
//       console.log("토큰 만료");
//       originalRequest._retry = true;
//       const sessionObj = window.sessionStorage.getItem("userInfo");
//       let userInfo = sessionObj ? JSON.parse(sessionObj) : null;
//       const access_token = await refreshAccessToken(userInfo.refreshToken);
//       if (userInfo) {
//         originalRequest.headers["Authorization"] = "Bearer " + access_token;
//         userInfo.accessToken = access_token;
//         window.sessionStorage.setItem("userInfo", JSON.stringify(userInfo));
//       }
//       return axios(originalRequest);
//     }
//     return Promise.reject(error);
//   }
// );

// // 각 메소드별 함수를 생성해 주세요.
// export default {
//   async get(...options) {
//     try {
//       const res = await service.get(...options);
//       return res;
//     } catch (e) {
//       return printError(e);
//     }
//   },

//   async post(...options) {
//     // 공통
//   },

//   async put(...options) {
//     // 공통
//   },

//   async delete(...options) {
//     // 공통
//   },
// };

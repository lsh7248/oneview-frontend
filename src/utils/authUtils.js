// import axios from "axios";

// function refreshTokenRequest(token) {
//   axios.defaults.headers.common["Authorization"] = "Bearer " + token;
//   axios
//     .post("/api/v1/jwt/refresh")
//     .then((res) => {
//       const new_access = res.data.access;
//       //   const sessionObj = sessionStorage.getItem("userInfo");
//       //   let userInfo = sessionObj ? JSON.parse(sessionObj) : null;
//       //   const refresh = userInfo ? userInfo.refresh : null;
//       let userInfo = {
//         access: new_access,
//         refresh: token,
//       };
//       console.log("New access Token: ", new_access);

//       sessionStorage.setItem("userInfo", JSON.stringify(userInfo));
//     })
//     .catch((err) => {
//       console.log(err);
//     });
//   return new_access;
// }
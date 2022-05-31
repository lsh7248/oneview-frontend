export const API_URL = "http://localhost:8000/api/v1/";

export const API = {
  users: "users", // API list의 구조를 나열해주세요.
  user: (args) => `users/${args.userId}`,
  blacklists: "blacklists",
};

export const ETC_API = {
  tests: "tests",
  test: (args) =>
    `users/${args.args1}/depth1/${args.args2}/depth2/${args.args3}`,
};

/*
EX)
BackEnd URL: localhost:8000
Endpoints:  /api/v1/...
API_URL + API ...
*/

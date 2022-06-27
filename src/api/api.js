import service from "./service";
import { API_URL, API } from "./config";

export const api = {
  // User Register
  getUser(userId) {
    return service.get(`${API_URL}${API.user(userId)}`);
  },
  // Get All Users
  getUsers() {
    return service.get(`${API_URL}${API.users}`);
  },
  // Get My Config
  getMe() {
    return service.get(`${API_URL}${API.me}`);
  },
  //  Register User
  setUser(params) {
    return service.post(`${API_URL}${API.users}`, params);
  },
  // Update User
  updateUser(userId, params) {
    return service.patch(`${API_URL}${API.user(userId)}`, params);
  },
  //  Delete User
  deleteUser(userId) {
    return service.delete(`${API_URL}${API.user(userId)}`);
  },
  // Get Vocs
  getVocs(params) {
    return service.get(`${API_URL}${API.vocs}`, params);
  },
};

export const testApi = {
  getTests() {
    return service.get(`${API_URL}${API.tests}`);
  },
  /* test 등록하기
   * @param { Object } args
   * @param { string } args.args1 - 이것
   * @param { string } args.args2 - 저것
   * @param { string } args.args3 - 그것
   */
  setTest(args) {
    return service.post(`${API_URL}${API.test(args)}`);
  },
};

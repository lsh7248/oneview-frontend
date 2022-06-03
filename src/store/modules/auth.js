const auth = {
  namespaced: true,
  state: {
    // userContainer: {
    //   userId: null,
    //   userPassword: null,
    //   isLogin: false,
    // },
    access: "",
    refresh: "",
    isLogin: false,
  },
  getters: {
    getAccess(state) {
      return state.access;
    },
    getRefresh(state) {
      return state.refresh;
    },
    getIsLogin(state) {
      return state.isLogin;
    },
  },
  mutations: {
    initializeStore(state) {
      if (sessionStorage.getItem("userInfo")) {
        const sessionObj = sessionStorage.getItem("userInfo");
        let userInfo = sessionObj ? JSON.parse(sessionObj) : null;
        state.access = userInfo ? JSON.parse(userInfo).access : null;
        state.refresh = userInfo ? JSON.parse(userInfo).refresh : null;
        state.isLogin = true;
      } else {
        state.access = "";
        state.refresh = "";
        state.isLogin = false;
      }
    },
    setAccess(state, access) {
      state.access = access;
    },
    setRefresh(state, refresh) {
      state.refresh = refresh;
    },
    setIsLogin(state, bool) {
      state.isLogin = bool;
    },
  },
  actions: {},
};

export default auth;

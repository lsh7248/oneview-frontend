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
    // getUserContainer(state) {
    //   return state.userContainer;
    // },
  },
  mutations: {
    // saveUserContainer(state, payload) {
    //   console.log(payload);
    //   state.userContainer.userId = payload.userId;
    //   state.userContainer.userPassword = payload.userPassword;
    //   state.isLogin = true;
    // },
    initializeStore(state) {
      if (sessionStorage.getItem("userInfo")) {
        const sessionObj = sessionStorage.getItem("userInfo");
        let userInfo = sessionObj ? JSON.parse(sessionObj) : null;
        state.access = userInfo ? JSON.parse(userInfo).access : null;
        state.refresh = userInfo ? JSON.parse(userInfo).refresh : null;
      } else {
        state.access = "";
        state.refresh = "";
      }
    },
    setAccess(state, access) {
      state.access = access;
    },
    setRefresh(state, refresh) {
      state.refresh = refresh;
    },
  },
  actions: {},
};

export default auth;

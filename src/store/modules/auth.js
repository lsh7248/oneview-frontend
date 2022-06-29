const auth = {
  namespaced: true,
  state: {
    userContainer: {
      userId: "",
      userName: "",
      auth: "",
      userBelong1: "",
      userBelong2: "",
      userBelong3: "",
      userBelong4: "",
    },
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
    getUserContainer(state) {
      return state.userContainer;
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
        state.userContainer = {
          userId: "",
          userName: "",
          auth: "",
          userBelong1: "",
          userBelong2: "",
          userBelong3: "",
          userBelong4: "",
        };
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
    setUserContainer(state, payload) {
      state.userContainer = {
        userId: payload.userId,
        userName: payload.userName,
        auth: payload.auth,
        userBelong1: payload.userBelong2,
        userBelong2: payload.userBelong2,
        userBelong3: payload.userBelong3,
        userBelong4: payload.userBelong4,
      };
    },
  },
  actions: {},
};

export default auth;

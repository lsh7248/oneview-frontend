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
  },
  getters: {
    getAccess(state) {
      return state.access;
    },
    getRefresh(state) {
      return state.refresh;
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
      if (localStorage.getItem("access")) {
        state.access = localStorage.getItem("access");
        state.refresh = localStorage.getItem("refresh");
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

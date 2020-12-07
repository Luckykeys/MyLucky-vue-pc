import { reqRegister , reqLogin} from "@api/user.js";
export default {
  //初始化数据，先判断是否存在数据
  state: {
    name:localStorage.getItem("name") || "",
    token: localStorage.getItem("token") || "",
  },
  getters: {},
  actions: {
    async register(store, { phone, password, code }) {
      await reqRegister( {phone, password, code});
      console.log(store);
    },
    async login(store, { phone, password }) {
      const user = await reqLogin({ phone, password });
      //调用commit方法储存在vuex中
      store.commit("LOGIN", user);
    },
  },
  mutations: {
    LOGIN(state, user) {
      state.name = user.name;
      state.token = user.token;
    },
  },
};

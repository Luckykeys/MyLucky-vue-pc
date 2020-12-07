import { reqRegister , reqLogin} from "@api/user.js";
export default {
  //返回的成功的请求中有name,token
  state: {
    name: "",
    token: "",
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

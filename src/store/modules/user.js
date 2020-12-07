import { reqRegister , reqLogin} from "@api/user.js";
export default {
  state: {},
  getters: {},
  actions: {
    async register(store,{phone,password,code}){
      await reqRegister({phone,password,code});
      console.log(store)
    },
    async login(store,{phone,password}){
      await reqLogin({phone,password})
      console.log(store)
    }
  },
  mutations: {},
};

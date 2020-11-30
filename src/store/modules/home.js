import {reqGetBaseCategory} from "@api/home.js"
export default {
    state:{
        categoryList: [],
    },
    actions: {
        //定义一个发送请求回来的数据
        async getCategoryList(store){
            const categoryList = await reqGetBaseCategory()
            store.commit("GET_CATEGORY_LIST",categoryList)
        }
    },
    mutations:{
        GET_CATEGORY_LIST(state,categoryList){
            state.categoryList = categoryList;
        }
    },
    getters:{
        
    }
}
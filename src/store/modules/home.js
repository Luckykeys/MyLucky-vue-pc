import {reqGetBaseCategory,reqGetBanners,reqGetFloors} from "@api/home.js"
export default {
    state:{
        categoryList: [],
        banners:[],
        floors:[]
    },
    actions: {
        //定义一个发送请求回来的数据
        async getCategoryList(store){
            const categoryList = await reqGetBaseCategory()
            store.commit("GET_CATEGORY_LIST",categoryList)
        },
        async getBanners(store){
            const banners = await reqGetBanners()
            store.commit("GET_BANNERS",banners)
        },
        async getFloors(store){
            const floors = await reqGetFloors()
            store.commit("GET_FLOORS",floors)
        }
    },
    mutations:{
        GET_CATEGORY_LIST(state,categoryList){
            state.categoryList = categoryList;
        },
        GET_BANNERS(state,banners){
            state.banners = banners;
        },
        GET_FLOORS(state,floors){
            state.floors = floors;
        }
    },
    getters:{
        
    }
}
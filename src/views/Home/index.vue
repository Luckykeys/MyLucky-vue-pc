<template>
  <div class="home-outer">
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <TodayRecommended></TodayRecommended>
    <Rank></Rank>
    <Like></Like>
    <Floor v-for="floor in floors" :key="floor.id" :floor="floor"></Floor>
  </div>
</template>

<script>
import {mapState,mapActions} from "vuex"
import TypeNav from "@comps/TypeNav";
import ListContainer from "./ListContainer"
import TodayRecommended from "./TodayRecommended"
import Rank from "./Rank"
import Like from "./Like/Like"
import Floor from "./Floor/Floor"
export default {
  name: "Home",
  computed:{
    ...mapState({
      floors:(state)=>(state.home.floors)
    })
  },
  methods:{
    ...mapActions(["getFloors"])
  },
  mounted(){
    this.getFloors()
  },
  components: {
    TypeNav,
    ListContainer,
    TodayRecommended,
    Rank,
    Like,
    Floor
  },
};
</script>

<style lang="less" scoped>
</style>

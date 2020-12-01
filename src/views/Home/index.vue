<template>
  <div class="home-outer">
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <TodayRecommended></TodayRecommended>
    <Rank></Rank>
    <Like></Like>
  </div>
</template>

<script>
import TypeNav from "@comps/TypeNav";
import ListContainer from "./ListContainer"
import TodayRecommended from "./TodayRecommended"
import Rank from "./Rank"
import Like from "./Like/Like"
// import 
export default {
  name: "Home",
  components: {
    TypeNav,
    ListContainer,
    TodayRecommended,
    Rank,
    Like
  },
};
</script>

<style lang="less" scoped>
</style>

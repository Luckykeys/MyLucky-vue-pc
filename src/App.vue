<template>
  <div>
      <Header></Header>
      <router-view></router-view>
      <!-- <Footer v-if="isFooterHiden"></Footer> -->
      <!-- <Footer v-if="$route.path !=='/login' && $route.path!=='/register'"></Footer> -->
      <Footer v-if="!$route.meta.isFooterHiden"></Footer>
  </div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer'
export default {
    name:"App",
    // data(){
    //   return{
    //     isFooterHiden:true
    //   }
    // },
    components:{
      Header,
      Footer
    },
    // watch:{
    //   $route:{
    //     handler(newVal){
    //       console.log(newVal)
    //       this.isFooterHiden = newVal.path !== "/login" && newVal.path !== "/register"
    //     },
    //     immediate:true
    //   }
    // }
}
</script>

<style>

</style>
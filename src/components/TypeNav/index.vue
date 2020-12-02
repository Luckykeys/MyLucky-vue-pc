<template>
  <div class="type-nav">
    <div class="container" @mouseleave="isSearchShow = false">
      <h2 class="all" @mouseenter="isSearchShow = true">全部商品分类</h2>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
      <transition name="search">
        <div class="sort" v-show="isHomeShow || isSearchShow">
          <div class="all-sort-list2" @click="toSearch">
            <div
              class="item bo"
              v-for="category in categoryList"
              :key="category.categoryId"
            >
              <!-- 一级 -->
              <h3>
                <!-- <a href="###">{{ category.categoryName }}</a> -->
                <!-- 为了达到跳转的功能，第一种方法就是router-link -->
                <!-- <router-link
                :to="`/search?categoryName=${category.categoryName}&category1Id=${category.categoryId}`"
                >{{ category.categoryName }}</router-link
              > -->
                <!-- 为了达到跳转的功能，第二种方法就是编程式导航 -->
                <!-- <a @click.prevent="$router.push({
                name:'search',
                query:{
                  categoryName:category.categoryName,
                  category1Id:category.categoryId
                }
              })">{{category.categoryName}}</a> -->
                <!-- 为了达到跳转的功能，第三种方法就是自定义属性+时间委托 -->
                <a
                  :data-categoryName="category.categoryName"
                  :data-categoryId="category.categoryId"
                  :data-categoryType="1"
                  >{{ category.categoryName }}</a
                >
              </h3>
              <div class="item-list clearfix">
                <div class="subitem">
                  <dl
                    class="fore"
                    v-for="child in category.categoryChild"
                    :key="child.categoryId"
                  >
                    <dt>
                      <!-- 二级 -->
                      <!-- <a href="###">{{ child.categoryName }}</a> -->
                      <!-- <router-link
                      :to="`/search?categoryName=${child.categoryName}&category2Id=${child.categoryId}`"
                      >{{ child.categoryName }}</router-link
                    > -->
                      <!-- <a @click.prevent="$router.push({
                      name:'search',
                      query:{
                        categoryName:child.categoryName,
                        category2Id:child.categoryId
                      }
                    })">{{child.categoryName}}</a> -->
                      <a
                        :data-categoryName="child.categoryName"
                        :data-categoryId="child.categoryId"
                        :data-categoryType="2"
                        >{{ child.categoryName }}</a
                      >
                    </dt>
                    <dd>
                      <!-- 三级 -->
                      <em
                        v-for="endChild in child.categoryChild"
                        :key="endChild.categoryId"
                      >
                        <!-- <a href="###">{{ endChild.categoryName }}</a> -->
                        <!-- <router-link
                        :to="`/search?categoryName=${endChild.categoryName}&category3Id=${endChild.categoryId}`"
                        >{{ endChild.categoryName }}</router-link
                      > -->
                        <!-- <a @click.prevent="
                          $router.push({
                            name: 'search',
                            query: {
                              categoryName: endChild.categoryName,
                              category3Id: endChild.categoryId,
                            },})">{{ endChild.categoryName }}</a> -->
                        <a
                          :data-categoryName="endChild.categoryName"
                          :data-categoryId="endChild.categoryId"
                          :data-categoryType="3"
                        >
                          {{ endChild.categoryName }}
                        </a>
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "TypeNav",
  data() {
    //需求就是在home
    return {
      //定义一个数据表示路径是在home的时候sort是显示的
      isHomeShow: this.$route.path === "/",
      isSearchShow: false,
    };
  },
  computed: {
    // ...mapState(["categoryList"])
    ...mapState({
      categoryList: (state) => state.home.categoryList.slice(0, 15),
    }),
  },
  methods: {
    ...mapActions(["getCategoryList"]),
    //点击a跳转到search页面
    toSearch(e) {
      // console.log(e.target.dataset);
      const { categoryid, categoryname, categorytype } = e.target.dataset;
      //判断是否点击的是a标签
      if(!categoryname) return;
      //切换到search页面的时候应该隐藏分类列表
      this.isSearchShow = false;
      const location = {
        name: "search",
        query: {
          categoryName: categoryname,
          [`category${categorytype}Id`]: categoryid,
        },
      };
      const { searchText } = this.$route.params;
      if (searchText) {
        location.params = { searchText };
      }
      this.$router.push(location);
    },
  },
  mounted() {
    //减少请求的次数
    if (this.categoryList.length) return;
    //发送请求还是再mounted中调用
    this.getCategoryList();
    // console.log(this)
  },
};
</script>

<style lang="less" scoped>
* {
  list-style: none;
  margin: 0;
  padding: 0;
}
.type-nav {
  width: 100%;
  border-bottom: 2px solid #e1251b;
}
.container {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  position: relative;
  .all {
    width: 210px;
    height: 45px;
    background-color: #e1251b;
    line-height: 45px;
    text-align: center;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
  }
  .nav {
    a {
      height: 45px;
      margin: 0 22px;
      line-height: 45px;
      font-size: 16px;
      &:hover {
        color: red;
      }
    }
  }
}
.sort {
  position: absolute;
  left: 0;
  top: 45px;
  width: 210px;
  height: 461px;
  position: absolute;
  background: #fafafa;
  z-index: 999;
  &.search-enter {
    height: 0;
  }
  &.search-enter-active {
    transition: height 1s;
    overflow: hidden;
  }
  // &.search-enter-to{

  // }
  .all-sort-list2 {
    .item {
      &:hover .item-list .subitem {
        display: block;
      }
      h3 {
        line-height: 30px;
        font-size: 14px;
        font-weight: 400;
        overflow: hidden;
        padding: 0 20px;
        margin: 0;
        a {
          &:hover {
            text-decoration: none;
            color: red;
          }
        }
      }
      .item-list {
        .subitem {
          position: absolute;
          left: 210px;
          top: 0;
          display: none;
          width: 650px;
          background-color: #eee;
          width: 735px;
          height: 462px;
          border: 1px solid #eee;

          dl {
            border-top: 1px solid #eee;
            padding: 6px 0;
            overflow: hidden;
            zoom: 1;

            &.fore {
              border-top: 0;
            }

            dt {
              float: left;
              width: 54px;
              line-height: 22px;
              text-align: right;
              padding: 3px 6px 0 0;
              font-weight: 700;
            }

            dd {
              float: left;
              width: 415px;
              padding: 3px 0 0;
              overflow: hidden;
              em {
                float: left;
                height: 14px;
                line-height: 14px;
                padding: 0 8px;
                margin-top: 5px;
                border-left: 1px solid #ccc;
              }
            }
          }
        }
      }
    }
  }
}
</style>

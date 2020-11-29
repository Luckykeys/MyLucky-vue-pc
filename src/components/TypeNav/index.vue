<template>
  <div class="type-nav">
    <div class="container">
      <h2 class="all">全部商品分类</h2>
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
      <div class="sort">
        <div class="all-sort-list2">
          <div
            class="item bo"
            v-for="category in categoryList"
            :key="category.categoryId"
          >
            <!-- 一级 -->
            <h3>
              <a href="###">{{ category.categoryName }}</a>
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
                    <a href="###">{{ child.categoryName }}</a>
                  </dt>
                  <dd>
                    <!-- 三级 -->
                    <em
                      v-for="endChild in child.categoryChild"
                      :key="endChild.categoryId"
                    >
                      <a href="###">{{ endChild.categoryName }}</a>
                    </em>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reqGetBaseCategory } from "@api/home.js";
export default {
  name: "TypeNav",
  data() {
    return {
      //定义响应数据
      categoryList: [],
    };
  },
  async mounted() {
    const result = await reqGetBaseCategory();
    console.log(result);
    this.categoryList = result.slice(0, 15);
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
          padding: 0 4px 0 8px;

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

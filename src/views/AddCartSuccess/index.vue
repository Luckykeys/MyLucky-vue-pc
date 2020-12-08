<template>
  <div class="cart-complete-wrap">
    <div class="cart-complete">
      <h3><i class="icon-pc-right"></i>商品已成功加入购物车！</h3>
      <div class="goods">
        <div class="left-good">
          <div class="left-pic">
            <img :src="cartInfo.skuDefaultImg" />
          </div>
          <div class="right-info">
            <p class="title">
              {{ cartInfo.skuName }}
            </p>
            <p class="attr">颜色:WFZ5099IH/5L钛金釜内胆 数量：{{$route.query.skuNum}}</p>
          </div>
        </div>
        <div class="right-gocart">
          <router-link :to="`/detail/${cartInfo.id}`" class="sui-btn btn-xlarge">查看商品详情</router-link>
          <router-link to="/shopcart">去购物车结算 > </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddCartSuccess",
  data() {
    return {
      cartInfo: JSON.parse(sessionStorage.getItem("cartInfo") || "{}"),
    };
  },
  //这里涉及到一个需求就是:只有从detail页面过来才可以到这个页面，而其他的页面过来，如果没有登录的话是不可以进来这个页面的
  //使用vue-router的组件守卫
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      console.log(vm);
      // 通过 `vm` 访问组件实例
      //访问这个页面的条件1.detail页面过来 2.携带之前组建的数据
      if (
        from.name === "detail" && JSON.parse(sessionStorage.getItem("cartInfo"))
        //如果现在addcartsuccess页面刷新一次还在本身的页面的话，就应该把这个from.name === "detail"，因为如果路由守卫则有的话则会判断是不是从detail传过来 
      ) {
        return next();
      }
      next("/shopcart");
    });
  },
};
</script>

<style lang="less" scoped>
.cart-complete-wrap {
  background-color: #f4f4f4;

  .cart-complete {
    width: 1200px;
    margin: 0 auto;

    h3 {
      font-weight: 400;
      font-size: 16px;
      color: #6aaf04;
      padding-top: 15px;
      padding-bottom: 15px;
      margin: 0;

      .icon-pc-right {
        background-color: #fff;
        border: 2px solid #6aaf04;
        padding: 3px;
        margin-right: 8px;
        border-radius: 15px;
      }
    }

    .goods {
      overflow: hidden;
      padding: 10px 0;

      .left-good {
        float: left;

        .left-pic {
          border: 1px solid #dfdfdf;
          width: 60px;
          float: left;
          img {
            width: 60px;
            height: 60px;
          }
        }

        .right-info {
          color: #444;
          float: left;
          margin-left: 10px;

          .title {
            width: 100%;
            line-height: 28px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: 14px;
          }

          .attr {
            color: #aaa;
          }
        }
      }

      .right-gocart {
        float: right;

        a {
          padding: 7px 36px;
          font-size: 15px;
          line-height: 22px;
          color: #333;
          background-color: #eee;
          text-decoration: none;
          box-sizing: border-box;
          border: 1px solid #e1e1e1;
        }

        a:hover {
          background-color: #f7f7f7;
          border: 1px solid #eaeaea;
        }

        a:active {
          background-color: #e1e1e1;
          border: 1px solid #d5d5d5;
        }

        .btn-danger {
          background-color: #e1251b;
          color: #fff;
        }

        .btn-danger:hover {
          background-color: #e1251b;
        }
      }
    }
  }
}
</style>
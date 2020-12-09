<template>
  <div class="cart">
    <h4>全部商品</h4>
    <div class="cart-main">
      <div class="cart-th">
        <div class="cart-th1">全部</div>
        <div class="cart-th2">商品</div>
        <div class="cart-th3">单价（元）</div>
        <div class="cart-th4">数量</div>
        <div class="cart-th5">小计（元）</div>
        <div class="cart-th6">操作</div>
      </div>
      <div class="cart-body">
        <ul class="cart-list" v-for="cart in cartList" :key="cart.id">
          <li class="cart-list-con1">
            <!-- isChecked: 0:不勾选, 1: 勾选 -->
            <input
              type="checkbox"
              name="chk_list"
              :checked="cart.isChecked"
              @click="checkState(cart.skuId, cart.isChecked)"
            />
          </li>
          <li class="cart-list-con2">
            <img :src="cart.imgUrl" />
            <div class="item-msg">{{ cart.skuName }}</div>
          </li>
          <li class="cart-list-con4">
            <span class="price">{{ cart.skuPrice }}</span>
          </li>
          <li class="cart-list-con5">
            <button
              class="mins"
              :disabled="cart.skuNum === 1"
              @click="updateCount(cart.skuId, -1)"
            >
              -
            </button>
            <!-- @blur="update"失去焦点事件触发 -->
            <input
              autocomplete="off"
              type="text"
              :value="cart.skuNum"
              minnum="1"
              class="itxt"
              @blur="update(cart.skuId, cart.skuNum, $event)"
              @input="formatSkuNum"
            />
            <button
              class="plus"
              :disabled="cart.skuNum === 10"
              @click="updateCount(cart.skuId, 1)"
            >
              +
            </button>
          </li>
          <li class="cart-list-con6">
            <span class="sum">{{ cart.skuPrice * cart.skuNum }}</span>
          </li>
          <li class="cart-list-con7">
            <a href="#none" class="sindelet" @click="delCart(cart.skuId)"
              >删除</a
            >
            <br />
            <a href="#none">移到收藏</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="cart-tool">
      <div class="select-all">
        <input class="chooseAll" type="checkbox" v-model="checkAll" />
        <span>全选</span>
      </div>
      <div class="option">
        <a href="#none">删除选中的商品</a>
        <a href="#none">移到我的关注</a>
        <a href="#none">清除下柜商品</a>
      </div>
      <div class="money-box">
        <div class="chosed">
          已选择 <span>{{ total }}</span
          >件商品
        </div>
        <div class="sumprice">
          <em>总价（不含运费）：</em>
          <i class="summoney">{{ totalPrice }}</i>
        </div>
        <div class="sumbtn">
          <a class="sum-btn" @click="toTrade">结算</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "ShopCart",
  computed: {
    ...mapState({
      cartList: (state) => state.shopcart.cartList,
    }),
    //定义一个函数计算商品总数然后展示
    total() {
      //这里有一个问题就是,应该计算出被选择的才会被计算，应该先过滤
      return this.cartList
        .filter((cart) => cart.isChecked === 1)
        .reduce((p, c) => p + c.skuNum, 0);
    },
    //定义一个函数计算商品的总价然后展示
    totalPrice() {
      return this.cartList
        .filter((cart) => cart.isChecked === 1)
        .reduce((p, c) => p + c.skuNum * c.skuPrice, 0);
    },
    checkAll: {
      //点击所有的按钮的时候,下面的全选框应该是被选中的
      //every() 方法用于检测数组所有元素是否都符合指定条件(通过函数提供)
      get() {
        return (
          this.cartList.every((cart) => {
            return cart.isChecked === 1;
          }) && this.cartList.length !== 0
        );
      },
      //点击下面的全选框的时候,应该所有的按钮的是被选中的
      set(newVal) {
        // console.log(newVal);
        let isChecked = newVal ? 1 : 0;
        //点击后让所有的商品的单选框全部选中
        this.cartList.forEach(async (cart) => {
          const skuId = cart.skuId;
          // cart.isChecked === 1
          //发送请求把参数参过去重新获取数据
          await this.updateCheckCart({ skuId, isChecked });
          this.getCartList();
        });
      },
    },
  },
  methods: {
    ...mapActions([
      "getCartList",
      "getAddToCartCount",
      "getDelCart",
      "updateCheckCart",
    ]),
    //点击更新商品的数量
    async updateCount(skuId, skuNum) {
      //点击的时候发送请求,更新商品
      await this.getAddToCartCount({ skuId, skuNum });
      //重新发一次请求刷新页面
      // this.getCartList()
    },
    async delCart(skuId) {
      if (window.confirm("您确定删除这件商品嘛？")) {
        await this.getDelCart(skuId);
        //在vuex中发送请求

        //手动重新发送一次请求
        this.getCartList(); 
      }
    },
    update(skuId, skuNum, e) {
      console.log(skuId, skuNum, e.target.value);
      //为了减少发请求的次数
      if (e.target.value === skuNum) {
        return; //就是不发请求
      }
      //发送请求
      this.getAddToCartCount({ skuId, skuNum: e.target.value - skuNum });
    },
    formatSkuNum(e) {
      // console.log(e)
      let skuNum = +e.target.value.replace(/\D+/g, "");
      if (skuNum < 1) {
        skuNum = 1;
      } else if (skuNum > 10) {
        skuNum = 10;
      }
      e.target.value = skuNum;
    },
    //选中商品的状态
    async checkState(skuId, isCheck) {
      const isChecked = isCheck === 1 ? 0 : 1;
      console.log(isChecked);
      await this.updateCheckCart({ skuId, isChecked });
      this.getCartList();
    },
    toTrade() {
      this.$router.push("/trade");
    },
  },
  mounted() {
    this.getCartList();
  },
};
</script>

<style lang="less" scoped>
.cart {
  width: 1200px;
  margin: 0 auto;

  h4 {
    margin: 9px 0;
    font-size: 14px;
    line-height: 21px;
  }

  .cart-main {
    .cart-th {
      background: #f5f5f5;
      border: 1px solid #ddd;
      padding: 10px;
      overflow: hidden;

      & > div {
        float: left;
      }

      .cart-th1 {
        input {
          vertical-align: middle;
        }

        span {
          vertical-align: middle;
        }
      }

      .cart-th2 {
        width: 27%;
      }

      .cart-th3,
      .cart-th4,
      .cart-th5,
      .cart-th6 {
        width: 12.5%;
      }
    }

    .cart-body {
      margin: 15px 0;
      border: 1px solid #ddd;

      .cart-list {
        padding: 10px;
        border-bottom: 1px solid #ddd;
        overflow: hidden;

        & > li {
          float: left;
        }

        .cart-list-con1 {
          width: 4.1667%;
        }

        .cart-list-con2 {
          width: 25%;

          img {
            width: 82px;
            height: 82px;
            float: left;
          }

          .item-msg {
            float: left;
            width: 150px;
            margin: 0 10px;
            line-height: 18px;
          }
        }

        .cart-list-con3 {
          width: 20.8333%;

          .item-txt {
            text-align: center;
          }
        }

        .cart-list-con4 {
          width: 12.5%;
        }

        .cart-list-con5 {
          width: 12.5%;

          .mins {
            outline: none;
            border: 1px solid #ddd;
            border-right: 0;
            float: left;
            color: #666;
            /* width: 6px; */
            text-align: center;
            padding: 8px;
          }

          input {
            border: 1px solid #ddd;
            width: 40px;
            height: 31px;
            float: left;
            text-align: center;
            font-size: 14px;
          }

          .plus {
            outline: none;
            border: 1px solid #ddd;
            border-left: 0;
            float: left;
            color: #666;
            /* width: 6px; */
            text-align: center;
            padding: 8px;
          }
        }

        .cart-list-con6 {
          width: 12.5%;

          .sum {
            font-size: 16px;
          }
        }

        .cart-list-con7 {
          width: 12.5%;

          a {
            color: #666;
          }
        }
      }
    }
  }

  .cart-tool {
    overflow: hidden;
    border: 1px solid #ddd;

    .select-all {
      padding: 10px;
      overflow: hidden;
      float: left;

      span {
        vertical-align: middle;
      }

      input {
        vertical-align: middle;
      }
    }

    .option {
      padding: 10px;
      overflow: hidden;
      float: left;

      a {
        float: left;
        padding: 0 10px;
        color: #666;
      }
    }

    .money-box {
      float: right;

      .chosed {
        line-height: 26px;
        float: left;
        padding: 0 10px;
      }

      .sumprice {
        width: 200px;
        line-height: 22px;
        float: left;
        padding: 0 10px;

        .summoney {
          color: #c81623;
          font-size: 16px;
        }
      }

      .sumbtn {
        float: right;

        a {
          display: block;
          position: relative;
          width: 96px;
          height: 52px;
          line-height: 52px;
          color: #fff;
          text-align: center;
          font-size: 18px;
          font-family: "Microsoft YaHei";
          background: #e1251b;
          overflow: hidden;
        }
      }
    }
  }
}
</style>
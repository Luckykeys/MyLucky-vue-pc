<template>
  <div class="pagination">
    <button
      @click="setCurrentPager(myCurrentPage - 1)"
      :disabled="myCurrentPage <= 1"
    >
      上一页
    </button>
    <button
      :class="{ active: myCurrentPage === 1 }"
      @click="setCurrentPager(1)"
    >
      1
    </button>
    <button v-show="startEnd.start > 2">...</button>
    <button
      v-for="item in startEnd.end - startEnd.start + 1 > 1
        ? startEnd.end - startEnd.start + 1
        : 0"
      :key="item"
      :class="{ active: myCurrentPage === startEnd.start + item - 1 }"
      @click="setCurrentPager(startEnd.start + item - 1)"
    >
      {{ startEnd.start + item - 1 }}
    </button>
    <button v-show="startEnd.end < totalPages - 1">...</button>
    <button
      v-show="totalPages > 1"
      :class="{ active: myCurrentPage === totalPages }"
      @click="setCurrentPager(totalPages)"
    >
      {{ totalPages }}
    </button>
    <button
      @click="setCurrentPager(myCurrentPage + 1)"
      :disabled="myCurrentPage >= totalPages"
    >
      下一页
    </button>
    <button>总数:{{ total }}</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    currentPage: {
      //当前点击的页数是在第几页，默认是再第一页
      type: Number,
      default: 1,
    },
    pagerCount: {
      //可以点的按钮的个数，不包括两个“...”,默认是7个
      type: Number,
      validator(val) {
        return val >= 5 && val <= 21 && val % 2 === 1;
      },
      default: 7,
    },
    pageSize: {
      //每页显示多少条数据/每页多少张图片的展示
      type: Number,
      default: 5,
    },
    total: {
      type: Number,
      default: 0,
    },
  },
  //因为props的数据只读不可修改，所以需要修改数据的话应该定义在data中
  data() {
    return {
      //data初始化数据只会处理一次
      myCurrentPage: this.currentPage,
    };
  },
  computed: {
    //计算需要的总页数：总共的条数/每页需要多少条数据
    totalPages() {
      return Math.ceil(this.total / this.pageSize);
    },
    //计算中间的按钮的第一个到后面一个的按钮值
    startEnd() {
      //1.按中的按钮在最左边 1...3,4,[5],6,7,8...10
      //2.按中的按钮在中间   1,[2],3,4,5,6...10
      //3.按中的按钮在最右边 1...5,6,7,8,[9],10
      let start, end;
      const { myCurrentPage, pagerCount, totalPages } = this;
      //定义一个count表示除了两边的按钮之外中间的按钮
      const count = pagerCount - 2;
      //定义一个点中的按钮的左右两边的差值，而这里一共可以点击的按钮已经默认为7，所以是7-2/2，再向下取整
      const halfCount = Math.floor(count / 2);
      //先计算start
      if (myCurrentPage > totalPages - halfCount) {
        start = totalPages - count;
      } else {
        start = myCurrentPage - halfCount;
      }
      if (start <= 1) {
        start = 2;
      }
      end = start + count - 1;
      //判断最后一个值如果大于总页数的时候
      if (end >= totalPages) {
        end = totalPages - 1;
      }
      return {
        start,
        end,
      };
    },
  },
  watch: {
    //每次页码发生变化的时候发送数据,才会触发watch
    myCurrentPage(currentPage) {
      this.$emit("current-change", currentPage);
    },
    currentPage(currentPage) {
      this.myCurrentPage=currentPage;
    },
  },
  methods: {
    //点击按钮传入点击的值
    setCurrentPager(currentPage) {
      this.myCurrentPage = currentPage;
    },
  },
};
</script>

<style lang="less" scoped>
.pagination {
  display: flex;
  white-space: nowrap;
  font-weight: 700;
  button {
    margin: 0 5px;
    padding: 0 4px;
    font-size: 13px;
    min-width: 30px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: none;
    outline: none;
    display: block;
    background-color: #f4f4f5;
    color: #606266;
    border-radius: 2px;
  }
}
button.active {
  background-color: #409eff;
  color: #fff;
}
</style>

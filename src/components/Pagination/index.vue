<template>
  <div class="pagination">
    <button>上一页</button>
    <button class="active">1</button>
    <button>2</button>
    <button>3</button>
    <button>4</button>
    <button>5</button>
    <button>下一页</button>
    <button>总数：xxx</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
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
</style>

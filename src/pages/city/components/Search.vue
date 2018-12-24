<template>
  <div>
    <van-search placeholder="请输入搜索关键词" v-model="value" background="#1989fa"></van-search>
  </div>
</template>
<script>
export default {
  name: "CityHeader",
  data() {
    return {
      value: null
    };
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
@import "~@/assets/styles/var.scss";
</style>
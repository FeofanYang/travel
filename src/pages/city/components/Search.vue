<template>
  <div>
    <van-search placeholder="请输入搜索关键词" v-model="value" background="#1989fa"></van-search>
    <div class="search-content" ref="search" v-show="value">
      <ul>
        <li v-for="item in list" :key="item.id" class="van-hairline--bottom">{{item.name}}</li>
        <li v-show="!list.length">没有搜索到结果</li>
      </ul>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  name: "CitySearch",
  props: {
    cities: Object
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.search);
  },
  data() {
    return {
      value: null,
      list: [],
      timer: null
    };
  },
  watch: {
    value() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (!this.value) {
        this.list = [];
        return;
      }
      this.timer = setTimeout(() => {
        const res = [];
        for (let i in this.cities) {
          this.cities[i].forEach(element => {
            if (
              element.spell.indexOf(this.value) > -1 ||
              element.name.indexOf(this.value) > -1
            ) {
              res.push(element);
            }
          });
        }
        this.list = res;
      }, 100);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~@/assets/styles/var.scss";
.search-content {
  position: absolute;
  top: 90px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  z-index: 1;
  overflow: hidden;
}
.search-content li {
  padding: 0.1rem;
  width: 100%;
  font-size: 0.22rem;
}
</style>
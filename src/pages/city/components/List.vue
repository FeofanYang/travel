<template>
  <div>
    <div class="list" ref="wrapper">
      <div>
        <div class="area">
          <div class="title">您的位置</div>
          <div class="button-list">
            <div class="button van-hairline--surround">北京</div>
          </div>
        </div>
        <div class="hot">
          <div class="title">热门城市</div>
          <div class="button-list">
            <div class="button van-hairline--surround">北京</div>
            <div class="button van-hairline--surround">北京</div>
            <div class="button van-hairline--surround">北京</div>
            <div class="button van-hairline--surround">北京</div>
            <div class="button van-hairline--surround">北京</div>
            <div class="button van-hairline--surround">北京</div>
            <div class="button van-hairline--surround">北京</div>
          </div>
        </div>
        <div class="all">
          <div class="title">A</div>
          <div class="item-list">
            <div class="item van-hairline--bottom">啊拉尔</div>
            <div class="item van-hairline--bottom">啊拉尔</div>
            <div class="item van-hairline--bottom">啊拉尔</div>
            <div class="item van-hairline--bottom">啊拉尔</div>
            <div class="item van-hairline--bottom">啊拉尔</div>
            <div class="item van-hairline--bottom">啊拉尔</div>
            <div class="item van-hairline--bottom">啊拉尔</div>
            <div class="item van-hairline--bottom">啊拉尔</div>
            <div class="item van-hairline--bottom">啊拉尔</div>
            <div class="item van-hairline--bottom">啊拉尔</div>
            <div class="item van-hairline--bottom">啊拉尔</div>
            <div class="item van-hairline--bottom">啊拉尔</div>
            <div class="item van-hairline--bottom">啊拉尔</div>
            <div class="item van-hairline--bottom">啊拉尔</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  name: "CityList",
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper);
  },
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
.list {
  position: absolute;
  top: 90px;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
}
.title {
  padding: 0.1rem;
  background-color: $background-color;
  color: $text-color;
}
.button-list {
  padding: 0.2rem 0.6rem 0.2rem 0.2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.button {
  margin: 0.1rem 0;
  padding: 0.05rem 0;
  width: 30%;
  text-align: center;
  font-size: 0.22rem;
}
.item {
  padding: 0.1rem;
  width: 100%;
  font-size: 0.22rem;
}
</style>
<template>
  <div class="cityHeader">
    <van-row class="header">
      <van-col @click.native="onClickLeft" span="4" class="left">
        <van-icon name="arrow-left"></van-icon>返回
      </van-col>
      <van-col span="16" class="title">城市选择</van-col>
    </van-row>
  </div>
</template>
<script>
export default {
  name: "CityHeader",
  methods: {
    onClickLeft() {
      this.$router.push({ name: "Home" });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~@/assets/styles/var.scss";
.header {
  display: flex;
  align-items: center;
  width: 100%;
  height: 46px;
  font-size: 0.24rem;
  color: $white;
  background-color: $blue;
}
.header .title,
.header .left {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
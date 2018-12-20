<template>
  <div>
    <div class="header">
      <van-icon name="arrow-left" class="header__left"/>
      <van-search placeholder="输入城市/景点/游玩内容" v-model="value" class="header__input"/>
      <div class="header__city">
        {{this.city}}
        <i class="el-icon-caret-bottom"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeHeader",
  props: {
    city: String
  },
  data() {
    return {
      value: null
    };
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/var.scss";
.header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 0.8rem;
  font-size: 0.24rem;
  color: $white;
  background-color: $blue;
}
.header__input {
  padding: 0;
  width: 70%;
  font-size: 0.24rem;
}
</style>
<template>
  <div>
    <div class="header">
      <van-search placeholder="输入城市/景点/游玩内容" v-model="value" class="header__input"/>
      <router-link to="/city">
        <div class="header__city">
          {{this.$store.state.city}}
          <van-icon name="arrow-down"></van-icon>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeHeader",
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
  height: $topBarH;
  font-size: 0.24rem;
  color: $white;
  background-color: $blue;
}
.header__input {
  padding: 0;
  width: 70%;
  font-size: 0.24rem;
}
.header__city {
  color: $white;
}
</style>
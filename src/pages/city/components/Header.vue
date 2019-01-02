<template>
  <div>
    <van-nav-bar title="城市选择" left-text="返回" left-arrow @click-left="onClickLeft" :border="false"></van-nav-bar>
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
.van-nav-bar {
	background-color: $blue;
	color: $white;
}
</style>
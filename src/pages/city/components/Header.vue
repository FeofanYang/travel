<template>
  <div class="header">
    <router-link to="/"><van-icon name="arrow-left" class="header__left"/></router-link>
    <p>城市选择</p>
  </div>
</template>
<script>
export default {
  name: "CityHeader"
};
</script>
<style lang="scss" scoped>
@import "~@/assets/styles/var.scss";
.header {
	position: relative;
  height: $topBarH;
  text-align: center;
  line-height: $topBarH;
  color: $white;
  background-color: $blue;
}
.header__left {
  position: absolute;
	left: $distance;
	top: 50%;
	transform: translate(0,-50%);
	width: .26rem;
	color: $white;
}
</style>
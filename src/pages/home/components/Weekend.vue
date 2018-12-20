<template>
  <div>
    <p class="title">周末去哪</p>
    <ul>
      <li v-for="item in list" :key="item.id">
        <div class="item__imgWrap">
          <img :src="item.img" class="item__img">
        </div>
        <div class="item__info">
          <p v-text="item.title" class="item__title"></p>
          <p v-text="item.desc" class="item__desc"></p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "HomeWeekend",
	props:{
		list: Array
	}
};
</script>
<style lang="scss" scoped>
@import "~@/assets/styles/var.scss";
.title {
  line-height: 0.8rem;
  background-color: $background-color;
  text-indent: $distance;
}
.item__imgWrap {
  padding-bottom: 40%;
  height: 0;
  overflow: hidden;
}
.item__img {
  width: 100%;
}
.item__info {
  margin-bottom: $distance;
  min-width: 0;
  padding: 0 $distance;
}
.item__title {
  font-size: 0.28rem;
  font-weight: bold;
}
.item__desc {
  width: 100%;
  @include ellipsis;
}
</style>
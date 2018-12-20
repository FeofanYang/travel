<template>
  <div>
    <van-swipe :autoplay="3000" indicator-color="#fff" class="swiper">
      <van-swipe-item v-for="(item,index) in list" :key="index">
        <img :src="item">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  props: {
    list: Array
  }
};
</script>

<style scoped>
.swiper {
  height: 1.5rem;
}
.swiper img {
  width: 100%;
  height: 100%;
}
</style>
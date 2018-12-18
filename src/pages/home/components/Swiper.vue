<template>
  <div>
    <van-swipe :autoplay="3000" indicator-color="#fff" class="swiper">
      <van-swipe-item v-for="(item,index) in swiperList" :key="index">
        <img :src="item">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperList: [
        "//dimg04.c-ctrip.com/images/700s0s000000i2h4nA3C2_1536_307_25.jpg",
        "//dimg04.c-ctrip.com/images/700r0y000000mckmz7E22_1536_307_25.jpg",
        "//dimg04.c-ctrip.com/images/700g0y000000mguz55EC5_1536_307_25.jpg",
        "//dimg04.c-ctrip.com/images/700t0z000000mi0k88304_1536_307_25.jpg"
      ]
    };
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
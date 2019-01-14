<template>
  <div class="banner" @click="handleBannerClick">
    <img src="https://img1.qunarzz.com/order/comp/1805/2e/6e407f088bfb902.png" class="banner__img">
    <div class="banner__info">
      <div class="left">大连圣亚海洋世界（AAA级景区）</div>
      <div class="right">
        <van-icon name="photo-o" class="icon"></van-icon>
        <span v-text="imgArr.length"></span>
      </div>
    </div>
  </div>
</template>

<script>
import { ImagePreview } from "vant";
export default {
  name: "DetailBanner",
  data() {
    return {
      imgArr: [
        "https://img1.qunarzz.com/order/comp/1805/2e/6e407f088bfb902.png",
        "https://img1.qunarzz.com/order/comp/1805/2e/6e407f088bfb902.png"
      ]
    };
  },
  methods: {
    handleBannerClick: function() {
      ImagePreview(this.imgArr);
    }
  }
};
</script>

<style lang="scss" scoped>
.banner {
  position: relative;
  padding-bottom: 55%;
  height: 0;
  overflow: hidden;
}
.banner__img {
  width: 100%;
}
.banner__info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.3rem;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 0.7rem;
  color: #fff;
  background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
}
.banner__info .right {
  display: flex;
  align-items: center;
  padding: 0.05rem 0.2rem;
  border-radius: 15px;
  background-color: rgba(0, 0, 0, 0.8);
}
.banner__info .right .icon {
  padding-right: 0.1rem;
}
</style>
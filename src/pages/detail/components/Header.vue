<template>
  <div>
    <router-link v-show="showAbs" tag="div" to="/" class="header--fixed">
      <van-icon name="arrow-left" class="icon"></van-icon>
    </router-link>
    <div v-show="!showAbs" class="header--abs" :style="opacityStyle">
      <van-col @click.native="onClickLeft" span="4" class="left">
        <van-icon name="arrow-left"></van-icon>返回
      </van-col>
      <van-col span="16" class="title">城市详情</van-col>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailHeader",
  data() {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    };
  },
  methods: {
    handleScroll: function() {
      const top = document.documentElement.scrollTop;
      if (top > 60) {
        let opacity = top / 140;
        opacity = opacity > 1 ? 1 : opacity;
        this.opacityStyle = { opacity };
        this.showAbs = false;
      } else {
        this.showAbs = true;
      }
    },
    onClickLeft: function() {
      this.$router.push({ name: "Home" });
    }
  },
  activated() {
    window.addEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/var.scss";
.header--fixed {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0.2rem;
  top: 0.2rem;
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 0.4rem;
  background-color: rgba(0, 0, 0, 0.8);
}
.header--fixed .icon {
  font-size: 0.4rem;
  color: #fff;
}
.header--abs {
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 46px;
  font-size: 0.24rem;
  color: $white;
  background-color: $blue;
}
.header--abs .title,
.header--abs .left {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
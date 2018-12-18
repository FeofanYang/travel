<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
  </div>
</template>

<script>
import HomeHeader from "./components/Header";
import HomeSwiper from "./components/Swiper";
import HomeIcons from "./components/Icons";
import HomeRecommend from "./components/Recommend";
import HomeWeekend from "./components/Weekend";
export default {
  name: "home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.$http
        .get(
          "/api/index.json"
        )
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        })
        .then(function() {});
    }
  }
};
</script>

<style lang="scss" scoped>
</style>

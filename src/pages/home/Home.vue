<template>
  <div>
    <home-header :city="city"></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
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
  data() {
    return {
      city: "武汉",
      swiperList: [
        "//dimg04.c-ctrip.com/images/700s0s000000i2h4nA3C2_1536_307_25.jpg",
        "//dimg04.c-ctrip.com/images/700r0y000000mckmz7E22_1536_307_25.jpg",
        "//dimg04.c-ctrip.com/images/700g0y000000mguz55EC5_1536_307_25.jpg",
        "//dimg04.c-ctrip.com/images/700t0z000000mi0k88304_1536_307_25.jpg"
      ],
      recommendList: [
        {
          id: "001",
          img:
            "https://dimg05.c-ctrip.com/images/10020q000000gajaeDB6E_C_360_202.jpg",
          title: "三亚5日自由行(5钻)",
          desc:
            "暖冬避霾【销量明星 春节热卖】高星价优4晚·甄选热门度假型酒店暖冬避霾"
        },
        {
          id: "002",
          img:
            "https://dimg05.c-ctrip.com/images/10020q000000gajaeDB6E_C_360_202.jpg",
          title: "三亚5日自由行(5钻)",
          desc:
            "暖冬避霾【销量明星 春节热卖】高星价优4晚·甄选热门度假型酒店暖冬避霾"
        },
        {
          id: "003",
          img:
            "https://dimg05.c-ctrip.com/images/10020q000000gajaeDB6E_C_360_202.jpg",
          title: "三亚5日自由行(5钻)",
          desc:
            "暖冬避霾【销量明星 春节热卖】高星价优4晚·甄选热门度假型酒店暖冬避霾"
        }
      ],
      weekendList: [
        {
          id: "001",
          img:
            "https://dimg05.c-ctrip.com/images/10020q000000gajaeDB6E_C_360_202.jpg",
          title: "三亚5日自由行(5钻)",
          desc:
            "暖冬避霾【销量明星 春节热卖】高星价优4晚·甄选热门度假型酒店暖冬避霾"
        },
        {
          id: "002",
          img:
            "https://dimg05.c-ctrip.com/images/10020q000000gajaeDB6E_C_360_202.jpg",
          title: "三亚5日自由行(5钻)",
          desc:
            "暖冬避霾【销量明星 春节热卖】高星价优4晚·甄选热门度假型酒店暖冬避霾"
        },
        {
          id: "003",
          img:
            "https://dimg05.c-ctrip.com/images/10020q000000gajaeDB6E_C_360_202.jpg",
          title: "三亚5日自由行(5钻)",
          desc:
            "暖冬避霾【销量明星 春节热卖】高星价优4晚·甄选热门度假型酒店暖冬避霾"
        }
      ]
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.$http
        .get("/api/index.json")
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

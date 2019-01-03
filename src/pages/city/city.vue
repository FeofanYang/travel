<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :cities="cities" :hotCities="hotCities" :char="char"></city-list>
    <city-alphabet :cities="cities" @chooseChar="handleChooseChar"></city-alphabet>
  </div>
</template>

<script>
import CityHeader from "./components/Header";
import CitySearch from "./components/Search";
import CityList from "./components/List";
import CityAlphabet from "./components/Alphabet";
export default {
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  name: "City",
  data() {
    return {
      cities: {},
      hotCities: [],
			char: null,
    };
  },
  mounted() {
    this.getCityData();
  },
  methods: {
    getCityData: function() {
      let that = this;
      this.$http
        .get("/api/city.json")
        .then(function(res) {
          res = res.data;
          // if (res.ref && res.data) {
            const data = res.data;
            that.cities = data.cities;
            that.hotCities = data.hotCities;
          // }
        })
        .catch(function(error) {
          console.log(error);
        })
        .then(function() {});
    },
		handleChooseChar: function(char){
			this.char = char;
		}
  }
};
</script>

<style scoped>
</style>
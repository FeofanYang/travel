<template>
  <div>
    <div class="list">
      <div
        v-for="item in chars"
        :key="item"
        :ref="item"
        class="item"
        @touchstart.prevent="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        @click="handleCharClick"
      >{{item}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CityAlphabet",
  props: {
    cities: Object
  },
  data() {
    return {
      isTouchStart: false,
      startY: 0,
      timer: null
    };
  },
  computed: {
    chars() {
      const chars = [];
      for (let i in this.cities) {
        chars.push(i);
      }
      return chars;
    }
  },
  updated() {
    this.startY = this.$refs["A"][0].offsetTop;
  },
  methods: {
    handleCharClick: function(e) {
      this.$emit("chooseChar", e.target.innerText);
    },
    handleTouchStart: function() {
      this.isTouchStart = true;
    },
    handleTouchMove: function(e) {
      if (this.isTouchStart) {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 90;
          const index = Math.floor((touchY - this.startY) / 20);
          if (index >= 0 && index <= this.chars.length) {
            this.$emit("chooseChar", this.chars[index]);
          }
        }, 16);
      }
    },
    handleTouchEnd: function() {
      this.isTouchStart = false;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~@/assets/styles/var.scss";
.list{
	position: absolute;
	top: 90px;
	right: 0;
	bottom: 0;
	width: .4rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: $blue;
}
</style>
<template>
  <div>
		<div class="list">
			<div v-for="(item,key) in cities" :key="key" class="item">{{key}}</div>
		</div>
  </div>
</template>
<script>
export default {
  name: "CityAlphabet",
  props: {
    cities: Object
  },
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
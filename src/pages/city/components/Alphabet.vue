<template>
  <div>
		<div class="list">
			<div class="item">A</div>
			<div class="item">B</div>
			<div class="item">C</div>
			<div class="item">D</div>
			<div class="item">E</div>
			<div class="item">F</div>
			<div class="item">G</div>
		</div>
  </div>
</template>
<script>
export default {
  name: "CityAlphabet",
};
</script>
<style lang="scss" scoped>
@import "~@/assets/styles/var.scss";
.list{
	position: absolute;
	top: 0;
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
<template>
  <div>
    <p class="title">热销推荐</p>
    <ul>
      <li v-for="item in list" :key="item.id" class="item van-hairline--bottom">
        <img :src="item.img" class="item__img">
        <div class="item__info">
          <p v-text="item.title" class="item__title"></p>
          <p v-text="item.desc" class="item__desc"></p>
          <van-button size="small" class="item__btn">查看详情</van-button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    list: Array
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/var.scss";
.title {
  line-height: 0.8rem;
  background-color: $background-color;
  text-indent: $distance;
}
.item {
  display: flex;
  padding: $distance;
  height: 2rem;
  overflow: hidden;
}
.item__img {
  margin-right: $distance;
  width: 1.6rem;
  height: 1.6rem;
}
.item__info {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}
.item__title {
  font-size: 0.28rem;
  font-weight: bold;
}
.item__desc {
  width: 100%;
  @include ellipsis;
}
.item__btn {
  justify-self: flex-end;
}
</style>
<template>
  <div>
    <div v-for="(item,index) of list" :key="index">
      <van-cell :title="item.title" is-link></van-cell>
      <detail-list v-if="item.children" :list="item.children"></detail-list>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailList",
  data() {
    return {};
  },
  methods: {},
  props: {
    list: Array
  }
};
</script>

<style lang="scss" scoped>
</style>
<template>
  <div>
    <van-swipe :autoplay="3000" indicator-color="#fff" class="icons">
      <van-swipe-item class="icons__slides">
        <li>
          <div>
            <img src="//pic.c-ctrip.com/platform/h5/home/pic-tmh-04.png">
          </div>
          <span>签证</span>
        </li>
        <li>
          <div>
            <img src="//pic.c-ctrip.com/platform/h5/home/pic-tmh-03.png">
          </div>
          <span>周边游</span>
        </li>
        <li>
          <div>
            <img src="//pic.c-ctrip.com/platform/h5/home/pic-tmh-04.png">
          </div>
          <span>美食林</span>
        </li>
        <li>
          <div>
            <img src="//pic.c-ctrip.com/platform/h5/home/pic-tmh-03.png">
          </div>
          <span>一日游</span>
        </li>
        <li>
          <div>
            <img src="//pic.c-ctrip.com/platform/h5/home/pic-tmh-04.png">
          </div>
          <span>签证</span>
        </li>
        <li>
          <div>
            <img src="//pic.c-ctrip.com/platform/h5/home/pic-tmh-03.png">
          </div>
          <span>周边游</span>
        </li>
        <li>
          <div>
            <img src="//pic.c-ctrip.com/platform/h5/home/pic-tmh-04.png">
          </div>
          <span>美食林</span>
        </li>
        <li>
          <div>
            <img src="//pic.c-ctrip.com/platform/h5/home/pic-tmh-03.png">
          </div>
          <span>一日游</span>
        </li>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "HomeIcons"
};
</script>

<style scoped>
.icons {
  width: 100%;
  height: 3rem;
}
.icons__slides {
  display: flex;
  flex-wrap: wrap;
}
.icons__slides > li {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25%;
  height: 50%;
}
.icons__slides > li div {
  display: flex;
  align-items: center;
  width: 1rem;
  height: 1rem;
}
.icons__slides > li img {
  width: 100%;
}
</style>
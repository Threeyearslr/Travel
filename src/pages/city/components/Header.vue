<template>
  <div class="header">城市选择
    <router-link to="/">
        <div class="iconfont header-back">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader',
};
</script>

<style lang="scss" scoped>
@import '~styles/varibles.scss';

  .header{
      position: relative;
      height: 0.86rem;
      line-height: 0.86rem;
      overflow: hidden;
      text-align: center;
      color: #fff;
      background-color: $bgColor;
      font-size: 0.32rem;
      .header-back{
          position: absolute;
           width: 0.64rem;
           top: 0;
           left: 0;
           font-size: 0.4rem;
           text-align: center;
           color: #fff;
      }
  }
</style>

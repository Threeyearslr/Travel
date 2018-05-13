<template>
  <ul class="list">
    <li class="item" v-for="(value,key) of CityAlphabet" :key="key">{{key}}</li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    CityAlphabet: Object,
  },
};
</script>

<style lang="scss" scoped>
  @import '~styles/varibles';
  .list{
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: absolute;
      right: 0;
      top: 1.58rem;
      bottom: 0;
      width: 0.4rem;
      .item{
          text-align: center;
          line-height: 0.4rem;
          color: $bgColor;
      }
  }
</style>

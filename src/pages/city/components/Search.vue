<template>
  <div class="search">
      <input type="text" placeholder="输入城市名或拼音" class="search-input">
  </div>
</template>

<script>
export default {
  name: 'CitySearch',
};
</script>

<style lang="scss" scoped>
@import '~styles/varibles';
.search{
    height: 0.72rem;
    padding: 0 0.1rem;
    background-color: $bgColor;
    .search-input{
        height: 0.62rem;
        line-height: 0.62rem;
        width: 100%;
        text-align: center;
        border-radius: 0.06rem;
        color: #666;
        box-sizing: border-box;
        padding: 0.1rem;
    }
}
</style>

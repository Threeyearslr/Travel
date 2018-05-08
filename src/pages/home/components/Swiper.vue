<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
    <swiper-slide>
      <img src="../../../../static/images/002 (1).jpg" alt="" class="swiper-img" />
    </swiper-slide>
    <!--<swiper-slide v-for="item of swiperList" :key="item.id">
      <img :src="item.imgUrl" alt="" class="swiper-img" />
    </swiper-slide>-->
    <swiper-slide>
      <img src="../../../../static/images/003 (3).jpg" alt="" class="swiper-img" />
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'HomeSwiper',
  data: function(){
      return {
          swiperOption: {
            pagination: '.swiper-pagination',
            loop: true,
          },
          swiperList: [{
            id: '0001',
            imgUrl:'',
          }, {
            id: '0002',
            imgUrl:'',
          }],
      };
  },
};
</script>

<style lang="scss" scoped>
.wrapper >>> .swiper-pagination-bullet-active {
    background: #fff;
}
  .wrapper{
    overflow: hidden;
    width: 100%;
    height: 0;
    // 自动撑开
    padding-bottom: 31.25%;
    background-color: #eee;
    .swiper-img{
      width:100%;
      height: 110.94px
    }
  }
</style>

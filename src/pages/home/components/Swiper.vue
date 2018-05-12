<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
    <!-- <swiper-slide>
      <img src="http://img1.qunarzz.com/piao/fusion/1609/47/0cfdc871ac183702.jpg_750x200_f6896acd.jpg" alt="" class="swiper-img" />
    </swiper-slide> -->
    <!--<swiper-slide v-for="item of swiperList" :key="item.id">
      <img :src="item.imgUrl" alt="" class="swiper-img" />
    </swiper-slide>-->
    <swiper-slide v-for="item of list" :key="item.id">
      <img :src="item.imgUrl" alt="" class="swiper-img" />
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'HomeSwiper',
  props: {
    list: Array,
  },
  data: function(){
      return {
          swiperOption: {
            pagination: '.swiper-pagination',
            loop: true,
          },
      };
  },
  computed: {
    showSwiper() {
      return this.list.length;
    }  
  }
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

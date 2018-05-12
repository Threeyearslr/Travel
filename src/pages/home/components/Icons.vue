<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide  v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
              <img :src="item.imgUrl" alt="" srcset="">
          </div>
          <p>{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'HomeIcons',
  props: {
    list: Array,
  },
  data () {
      return {
          swiperOption: {
              autoplay: false,
          },
      };
  },
  computed: {
      pages: function(){
          const pages = [];
          this.list.forEach((item,index) => {
              const page=Math.floor(index / 8);// 向下取整
              if(!pages[page]){
                  pages[page] = [];
              }
              pages[page].push(item);
          });
          return pages;
      }
  }
};
</script>

<style lang="scss" scoped>
@import '~styles/varibles';
@import '~styles/mixins';
  .icons{
      overflow: hidden;
      height:0;
      padding-bottom: 50%;
      margin-top: 0.1rem;
      .swiper-container{
          height:0;
          padding-bottom: 50%;
      }
      .icon{
          position: relative;
          float: left;
          width: 25%;
          height: 0;
          padding-bottom: 25%;
          overflow: hidden;
          p{
              font-size:0.09rem;
          }
          .icon-img{
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0.44rem;
              box-sizing: border-box;
              padding: 0.1rem;
              img{
                height: 100%;
                display: block;
                margin: 0 auto;
              }
          }
          p{
              position: absolute;
              left: 0;
              right: 0;
              bottom: 0;
              height: 0.44rem;
              line-height: 0.44rem;
              color: $darkTextColor;
              text-align: center;
              @include ellipsis;
          }
      }
  }
</style>

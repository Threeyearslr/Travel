<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page,index) of pages" :key="index">
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
  data: function(){
    return {
        iconList: [{
            id: '0001',
            imgUrl: '../../../../static/images/icons (1).jpg',
            desc: '热门景点',
        },{
            id: '0002',
            imgUrl: '../../../../static/images/icons (2).jpg',
            desc: '滑雪季滑雪季滑雪季滑雪季',
        },{
            id: '0003',
            imgUrl: '../../../../static/images/icons (3).jpg',
            desc: '泡温泉',
        },{
            id: '0004',
            imgUrl: '../../../../static/images/icons (4).jpg',
            desc: '出去玩',
        },{
            id: '0005',
            imgUrl: '../../../../static/images/icons (5).jpg',
            desc: '影视娱乐',
        },{
            id: '0006',
            imgUrl: '../../../../static/images/icons (6).jpg',
            desc: 'KTV',
        },{
            id: '0007',
            imgUrl: '../../../../static/images/icons (7).jpg',
            desc: '吃饭',
        },{
            id: '0008',
            imgUrl: '../../../../static/images/icons (8).jpg',
            desc: '睡觉',
        },{
            id: '0009',
            imgUrl: '../../../../static/images/icons (9).jpg',
            desc: '刘昊然',
        }],
    };
  },
  computed: {
      pages: function(){
          const pages = [];
          this.iconList.forEach((item,index) => {
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

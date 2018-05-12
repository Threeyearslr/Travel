<template>
  <div>
      <div class="title">周末去哪儿</div>
      <ul>
          <li class="item" v-for="item of weekendList" :key="item.id">
              <img :src="item.imgUrl" alt="" srcset="">
              <div class="item-info">
                  <p class="item-title">{{item.title}}</p>
                  <p class="item-desc">{{item.desc}}</p>
              </div>
          </li>
      </ul>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'HomeWeekend',
  data() {
      return {
          weekendList: [{
              id: '0001',
              imgUrl: 'http://img1.qunarzz.com/sight/source/1505/19/58f233e11df7ef.jpg_r_640x214_6b42c9fc.jpg',
              title: '西安必游TOP10',
              desc: '寻长安梦，开启穿越的圆梦之旅',
          }, {
              id: '0002',
              imgUrl: 'http://img1.qunarzz.com/sight/source/1511/14/1cf5dc2ecbfc16.jpg_r_640x214_b4b3a58a.jpg',
              title: '最美丝路行',
              desc: '情系西北，中国梦丝路行',
          }, {
              id: '0003',
              imgUrl: 'http://img1.qunarzz.com/sight/source/1507/fe/679926851c309a.jpg_r_640x214_114816de.jpg',
              title: '不一样的周末',
              desc: '这个周末玩点不一样的',
          }, {
              id: '0004',
              imgUrl: 'http://img1.qunarzz.com/sight/source/1507/98/d9c848b0d7d65a.jpg_r_640x214_55778a01.jpg',
              title: '就是爱大自然',
              desc: '这个周末爬爬山，呼吸呼吸新鲜空气',
          }, ],
      };
  },
};
</script>

<style lang="scss" scoped>
@import '~styles/mixins';

  .title{
      line-height: 0.8rem;
      background-color: #eee;
      text-indent: 0.2rem;
      margin-top: 0.2rem
  }
  ul{
      .item{
          overflow: hidden;
          height: 2.9rem;
          margin-bottom: 0.3rem;
          img{
              width: 10rem;
              height: 1.9rem;
              background-size: contain;
          }
          .item-info{
              padding: 0.2rem;
              .item-title{
                    line-height: 0.54rem;
                    font-size: .28rem;
                    @include ellipsis();
                }
                .item-desc{
                    line-height: 0.4rem;
                    color: #a6a1a1;
                    @include ellipsis();
                    font-size: .2rem;
                }
          }
      }
  }
</style>

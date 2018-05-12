<template>
  <div>
      <div class="title">周末去哪儿</div>
      <ul>
          <li class="item" v-for="item of list" :key="item.id">
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
  props: {
    list: Array,
  },
};
</script>

<style lang="scss" scoped>
@import '~styles/mixins';

  .title{
      line-height: 0.8rem;
      background-color: #eee;
      text-indent: 0.2rem;
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

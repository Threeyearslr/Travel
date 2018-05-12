<template>
  <div>
      <div class="title">热销推荐</div>
      <ul>
          <li class="item border-bottom" v-for="item of list" :key="item.id">
              <img :src="item.imgUrl" class="item-img" alt="" srcset="">
              <div class="item-info">
                  <p class="item-title">{{item.title}}</p>
                  <p class="item-desc">{{item.desc}}</p>
                  <button class="item-button">查看详情</button>
              </div>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
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
          display: flex;
          height: 1.9rem;
        //   background-color: cadetblue;
          .item-img{
              width: 1.7rem;
              height: 1.7rem;
              padding: 0.1rem;
          }
          .item-info{
              flex: 1;
              padding: 0.1rem;
              min-width: 0;
              .item-title{
                  line-height: 0.54rem;
                  font-size: 0.25rem;
                  @include ellipsis();
              }
              .item-desc{
                  line-height: 0.4rem;
                  color: #aba3a3;
                  font-size: 0.21rem;
                  @include ellipsis();
              }
              .item-button{
                  background-color: #ff9300;
                    padding: 0.15rem;
                    border-radius: 0.06rem;
                    margin-top: 0.2rem;
                    color: #fff;
                    line-height: 0.1rem;
                    font-size: 0.1rem;
              }
          }
      }
  }
</style>

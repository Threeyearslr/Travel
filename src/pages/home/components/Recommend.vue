<template>
  <div>
      <div class="title">热销推荐</div>
      <ul>
          <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
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
  data() {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1505/18/18ffcca94b1b7ca2.water.jpg_200x200_9b0d2dc4.jpg',
        title: '长恨歌',
        desc: '长恨歌，这里最近很火哦',
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1411/1a/5582f9f24bc50b475a8cbda4c5ac8d24.water.jpg_200x200_a0d48950.jpg',
        title: '长恨歌',
        desc: '长恨歌，这里最近很火哦',
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1602/de/de8400021b664c5390.img.jpg_200x200_46b16057.jpg',
        title: '长恨歌',
        desc: '长恨歌，这里最近很火哦',
      }, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/db/dbd0bef45fbc36b3.img.jpg_200x200_1b88abcf.jpg',
        title: '长恨歌',
        desc: '长恨歌，这里最近很火哦',
      }, {
        id: '0005',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1412/89/66dadfb4d982e6f88abad45a3e062342.water.jpg_200x200_0443bc40.jpg',
        title: '长恨歌',
        desc: '长恨歌，这里最近很火哦',
      }, {
        id: '0006',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/c5/a017645d82ab89f271fdfb1bd6ecc2e0.water.jpg_200x200_2de772de.jpg',
        title: '长恨歌',
        desc: '长恨歌，这里最近很火哦',
      }],
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
                  font-size: 0.32rem;
                  @include ellipsis();
              }
              .item-desc{
                  line-height: 0.4rem;
                  color: #ccc;
                  @include ellipsis();
              }
              .item-button{
                  background-color: #ff9300;
                  padding: 0.2rem;
                  border-radius: 0.06rem;
                  margin-top: 0.2rem;
                  color: #fff;
                  line-height: 0.1rem;
              }
          }
      }
  }
</style>

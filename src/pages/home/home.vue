<template>
 <div>
     <home-header :city="city"></home-header>
     <home-swiper :list="swiperList"></home-swiper>
     <home-icons :list="iconList"></home-icons>
     <home-recommend :list="recommendList"></home-recommend>
     <home-weekend :list="weekendList"></home-weekend>
 </div>
</template>

<script>
import axios from 'axios';
import HomeHeader from './components/Header';
import HomeSwiper from './components/Swiper';
import HomeIcons from './components/Icons';
import HomeRecommend from './components/Recommend';
import HomeWeekend from './components/Weekend';

export default {
  name: 'home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend,
  },
  data() {
    return {
      city: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
    };
  },
  mounted() {
    this.getHomeInfo();
  },
  methods: {
    getHomeInfo() {
      axios.get('/api/index.json').then(this.getHomeInfoSucc);
    },
    getHomeInfoSucc(result) {
      // res.data才是服务器返回到的所有内容
      const res = result.data;
      if (res.ret && res.data) {
        this.city = res.city;
        // console.log(res.data.iconList);
        this.swiperList = res.data.swiperList;
        this.iconList = res.data.iconList;
        this.recommendList = res.data.recommendList;
        this.weekendList = res.data.weekendList;
      }
    },
  },
};
</script>

<style></style>

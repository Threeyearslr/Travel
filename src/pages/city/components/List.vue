<template>
  <div class="list" ref="wrapper">
      <div>
        <div class="area">
          <div class="title border-topbottom">当前城市</div>
          <div class="button-list">
              <div class="button-wrapper">
                  <div class="button">北京</div>
              </div>
          </div>
      </div>
      <div class="area">
          <div class="title border-topbottom">热门城市</div>
          <div class="button-list">
              <div class="button-wrapper" v-for="item of hotCityList" :key="item.id">
                  <div class="button">{{item.name}}</div>
              </div>
          </div>
      </div>
      <div class="area" v-for="(value, key, index) in allCities" :key="index" :ref="key">
          <div class="title border-topbottom">{{key}}</div>
          <div class="item-list">
             <div class="item border-bottom" v-for="city of value" :key="city.id">{{city.name}}</div>
          </div>
      </div>
      </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll';

export default {
  name: 'CityList',
  props: {
    hotCityList: Array,
    allCities: Object,
    letter: String,
  },
  mounted() {
    this.scroll = new BetterScroll(this.$refs.wrapper);
  },
  watch: {
      letter() {
          if(this.letter){
              const ele=this.$refs[this.letter][0];
              this.scroll.scrollToElement(ele);
          }
      }
  },
};
</script>

<style lang="scss" scoped>
  @import '~styles/varibles';
  .border-topbottom,.border-bottom{
      &::before{
          border-color: #ccc;
      }
      &::after{
          border-color: #ccc;
      }
  }
  .border-bottom{
      &::before{
          border-color: #ccc;
      }
  }
  .list{
    overflow: hidden;
    position: absolute;
    top: 1.58rem;
    left: 0;
    right: 0;
    bottom: 0;
    .title{
    line-height: 0.54rem;
    background-color: #eee;
    padding-left: 0.2rem;
    color: #666;
    font-size: 0.2rem;
  }
  .button-list{
      padding: 0.1rem;
      overflow: hidden;
      padding: 0.1rem 0.6rem 0.1rem 0.1rem;
      .button-wrapper{
         float: left;
         width: 33.33%;
         .button{
            padding: 0.1rem;
            text-align: center;
            margin: 0.1rem;
            border: 0.02rem solid #ccc;
            font-size: 0.15rem;
         }
      }
  }
  .item-list{
      .item{
          line-height: 0.76rem;
          font-size: 0.24rem;
          color: #666;
          padding-left: 0.2rem;
      }
  }
  }
</style>

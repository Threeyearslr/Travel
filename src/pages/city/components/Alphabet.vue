<template>
  <ul class="list">
    <li class="item" v-for="item of letters" :key="item" :ref="item"
    @click="handleLetterClick"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd">{{item}}</li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    CityAlphabet: Object,
  },
  data() {
    return {
      touchStatus: false,
      startY: 0,
      timer: null,
    };
  },
  computed: {
    letters() {
      const letters=[];
      for (let i in this.CityAlphabet) {
        letters.push(i);
      }
      return letters;
    },
  },
  updated() {
    //数据被更新，页面完成渲染之后
    this.startY = this.$refs['A'][0].offsetTop;
  },
  methods: {
    handleLetterClick(e) {
      this.$emit('change',e.target.innerHTML);
    },
    handleTouchStart() {
      this.touchStatus=true;
    },
    handleTouchMove(e) {
      if(this.touchStatus){
        if(this.timer){
          clearTimeout(this.timer);
        }
        this.timer=setTimeout(() => {
          const touchY = e.touches[0].clientY-74;  // 相对于篮框
          const index = Math.floor((touchY-this.startY)/20);
          if(index >= 0 && index < this.letters.length) {
           this.$emit('change',this.letters[index]);
          }
        },16);
      }
    },
    handleTouchEnd() {
      this.touchStatus=false;
    }
  },
};
</script>

<style lang="scss" scoped>
  @import '~styles/varibles';
  .list{
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: absolute;
      right: 0;
      top: 1.58rem;
      bottom: 0;
      width: 0.4rem;
      .item{
          text-align: center;
          line-height: 0.4rem;
          color: $bgColor;
      }
  }
</style>

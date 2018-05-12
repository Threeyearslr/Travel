<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont">&#xe624;</div>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>
                输入城市/景点/游玩主题
        </div>
        <div class="header-right">
            {{this.city}}
            <span class="iconfont city">&#xe64a;</span>
        </div>
    </div>
</template>

<script>
export default {
  name: 'homeHeader',
  props: {
    city: String,
  },
};
</script>

<style lang="scss" scoped>
@import '~styles/varibles';
    .header{
        display: flex;
        color: #fff;
        background-color: $bgColor;
        text-align: center;
        line-height:0.86rem;
        .header-left{
            width: 0.64rem;
            float: left;
        }
        .header-right{
            width: 1.24rem;
            float: right;
            text-align: center;
            .city{
                font-size: 0.2rem;
            }
        }
        .header-input{
            flex:1;
            background-color: #ffffff;
            border-radius: .1rem;
            margin-top:0.12rem;
            margin-left: 0.2rem;
            line-height: 0.64rem;
            height: 0.64rem;
            color: #ccc;
        }
    }
</style>

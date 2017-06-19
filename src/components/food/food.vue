<template>
  <transition name="move">
    <div class="food" v-show="showFlag" ref="food">
      <div class="food-content">
        <div class="image-header">
          <img class="image" :src="food.image">
          <div class="back" @click="hideDetail">
            <span class="icon-arrow_lift"></span>
          </div>
        </div>
        <div class="content">
          <h2 class="name">{{food.name}}</h2>
          <div class="extra">
            <span class="count">月售{{food.sellCount}}份</span><span>好评率{{food.rating}}%</span>
          </div>
          <div class="price">
            <span class="now">￥{{food.price}}</span><span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
          </div>
          <div class="cartcontrol-wrapper">
            <cartcontrol v-on:cartAdd="_drop" :food="food"></cartcontrol>
          </div>
          <transition name="fade">
            <div class="buy" v-show="!food.count || food.count === 0" @click="addFirst($event)">
              加入购物车
            </div>
          </transition>
        </div>
        <split v-show="food.info"></split>
        <div class="info" v-show="food.info">
          <h1 class="title">商品信息</h1>
          <p class="text">{{food.info}}</p>
        </div>
        <split></split>
        <div class="rating">
          <h1 class="title">商品评价</h1>
          <ratingselect :ratings="food.ratings" :select-type="selectType" :only-content="onlyContent" :desc="desc" v-on:ratingTypeSelect="selectTypeChange" v-on:onlyContentToggle="onlyContentChange"></ratingselect>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue';
  import cartcontrol from '@/components/cartcontrol/cartcontrol';
  import split from '@/components/split/split';
  import ratingselect from '@/components/ratingselect/ratingselect';
  import BScroll from 'better-scroll';
  //  const POSITIVE = 0;
  //  const NEGATIVE = 1;
  const ALL = 2;

  export default {
    props: {
      food: {
        type: Object
      }
    },
    data () {
      return {
        showFlag: false,
        selectType: ALL,
        onlyContent: true,
        desc: {
          all: '全部',
          positive: '推荐',
          negative: '吐槽'
        }
      };
    },
    methods: {
      showDetail () {
        this.showFlag = true;
        this.selectType = ALL;
        this.onlyContent = true;
        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new BScroll(this.$refs.food, {
              click: true
            });
          } else {
            this.scroll.refresh();
          }
        });
      },
      hideDetail () {
        this.showFlag = false;
      },
      addFirst (event) {
        if (!event._constructed) {
          return;
        }
        Vue.set(this.food, 'count', 1);
        this.$emit('dropFood', event.target);
        console.log(event.target);
      },
      _drop (target) {
        this.$emit('dropFood', target);
      },
      selectTypeChange (type) {
        this.selectType = type;
        console.log(this.selectType);
      },
      onlyContentChange (only) {
        this.onlyContent = only;
        console.log(this.onlyContent);
      }
    },
    components: {
      cartcontrol,
      split,
      ratingselect
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">

  .food
    position: fixed
    top: 0
    left: 0
    z-index: 30
    bottom: 48px
    width: 100%
    background: #fff
    &.move-enter-active, &.move-leave-active
      transition: all .5s
    &.move-enter, &.move-leave-active
      transform: translate3d(100%, 0, 0)
    .food-content
      .image-header
        position: relative
        width: 100%
        height: 0
        padding-top: 100%
        .image
          position: absolute
          left: 0
          top: 0
          width: 100%
          height: 100%
        .back
          position: absolute
          top: 15px
          left: 10px
          .icon-arrow_lift
            display: block
            padding: 8px
            font-size: 20px
            color: rgba(255, 255, 255, .8)
      .content
        position: relative
        margin: 18px
        .name
          height: 14px
          line-height: 14px
          font-size: 14px
          font-weight: 700
          color: rgb(7,17,27)
          margin-bottom: 8px
        .extra
          line-height: 10px
          font-size: 10px
          color: rgb(147,153,159)
          margin-bottom: 18px
          .count
            margin-right: 8px
        .price
          font-weight: 700
          line-height: 24px
          .now
            margin-right: 8px
            font-size: 14px
            color: rgb(240, 20, 20)
          .old
            text-decoration: line-through
            font-size: 10px
            color: rgb(147,153,159)
        .cartcontrol-wrapper
          position: absolute
          right: 0
          bottom: -6px
        .buy
          position: absolute
          right: 0
          bottom: 0
          padding: 0 12px
          line-height: 24px
          font-size: 10px
          border-radius: 12px
          background-color: rgb(0, 160, 220)
          color: #fff
          &.fade-enter-active, &.fade-leave-active
            transition: all .5s
          &.fade-enter, &.fade-leave-active
            opacity: 0


      .info
        padding: 18px
        .title
          line-height: 14px
          margin-bottom: 6px
          font-size: 14px
          color: rgb(7,17,27)
        .text
          line-height: 24px
          padding: 0 8px
          font-size: 12px
          color: rgb(77,85,93)
      .rating
        padding-top: 18px
        .title
          line-height: 14px
          margin-left: 18px
          font-size: 14px
          color: rgb(7,17,27)


</style>

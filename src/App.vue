<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab border-bottom-1px">
      <router-link to="/goods" tag="div" class="tab-item">商品</router-link>
      <router-link to="/ratings" tag="div" class="tab-item">评价</router-link>
      <router-link to="/seller" tag="div" class="tab-item">商家</router-link>
    </div>
    <keep-alive>
      <router-view :seller="seller"></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import header from '@/components/header/header';
  import api from '@/api';
  import {urlParse} from '@/common/js/util';

  const ERR_OK = 0;

  export default {
    data () {
      return {
        seller: {
          id: (() => {
            let queryParam = urlParse();
            return queryParam.id;
          })()
        }
      };
    },
    created () {
      api.getSeller({id: this.seller.id}).then((response) => {
        if (response.data.errno === ERR_OK) {
          this.seller = Object.assign({}, this.seller, response.data.data);
        }
      });
    },
    components: {
      'v-header': header
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "./common/stylus/mixin.styl"
#app
  .tab
    display: flex
    width: 100%
    height: 40px
    line-height: 40px
    border-bottom-1px(rgba(7,17,27,0.1))
    .tab-item
      flex: 1
      text-align: center
      font-size: 14px
      color: rgb(77,85,93)
      &.active
        color: rgb(240,40,40)
</style>

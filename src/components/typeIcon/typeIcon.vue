<template>
  <span class="icon" :class="[iconSize, wrapper, classType]"></span>
</template>

<script type="text/ecmascript-6">
  const classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];

  export default {
    props: {
      type: {
        type: Number
      },
      size: {
        type: Number
      },
      wrapper: {
        type: String
      }
    },
    computed: {
      classType () {
        return classMap[this.type];
      },
      iconSize () {
        return 'size-' + this.size;
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixin.styl'
  .icon
    display: inline-block
    vertical-align: top
    background-repeat: no-repeat
    &.size-24
      margin-right: 4px
      width: 12px
      height: 12px
      background-size: 12px 12px
      &.v-header
        &.decrease
          bg-image(decrease_1)
        &.discount
          bg-image(discount_1)
        &.guarantee
          bg-image(guarantee_1)
        &.invoice
          bg-image(invoice_1)
        &.special
          bg-image(special_1)
      &.v-goods
        &.decrease
          bg-image(decrease_3)
        &.discount
          bg-image(discount_3)
        &.guarantee
          bg-image(guarantee_3)
        &.invoice
          bg-image(invoice_3)
        &.special
          bg-image(special_3)
    &.size-32
      margin-right: 6px
      width: 16px
      height: 16px
      background-size: 16px 16px
      &.decrease
        bg-image(decrease_1)
      &.discount
        bg-image(discount_1)
      &.guarantee
        bg-image(guarantee_1)
      &.invoice
        bg-image(invoice_1)
      &.special
        bg-image(special_1)
</style>

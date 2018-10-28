<template>
  <div class="z-popover" @click="change">
    <div class="content-wrapper" v-if="visiable">
      <slot name="content"></slot>
    </div>
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: "ZPopover",
    data() {
      return {
        visiable: false
      };
    },
    methods: {
      change() {
        this.visiable = !this.visiable;
      }
    }
  };
</script>
<style lang="scss" scoped>
  .z-popover {
    display: inline-block;
    position: relative;
    .content-wrapper{
      position: absolute;
      left: 0;
      bottom: 100%;
      border: 1px solid #ddd;
    }
  }
</style>

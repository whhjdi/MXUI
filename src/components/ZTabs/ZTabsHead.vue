<template>
  <div class="z-tabs-head">
    <slot></slot>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      direction: {
        type: String,
        default: "horizontal",
        validator(value) {
          return ["horizontal", "vertical"].indexOf(value) >= 0;
        }
      }
    },
    inject: ["eventBus"]
  };
</script>
<style lang="scss" scoped>
  .z-tabs-head {
    display: flex;
    height: 40px;
    justify-content: flex-start;
    align-items: center;
    >.actions-wrapper {
      margin-left: auto;
    }
  }
</style>

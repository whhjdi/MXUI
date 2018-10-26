<template>
  <div class="z-tabs-head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: "ZTabsHead",
    props: {
      color: {
        type: String,
        default: "#3cb1ff"
      }
    },
    inject: ["eventBus"],
    mounted() {
      this.$refs.line.style.borderBottomColor = this.color;
      this.eventBus.$on("update:selected", (item, vm) => {
        let { width, height, left, top } = vm.$el.getBoundingClientRect();
        this.$refs.line.style.width = `${width}px`;
        this.$refs.line.style.left = `${left}px`;
      });
    }
  };
</script>
<style lang="scss" scoped>
  @import "@/z-css/z.scss";
  .z-tabs-head {
    display: flex;
    height: 40px;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    padding: 0 2em;
    border-bottom: 2px solid $z-border;
    > .line {
      position: absolute;
      bottom: -2px;
      border-bottom: 2px solid;
      transition: all 300ms;
    }
    > .actions-wrapper {
      margin-left: auto;
    }
  }
</style>

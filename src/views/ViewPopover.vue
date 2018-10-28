<template>
  <div>
    <z-popover>
      <template slot="content">
        <div>hello</div>
      </template>
      <z-button>click</z-button>
    </z-popover>
    <z-popover>
      <template slot="content">
        <div>hello</div>
      </template>
      <z-button>click</z-button>
    </z-popover>
  </div>
</template>
<script>
  import ZPopover from "../components/ZPopover/ZPopover.vue";
  import ZButton from "../components/ZButton/ZButton";
  export default {
    components: {
      ZPopover,
      ZButton
    }
  };
</script>
<style lang="scss" scoped>
</style>

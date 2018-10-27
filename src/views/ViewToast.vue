<template>
  <div>
    <z-button @click="showToast">toast</z-button>
  </div>
</template>
<script>
  import ZButton from "../components/ZButton/ZButton";
  export default {
    name: "ViewToast",
    components: {
      ZButton
    },
    methods: {
      showToast() {
        this.$toast("我是toast组件", {
          closeButton: {
            text: "关闭",
            callback(toast) {
              toast.close();
            }
          }
        });
      }
    }
  };
</script>

<style lang="scss" scoped>
</style>

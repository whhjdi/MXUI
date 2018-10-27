<template>
  <div class="z-toast">
    <slot></slot>
    <div class="line"></div>
    <span v-if="closeButton" class="close" @click="onCloseButton">
      {{closeButton.text}}
    </span>
  </div>
</template>
<script>
  export default {
    name: "ZToast",
    props: {
      autoClose: {
        type: Boolean,
        default: true
      },
      autoPlayDelay: {
        type: Number,
        default: 3
      },
      closeButton: {
        type: Object,
        default: () => {
          return {
            text: "关闭",
            callback(toast) {
              toast.close();
            }
          };
        }
      }
    },
    mounted() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close();
        }, this.autoPlayDelay * 1000);
      }
    },
    methods: {
      close() {
        this.$el.remove(), this.$destroy();
      },
      onCloseButton(){
        this.close()
        this.closeButton.callback()
      }
    }
  };
</script>
<style lang="scss" scoped>
  .z-toast {
    height: 32px;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    border: 1px solid #ff7477;
    background: #ff747766;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 1em;
    >.line{
      height: 100%;
      border-left:1px solid #000;
      margin-left: 1em;
    }
    >.close{
      padding-left: 1em;
      line-height:32px;
      cursor: pointer;
    }
  }
</style>

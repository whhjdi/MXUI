<template>
  <div class="z-toast" ref="toast">
    <slot v-if="enableHtml"></slot>
    <div v-else v-html="$slots.default[0]"></div>
    <div class="line" ref="line"></div>
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
      },
      enableHtml: {
        type: Boolean,
        default: false
      }
    },
    mounted() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close();
        }, this.autoPlayDelay * 1000);
      }
      this.$nextTick(() => {
        this.$refs.line.style.height = 
        `${this.$refs.toast.getBoundingClientRect().height}px`;
      });
    },
    methods: {
      close() {
        this.$el.remove(), this.$destroy();
      },
      onCloseButton() {
        this.close();
        if (this.closeButton && typeof this.closeButton.callback === "function") {
          this.closeButton.callback(this);
        }
      }
    }
  };
</script>
<style lang="scss" scoped>
  .z-toast {
    min-height: 32px;
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
    > .line {
      height: 100%;
      border-left: 1px solid #000;
      margin-left: 1em;
    }
    > .close {
      padding-left: 1em;
      line-height: 32px;
      cursor: pointer;
    }
  }
</style>

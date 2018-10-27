<template>
  <div>
    <div class="top">
      <z-button @click="showToastA">顶部弹出</z-button>
      <z-button @click="showToastB">中间弹出</z-button>
      <z-button @click="showToastC">底部弹出</z-button>
    </div>
    <div>
      <z-button @click="showToast1">默认</z-button>
      <z-button @click="showToast2" color="red">红色</z-button>
      <z-button @click="showToast3" color="purple">紫色</z-button>
      <z-button @click="showToast4" color="green">绿色</z-button>
      <z-button @click="showToast5" color="yellow">黄色</z-button>
      <z-button @click="showToast6" color="black">黑色</z-button>
    </div>

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
      showToastA() {
        this.$toast("我是默认的toast组件", {
          position: "top",
          closeButton: {
            text: "ok",
            callback(toast) {
              toast.close();
            }
          },
          autoClose: false
        });
      },
      showToastB() {
        this.$toast("我是默认的toast组件", {
          position: "middle",
          closeButton: {
            text: "ok",
            callback(toast) {
              toast.close();
            }
          },
          autoClose: false
        });
      },
      showToastC() {
        this.$toast("我是默认的toast组件", {
          position: "bottom",
          closeButton: {
            text: "ok",
            callback(toast) {
              toast.close();
            }
          },
          autoClose: false
        });
      },
      showToast1() {
        this.$toast("我是默认的toast组件", {
          position: "middle",
          closeButton: {
            text: "ok",
            callback(toast) {
              toast.close();
            }
          },
          autoClose: false
        });
      },
      showToast2() {
        this.$toast("我是红色的toast组件", {
          position: "middle",
          closeButton: {
            text: "ok",
            callback(toast) {
              toast.close();
            }
          },
          autoClose: false,
          color: "red"
        });
      },
      showToast3() {
        this.$toast("我是紫色的toast组件", {
          position: "middle",
          closeButton: {
            text: "ok",
            callback(toast) {
              toast.close();
            }
          },
          autoClose: false,
          color: "purple"
        });
      },
      showToast4() {
        this.$toast("我是绿色的toast组件", {
          position: "middle",
          closeButton: {
            text: "ok",
            callback(toast) {
              toast.close();
            }
          },
          autoClose: false,
          color: "green"
        });
      },
      showToast5() {
        this.$toast("我是黄色的toast组件", {
          position: "middle",
          closeButton: {
            text: "ok",
            callback(toast) {
              toast.close();
            }
          },
          autoClose: false,
          color: "yellow"
        });
      },
      showToast6() {
        this.$toast("我是黑色的toast组件", {
          position: "middle",
          closeButton: {
            text: "ok",
            callback(toast) {
              toast.close();
            }
          },
          autoClose: false,
          color: "black"
        });
      }
    }
  };
</script>

<style lang="scss" scoped>
.top{
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>

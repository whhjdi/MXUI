<template>
  <div class="button">
    <div>
      <h2>颜色</h2>
      <z-button>蓝色</z-button>
      <z-button color="green">绿色</z-button>
      <z-button color="yellow">黄色</z-button>
      <z-button color="purple">紫色</z-button>
      <z-button color="red">红色</z-button>
      <z-button color="black">黑色</z-button>
    </div>
    <div>
      <h2>大小</h2>
      <z-button size="small">最小</z-button>
      <z-button size="normal" color="red">普通</z-button>
      <z-button size="big" color="purple">较大</z-button>
      <z-button size="large" color="black">最大</z-button>
    </div>
    <div>
      <h2>形状</h2>
      <z-button size="small" shape="round">round</z-button>
      <z-button size="normal" shape="round" color="red">round</z-button>
      <z-button size="big" shape="round" color="purple">round</z-button>
      <z-button size="large" shape="round" color="black">round</z-button>
    </div>

    <div>
      <h2>loading</h2>
      <p>点击可改变状态</p>
      <z-button size="small" :loading="loading1" @click="loading1=!loading1">点击</z-button>
      <z-button size="normal" shape="round" color="red" :loading="loading2" @click="loading2=!loading2">点击</z-button>
      <z-button size="big" color="purple" :loading="loading3" @click="loading3=!loading3">点击</z-button>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import ZButton from "../components/ZButton/ZButton.vue";

  export default {
    components: {
      ZButton
    },
    data() {
      return {
        loading1: true,
        loading2: false,
        loading3: true
      };
    }
  };
</script>
<style lang="scss" scoped>
  .z-button-group {
    display: inline-flex;
    border: 1px solid #000;
  }
</style>


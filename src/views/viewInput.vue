<template>
  <div>
    <div>
      <h2>input的几种状态</h2>
      <z-input value="hello world"></z-input>
      <z-input placeholder="请输入用户名"></z-input>
      <z-input disabled placeholder="disabled"></z-input>
      <z-input error="error"></z-input>
    </div>
    <div>
      <h2>双向绑定</h2>
      <z-input v-model="msg"></z-input>
      <p>{{msg}}</p>
    </div>
  </div>
</template>
<script>
  import ZInput from "../components/ZInput/ZInput.vue";
  export default {
    components: {
      ZInput
    },
    data(){
      return {
        msg:'hello'
      }
    }
  };
</script>

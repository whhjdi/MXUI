<template>
  <div class="z-tabs">
    <slot></slot>
  </div>
</template>
<script>
import Vue from 'vue'
export default {
  props:{
    selected:{
      type:String,
      required:true
    }
  },
  data () {
    return {
      eventBus:new Vue()
    }
  },
  provide(){
    return {eventBus:this.eventBus}
  },
  created(){

  }
}
</script>
<style lang="scss" scoped>
.z-tabs{
  display: flex;
  
}
</style>

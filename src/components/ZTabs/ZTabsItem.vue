<template>
  <div class="z-tabs-item" @click="xxx"
  :class="classes">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    inject: ["eventBus"],
    props: {
      name: {
        type: String | Number,
        required: true
      }
    },
    data() {
      return {
        active: false
      };
    },
    computed: {
      classes() {
        return {
          active: this.active
        };
      }
    },
    created() {
      this.eventBus.$on("update:selected", name => {
        if(name===this.name){
          this.active= true
        }else{
          this.active = false
        }
      });
    },
    methods: {
      xxx() {
        this.eventBus.$emit("update:selected", this.name);
      }
    }
  };
</script>
<style lang="scss" scoped>
  .z-tabs-item {
    flex-shrink: 0;
    padding: 0 2em;
    &.active{
      color: red;
    }
  }
</style>

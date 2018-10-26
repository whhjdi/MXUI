<template>
  <div class="z-tabs-item" @click="xxx"
  :class="classes">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name:'ZTabsItem',
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
    mounted() {
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
        this.eventBus.$emit("update:selected", this.name,this);
      }
    }
  };
</script>
<style lang="scss" scoped>
  .z-tabs-item {
    padding: 0 2em;
    height: 100%;
    cursor: pointer;
    display: flex;
    align-items: center;
    &.active{
      color: red;
    }
  }
</style>

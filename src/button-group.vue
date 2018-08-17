<template>
  <div class="mx-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
	data() {
		return {}
	},
	methods: {},
	components: {}
}
</script>

<style lang="scss" scoped>
  .mx-button-group{
    display: inline-flex;
    vertical-align: middle; 
    >.mx-button{
      border-radius: 0;
      &:not(:first-child){
        margin-left: -1px;
      }
      &:first-child{
        border-top-left-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius)
      }
      &:last-child{
        border-top-right-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius)
      }
      &:hover{
        position: relative;
        z-index: 1;
      }
    }
  }
</style>

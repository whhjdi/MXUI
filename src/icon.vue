<template>
  <svg class="mx-icon" aria-hidden="true">
    <use :xlink:href="`#m-${name}`"></use>
  </svg>
</template>

<script>
export default {
  props:['name'],
	data() {
		return {}
	},
	methods: {},
	components: {}
}
</script>

<style lang="scss" scoped>
  .mx-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>

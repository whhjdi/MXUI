<template>
  <div>
    <button class="mx-button">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {

  },
  components: {
  }
}
</script>

<style lang="scss" scoped>
.mx-button {
	height: var(--button-height);
	padding: 0 1em;
	font: inherit;
	border-radius: var(--border-radius);
	border: 1px solid var(--border-color);
	background: var(--button-bg);
	&:hover {
		border-color: var(--border-color-hover);
	}
	&:active {
		background: var(--button-active-bg);
	}
	&:focus {
		outline: none;
	}
}
</style>

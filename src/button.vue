<template>
	<button class="mx-button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
		<mx-icon v-if="icon&&!loading" :name="icon" class="icon"></mx-icon>
		<mx-icon name="loading" class="loading icon" v-if="loading"></mx-icon>
		<div class="content">
			<slot></slot>
		</div>
	</button>
</template>

<script>
import Icon from './icon'
export default {
	name:'mx-button',
	props: {
		icon: {},
		iconPosition: {
			type: String,
			default: 'left',
			validator(value) {
				return !(value !== 'left' && value !== 'right')
			}
		},
		loading: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {}
	},
	methods: {},
	components: {
		'mx-icon':Icon
	}
}
</script>

<style lang="scss" scoped>
	$font-size: 14px;
	$button-height: 32px;
	$button-bg: white;
	$button-active-bg: #eee;
	$border-radius: 4px;
	$color: #333;
	$border-color: #999;
	$border-color-hover: #666;
.mx-button {
	display: inline-flex;
	justify-content: center;
	align-items: center;
	height: $button-height;
	padding: 0 1em;
	vertical-align: middle;
	font: inherit;
	border-radius: $border-radius;
	border: 1px solid $border-color;
	background: $button-bg;
	&:hover {
		border-color: $border-color-hover;
	}
	&:active {
		background: $button-active-bg;
	}
	&:focus {
		outline: none;
	}
	> .icon {
		order: 1;
		margin-left: 0;
		margin-right: 0.2em;
	}
	> .content {
		order: 2;
	}
	&.icon-right {
		> .icon {
			order: 2;
			margin-right: 0;
			margin-left: 0.2em;
		}
		> .content {
			order: 1;
		}
	}
	.loading {
		animation: spin 1s infinite linear;
	}
}
@keyframes spin {
	0% {
		transform: rotate(0);
	}
	100% {
		transform: rotate(360deg);
	}
}
</style>

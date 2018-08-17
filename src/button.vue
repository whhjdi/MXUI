<template>
		<button class="mx-button" :class="{[`icon-${iconPosition}`]:true}"
		@click="$emit('click')">
			<mx-icon v-if="icon&&!loading" :name="icon" class="icon"></mx-icon>
			<mx-icon name="loading" class="loading icon" v-if="loading"></mx-icon>
			<div class="content">
				<slot></slot>
			</div>
		</button>
</template>

<script>
export default {
	props:{
		icon:{},
		iconPosition:{
			type:String,
			default:'left',
			validator(value){
				return !(value!=='left' && value!=='right')
			}
		},
		loading:{
			type:Boolean,
			default:false
		}
	},
	data() {
		return {

		}
	},
	methods: {},
	components: {}
}
</script>

<style lang="scss" scoped>
.mx-button {
	display: inline-flex;
	justify-content: center;
	align-items: center;
	height: var(--button-height);
	padding: 0 1em;
	vertical-align: middle;
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
	>.icon{
		order:1;
		margin-left: 0;
		margin-right: 0.2em;
	}
	>.content{
		order:2;
	}
	&.icon-right{
		>.icon{
			order:2;
			margin-right: 0;
			margin-left: 0.2em;
		}
		>.content{
			order:1;
		}
	}
	.loading{
		animation: spin 1s infinite linear;
	}
}
@keyframes spin {
	0%{transform: rotate(0);}
	100%{transform:rotate(360deg);}

}
</style>

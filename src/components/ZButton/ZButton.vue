<template>
  <button class="z-button"  :class="[size,color,shape]" @click="$emit('click')">
    <svg class="icon" :class="{loading}" aria-hidden="true" v-if="loading">
      <use xlink:href="#icon-loading"></use>
    </svg>
    <div v-else>
      <slot>默认</slot>
    </div>
  </button>
</template>

<script>
  export default {
    name: "z-button",
    props: {
      size: {
        type: String,
        default: "normal"
      },
      color: {
        type: String,
        default: "default"
      },
      shape: {
        type: String,
        default: "square"
      },
      loading: {
        type: Boolean,
        default: false
      }
    },
    methods: {}
  };
</script>

<style scoped lang="scss">
  @import "@/z-css/z.scss";
  .z-button {
    display: inline-block;
    padding: 0 1em;
    color: #fff;
    &:focus {
      outline: none;
    }
    &:hover {
      opacity: 0.7;
    }
    &:active {
      background: #1899ef;
    }
  }
  //颜色
  .default {
    background: $z-button-dafault;
  }
  .red {
    background: $z-button-red;
  }
  .yellow {
    background: $z-button-yellow;
  }
  .green {
    background: $z-button-green;
  }
  .black {
    background: $z-button-black;
  }
  .purple {
    background: $z-button-purple;
  }
  //size
  .normal {
    height: 32px;
    line-height: 32px;
    border: 1px solid $z-border;
    font-size: $z-font-size;
  }
  .big {
    height: 38px;
    line-height: 38px;
    font-size: 16px;
  }
  .large {
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    width: 100%;
  }
  .small {
    height: 24px;
    line-height: 24px;
    font-size: 12px;
  }

  //形状
  .square {
    border-radius: $z-button-border-radius-square;
  }
  .round {
    border-radius: $z-button-border-radius-round;
  }
  .loading {
    padding: 0 0.5em;
    animation: spin 2s infinite linear;
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
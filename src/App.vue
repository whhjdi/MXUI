<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" >Button组件</router-link>
      <router-link to="/input">Input组件</router-link>
      <router-link to="/tabs">Tabs组件</router-link>
      <router-link to="/toast">Toast组件</router-link>
      <router-link to="/popover">popover组件</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
  #app {
    font-family: Helvetica, "Segoe UI", Tahoma, Verdana, sans-serif Arial,
      "Avenir";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  #nav {
    padding: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;
      margin: 2em;
      &.router-link-exact-active {
        color: #3cb1ff;
      }
    }
  }
</style>

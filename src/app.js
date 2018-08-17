import Vue from 'vue'
import Button from './button'
import Icon from './icon'

Vue.component('mx-button',Button)
Vue.component('mx-icon',Icon)
new Vue({
  el:'#app',
  data:{
    loading1:false,
    loading2:true
  },
  methods:{
  }
})
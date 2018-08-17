import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

Vue.component('mx-button', Button)
Vue.component('mx-icon', Icon)
Vue.component('mx-button-group', ButtonGroup)

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true
  },
  methods: {}
})
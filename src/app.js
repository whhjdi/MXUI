import Vue from 'vue'
import Button from './button'
import ButtonGroup from './button-group'
import Input from './input'

Vue.component('mx-button', Button)
Vue.component('mx-button-group', ButtonGroup)
Vue.component('mx-input', Input)

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true
  },
  methods: {
    inputChange(e){
      console.log(e)
    }
  }
})


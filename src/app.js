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

// 单元测试
import chai from 'chai'

const expect = chai.expect
{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings'
    }
  }).$mount()
  const useElement = vm.$el.querySelector('use')
  expect(useElement.getAttribute('xlink:href')).to.equal('#m-settings')
  vm.$destroy()
}
{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings',
      loading: true
    }
  }).$mount()
  const useElements = vm.$el.querySelectorAll('use')
  expect(useElements.length).to.equal(1)
  expect(useElements[0].getAttribute('xlink:href')).to.equal('#m-loading')
  vm.$destroy()
}
{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings',
    }
  }).$mount(div)
  const icon = vm.$el.querySelector('svg')
  expect(getComputedStyle(icon).order).to.eq('1')
  vm.$el.remove()
  vm.$destroy()
}
{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings',
      iconPosition: 'right'
    }
  }).$mount(div)
  const icon = vm.$el.querySelector('svg')
  expect(getComputedStyle(icon).order).to.eq('2')
  vm.$el.remove()
  vm.$destroy()
}
{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings',
    }
  }).$mount()
  vm.$on('click', function(){
    console.log('hi')
  })
  vm.$el.click()
}
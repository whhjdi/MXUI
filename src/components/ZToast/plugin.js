import ZToast from './ZToast.vue';
export default {
  install(Vue, options) {
    Vue.prototype.$toast = function (message) {
      let Constructor = Vue.extend(ZToast)
      let toast = new Constructor({
        propsData: {
          closeButton:options.closeButton
        }
      })
      toast.$slots.default = [message]
      toast.$mount()
      document.body.appendChild(toast.$el)
    }
  }
}
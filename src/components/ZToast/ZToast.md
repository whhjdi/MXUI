# ZToast 组件

## 使用指南

### 安装

```javascript
import plugin from "./components/ZToast/plugin";
Vue.use(plugin);
```

### 配置选项

```javascript
this.$toast("你想使用的message", {
  position: "middle", //middle,top,bottom
  closeButton: {
    text: "ok", //左侧关闭按钮
    //关闭按钮的回调
    callback(toast) {
      toast.close();
    }
  },
  autoClose: false, //自动关闭
  autoCloseDelay: 10, //关闭时间（单位s）
  color: "black", //toast颜色
  enableHtml: "false" //是否支持写html
});
```

### 使用示例

```html
<z-button @click="showToastA">顶部弹出</z-button>
```

```javascript
methods:{
  showToastA() {
    this.$toast("我是默认的toast组件", {
      position: "top",
      closeButton: {
        text: "ok",
        callback(toast) {
          toast.close();
        }
      },
      autoClose: false
    });
  },
}


```

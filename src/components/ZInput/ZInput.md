# ZInput 组件

## 使用指南

### 几种输入状态

z-input 可以接收 value,placeholder,disabled,error 等数据实现不同的效果

```html
<z-input value="hello world"></z-input>
<z-input placeholder="请输入用户名"></z-input>
<z-input disabled placeholder="disabled"></z-input>
<z-input error="error"></z-input>
```

### 事件

本组件监听`change`,`input`,`blur`,`focus`等事件，用户可以拿到他们传出来的数据。
并且支持 v-model 的语法

```html
<z-input v-model="msg"></z-input>
      <p>{{msg}}</p>
```

```javascript
data(){
  return {
    msg:'hello'
  }
}
```

# ZButton 组件

## 使用指南

### 颜色

精选 6 种清新有活力的配色供君选择，分别有天空蓝，清新绿，柠檬黄，高端黑，真爱紫
分别是`blue`(默认),`绿色`，`yellow`,`purple`,`red`,`black`

```html
  <z-button>蓝色</z-button>
  <z-button color="green">绿色</z-button>
  <z-button color="yellow">黄色</z-button>
  <z-button color="purple">紫色</z-button>
  <z-button color="red">红色</z-button>
  <z-button color="black">黑色</z-button>
```

### 大小

四种不同大小的按钮满足你的各种使用场景。
分别是`samll`,`normal`(默认),`big`,`large`

```html
  <z-button size="small">最小</z-button>
  <z-button size="normal" color="red">普通</z-button>
  <z-button size="big" color="purple">较大</z-button>
  <z-button size="large" color="black">最大</z-button>
```

### 形状

俩种形状好看随心,
分别是`square`和`round`

```html
  <z-button size="small" shape="round">round</z-button>
  <z-button size="normal" shape="round" color="red">round</z-button>
  <z-button size="big" shape="round" color="purple">round</z-button>
  <z-button size="large" shape="round" color="black">round</z-button>
```

### loading

可以给任意按钮添加 click 时间，展现 loading 动画

```html
  <z-button size="small" :loading="loading1" @click="loading1=!loading1">点击</z-button>
  <z-button size="normal" shape="round" color="red" :loading="loading2" @click="loading2=!loading2">点击</z-button>
  <z-button size="big" color="purple" :loading="loading3" @click="loading3=!loading3">点击</z-button>
```

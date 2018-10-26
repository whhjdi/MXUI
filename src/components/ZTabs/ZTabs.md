# ZTabs 组件

## 使用指南

### 组件使用

组件的结构如下方代码所示,本组件支持自定义颜色，包括滑动条颜色自定义和active的item颜色自定义，支持在head里添加button等其他元素，放到右边
```html
<z-tabs :selected.sync="selectedTab">
  <z-tabs-head color="#9a83da">
    <z-tabs-item name="a" activeColor="#9a83da">新闻1</z-tabs-item>
    <z-tabs-item name="b" activeColor="#9a83da">新闻2</z-tabs-item>
    <z-tabs-item name="c" activeColor="#9a83da">新闻3</z-tabs-item>
    <template slot="actions">
      <z-button color="purple">放你想放的</z-button>
    </template>
  </z-tabs-head>
  <z-tabs-content>
    <z-tabs-pane name="a">hello</z-tabs-pane>
    <z-tabs-pane name="b">你好</z-tabs-pane>
    <z-tabs-pane name="c">猴赛雷</z-tabs-pane>
  </z-tabs-content>
</z-tabs>
```

### 配色建议

蓝色:`#3cb1ff`;
红色:`#ff7477`;
绿色:`#28da99`;
紫色:`#9a83da`;
黄色:`#ffc367`;
黑色:`#324555`;


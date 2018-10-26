<template>
  <div>
    <z-tabs :selected.sync="selectedTab">
      <z-tabs-head color="#3cb1ff">
        <z-tabs-item name="a" activeColor="#3cb1ff">新闻1</z-tabs-item>
        <z-tabs-item name="b" activeColor="#3cb1ff">新闻2</z-tabs-item>
        <z-tabs-item name="c" activeColor="#3cb1ff">新闻3</z-tabs-item>
        <template slot="actions">
          <z-button>放你想放的</z-button>
        </template>
      </z-tabs-head>
      <z-tabs-content>
        <z-tabs-pane name="a">hello</z-tabs-pane>
        <z-tabs-pane name="b">你好</z-tabs-pane>
        <z-tabs-pane name="c">猴赛雷</z-tabs-pane>
      </z-tabs-content>
    </z-tabs>
    <z-tabs :selected.sync="selectedTab">
      <z-tabs-head color="#28da99">
        <z-tabs-item name="a" activeColor="#28da99">新闻1</z-tabs-item>
        <z-tabs-item name="b" activeColor="#28da99">新闻2</z-tabs-item>
        <z-tabs-item name="c" activeColor="#28da99">新闻3</z-tabs-item>
        <template slot="actions">
          <z-button color="green">放你想放的</z-button>
        </template>
      </z-tabs-head>
      <z-tabs-content>
        <z-tabs-pane name="a">hello</z-tabs-pane>
        <z-tabs-pane name="b">你好</z-tabs-pane>
        <z-tabs-pane name="c">猴赛雷</z-tabs-pane>
      </z-tabs-content>
    </z-tabs>
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
    <z-tabs :selected.sync="selectedTab">
      <z-tabs-head color="#ffc367">
        <z-tabs-item name="a" activeColor="#ffc367">新闻1</z-tabs-item>
        <z-tabs-item name="b" activeColor="#ffc367">新闻2</z-tabs-item>
        <z-tabs-item name="c" activeColor="#ffc367">新闻3</z-tabs-item>
        <template slot="actions">
          <z-button color="yellow">放你想放的</z-button>
        </template>
      </z-tabs-head>
      <z-tabs-content>
        <z-tabs-pane name="a">hello</z-tabs-pane>
        <z-tabs-pane name="b">你好</z-tabs-pane>
        <z-tabs-pane name="c">猴赛雷</z-tabs-pane>
      </z-tabs-content>
    </z-tabs>
    <z-tabs :selected.sync="selectedTab">
      <z-tabs-head color="#ff7477">
        <z-tabs-item name="a" activeColor="#ff7477">新闻1</z-tabs-item>
        <z-tabs-item name="b" activeColor="#ff7477">新闻2</z-tabs-item>
        <z-tabs-item name="c" activeColor="#ff7477">新闻3</z-tabs-item>
        <template slot="actions">
          <z-button color="red">放你想放的</z-button>
        </template>
      </z-tabs-head>
      <z-tabs-content>
        <z-tabs-pane name="a">hello</z-tabs-pane>
        <z-tabs-pane name="b">你好</z-tabs-pane>
        <z-tabs-pane name="c">猴赛雷</z-tabs-pane>
      </z-tabs-content>
    </z-tabs>
    <z-tabs :selected.sync="selectedTab">
      <z-tabs-head color="#324555">
        <z-tabs-item name="a" activeColor="#324555">新闻1</z-tabs-item>
        <z-tabs-item name="b" activeColor="#324555">新闻2</z-tabs-item>
        <z-tabs-item name="c" activeColor="#324555">新闻3</z-tabs-item>
        <template slot="actions">
          <z-button color="black">放你想放的</z-button>
        </template>
      </z-tabs-head>
      <z-tabs-content>
        <z-tabs-pane name="a">hello</z-tabs-pane>
        <z-tabs-pane name="b">你好</z-tabs-pane>
        <z-tabs-pane name="c">猴赛雷</z-tabs-pane>
      </z-tabs-content>
    </z-tabs>
  </div>
</template>
<script>
  import ZTabs from "../components/ZTabs/ZTabs";
  import ZTabsHead from "../components/ZTabs/ZTabsHead";
  import ZTabsItem from "../components/ZTabs/ZTabsItem";
  import ZTabsContent from "../components/ZTabs/ZTabsContent";
  import ZTabsPane from "../components/ZTabs/ZTabsPane";
  import ZButton from "../components/ZButton/ZButton";
  export default {
    components: {
      ZTabs,
      ZTabsHead,
      ZTabsItem,
      ZTabsContent,
      ZTabsPane,
      ZButton
    },
    data() {
      return {
        selectedTab: "a"
      };
    },
    methods: {
      changeFlex() {}
    }
  };
</script>

<template>
  <div>
    <z-tabs :selected.sync="selectedTab" direction="direction">
      <z-tabs-head>
        <z-tabs-item name="a">新闻1</z-tabs-item>
        <z-tabs-item name="b">新闻2</z-tabs-item>
        <z-tabs-item name="c">新闻3</z-tabs-item>
        <template slot="actions">
          <z-button>切换</z-button>
        </template>
      </z-tabs-head>
      <z-tabs-content>
        <z-tabs-pane name="a">1</z-tabs-pane>
        <z-tabs-pane name="b">2</z-tabs-pane>
        <z-tabs-pane name="c">3</z-tabs-pane>
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
    methods: {}
  };
</script>

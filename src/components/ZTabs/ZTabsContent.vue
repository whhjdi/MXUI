  <template>
  <div class="z-tabs-Content">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name:"ZTabsContent",
  inject:['eventBus']
}
</script>

<style lang="scss" scoped>
.z-tabs-Content{
  margin-top: 5px;
}
</style>

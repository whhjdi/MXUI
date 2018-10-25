  <template>
  <div class="z-tabs-Content">
    <slot></slot>
  </div>
</template>
<script>
export default {
  inject:['eventBus']
}
</script>

<style lang="scss" scoped>
.z-tabs-Content{
  display: flex;
  justify-content: flex-start
}
</style>

<template>
  <div>
    <div class="totals">
      <TotalsView />
    </div>
    <div class="countries">
      <Countries />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TotalsView from '@/components/TotalsView.vue'
import Countries from '@/components/Countries.vue'

export default {
  name: 'Home',
  components: {
    TotalsView,
    Countries
  }
}
</script>

<style scoped>

</style>

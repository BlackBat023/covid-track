<template>
  <div class="details">
    <h1>Country details: {{ country.data.country }}</h1>
  </div>
</template>

<script>
import { ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'Details',
  setup(){
    const country = ref({});
    const route = useRoute();

    onBeforeMount(() => {
      fetch(`https://corona.lmao.ninja/v3/covid-19/countries/${route.params.id}`)
      .then(data => {
        console.log(data);
        country.value = data;
      })
    })

  }
}
</script>

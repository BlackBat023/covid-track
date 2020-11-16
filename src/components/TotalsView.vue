<template>
    <div class="totals-wrap">
        <div class="title">
            <h2>World Statistics:</h2>
        </div>
        <div class="stats-wrap">
            <div class="cases">
                Total cases: {{ (this.data[0].data.cases / 1000000).toFixed(2) }} Million
            </div>
            <div class="critical">
                Total critical: {{ (this.data[0].data.critical / 1000).toFixed(2) }} Thousand
            </div>
            <div class="deaths">
                Total deaths: {{ (this.data[0].data.deaths / 1000000).toFixed(2) }} Million
            </div>
            <div class="recovered">
                Total recovered: {{ (this.data[0].data.recovered / 1000000).toFixed(2) }} Million
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'

export default {
    name: "TotalsView",
    props:{
        data: Array
    },
    computed:{
        ...mapState(['data'])
    },
    methods: {
        ...mapActions(['getData'])
    },
    mounted(){
        this.getData();
    }
    
}
</script>

<style scoped>


.cases, .infected, .deaths, .recovered, .critical {
  background-color: rgba(0, 0, 0, 0.20);
  padding: 5%;
  height: 130px;
  border-radius: 10px;
  box-shadow: -2px 2px 3px black;
  margin: 2px;
  font-weight: bold;
  padding: 4%;
  position: relative;
  margin-left: auto;
  margin-right: auto;
}
</style>
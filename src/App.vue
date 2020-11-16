<template>
  <div id="app">
    <div class="header">
      <Header />
    </div>
    <div class="world-totals">
      <TotalsView />
    </div>
    <div class="seperator"></div>
    <div class="country-totals">
      <Countries />
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import TotalsView from './components/TotalsView'
import Countries from './components/Countries'

export default {
  name: 'App',
  components: {
    Header,
    TotalsView,
    Countries
  },

  data: () => ({

  }),
  created() {
    
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}

.world-wrap {
  margin: 0;
  padding: 3%;
  width: 100%;
  height: auto;
  background: linear-gradient(to bottom, royalblue, white);
  display: grid;
}

.logo {
  grid-row: 1 / span 2;
  grid-column: 1;
  margin-right: 5px;
}

.title {
  grid-column: 2 / span 6;
  grid-row: 1;
  text-shadow: -1px 2px 3px white;
}

.stats-wrap {
  grid-column: 2 / span 6;
  grid-row: 2;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  grid-gap: 10px;
}

</style>

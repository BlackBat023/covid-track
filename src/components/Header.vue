<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">
        <!-- Left aligned nav -->
          COVID Track
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
//import store from '../store'
import { mapMutations } from 'vuex'

export default {
  name: 'Header',
  data(){
    return{
      newValue: ''
    }
  },
  methods: {
    ...mapMutations([
      'ADD_VALUE'
    ]),
    addValue: function() {
      this.ADD_VALUE(this.newValue)
    }
  }
}
</script>

<style scoped>

</style>
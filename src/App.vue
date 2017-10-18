<template>
  <div id="app">
    <Edit />
    <Dashboard />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import Dashboard from './components/Dashboard';
import Edit from './components/Edit';

export default {
  name: 'app',
  computed: mapGetters(['cards']),
  methods: mapActions(['storeCardData']),
  components: { Edit, Dashboard },
};
</script>

<style>
body {
  margin: 0;
}

body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

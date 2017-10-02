<template>
  <div id="app">
    <App-header />
    <Dashboard />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import AppHeader from './components/AppHeader';
import Dashboard from './components/Dashboard';

export default {
  name: 'app',
  computed: mapGetters(['cards']),
  methods: mapActions(['storeCardData']),
  components: { AppHeader, Dashboard },
};
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

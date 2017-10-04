<template>
  <div id="app">
    <EditButton />
    <EditPanel />
    <Dashboard />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import EditButton from './components/EditButton';
import Dashboard from './components/Dashboard';

import EditPanel from './components/EditPanel';

export default {
  name: 'app',
  computed: mapGetters(['cards']),
  methods: mapActions(['storeCardData']),
  components: { EditButton, Dashboard, EditPanel },
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

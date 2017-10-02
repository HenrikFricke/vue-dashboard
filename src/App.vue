<template>
  <div id="app">
    <app-header />
    <div v-for="(card, index) in cards" v-bind:key="index">
      <component v-bind:is="card.component" v-bind:store="card.store" v-bind:setKey="(key, value) => storeCardData({ index, key, value })"></component>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import AppHeader from './components/AppHeader';

export default {
  name: 'app',
  computed: mapGetters(['cards']),
  methods: mapActions(['storeCardData']),
  components: { AppHeader },
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

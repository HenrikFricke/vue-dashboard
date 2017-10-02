<template>
  <div id="dashboard">
    <div v-for="(card, index) in cards" v-bind:key="index" class="card">
      <component v-bind:is="card.component" v-bind:store="card.store" v-bind:setKey="(key, value) => storeCardData({ index, key, value })"></component>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'dashboard',
  computed: mapGetters(['cards']),
  methods: mapActions(['storeCardData']),
};
</script>

<style scoped>
#dashboard {
  display: flex;
  height: calc(100vh - 70px);
  width: 100vw;
  padding: 30px 20px;
  box-sizing: border-box;
  margin-top: 20px;
  align-content: stretch;
  flex-flow: row wrap;
  justify-content: space-around;
}

.card {
  flex-basis: 350px;
  flex: 1;
  min-width: 350px;
  border: 1px solid #D6D6D6;
  margin: 5px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.25), 0 0 -4px rgba(0, 0, 0, 0.25);
  position: relative;
}
</style>

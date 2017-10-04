<template>
  <div id="dashboard">
    <div v-for="(card, index) in cards" v-bind:key="index" class="card" v-bind:style="{ backgroundColor: card.backgroundColor }">
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
  margin-top: 40px;
  align-content: stretch;
  flex-flow: row wrap;
  justify-content: space-around;
}

.card {
  flex-basis: 350px;
  flex: 1;
  min-width: 350px;
  margin: 5px;
  border: 1px solid #F0F0F0;
  box-shadow: 0px 0px 4px rgba(245, 245, 245, 0.4), 1px 1px 4px rgba(245, 245, 245, 0.4);
  position: relative;
}
</style>

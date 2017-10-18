<template>
  <div id="dashboard">
    <div v-for="(card, index) in cards" v-bind:key="card.cardID" class="card" v-bind:style="{ backgroundColor: card.backgroundColor }">
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

<style lang="scss" scoped>
@import "../patternLib/style/index";

#dashboard {
  display: flex;
  width: 100vw;
  padding: $base*8 $base*3;
  box-sizing: border-box;
  margin-top: $base*10;
  align-content: stretch;
  flex-flow: row wrap;
  justify-content: space-around;
  position: relative;
}

@media (min-width: 400px) {
  #dashboard {
    height: calc(100vh - 70px);
  }
}

.card {
  display: flex;
  flex: 1;
  margin: 5px;
  border: 1px solid #F0F0F0;
  box-shadow: 0px 0px 4px rgba(245, 245, 245, 0.4), 1px 1px 4px rgba(245, 245, 245, 0.4);
  position: relative;
}

@media (min-width: 400px) {
  .card {
    min-width: 400px;
    flex-basis: 400px;
  }
}
</style>

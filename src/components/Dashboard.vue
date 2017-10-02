<template>
  <div id="dashboard">
    <div v-for="(card, index) in cards" v-bind:key="index" class="card" v-bind:style="{ backgroundColor: card.backgroundColor }">
      <div class="toolbar">
        <button class="toolbar-button delete" v-on:click="() => deleteCard({ index })">Delete</button>
      </div>
      <component v-bind:is="card.component" v-bind:store="card.store" v-bind:setKey="(key, value) => storeCardData({ index, key, value })"></component>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'dashboard',
  computed: mapGetters(['cards']),
  methods: mapActions(['storeCardData', 'deleteCard']),
};
</script>

<style scoped>
#dashboard {
  display: flex;
  height: calc(100vh - 70px);
  width: 100vw;
  padding: 30px 20px;
  box-sizing: border-box;
  margin-top: 15px;
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

.card:hover>.toolbar,
.card:focus>.toolbar {
  transform: scaleY(1);
}

.toolbar {
  width: 100%;
  height: 40px;
  background-color: rgba(10, 10, 10, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  transform: scaleY(0);
  transition: transform 150ms;
  transform-origin: top;
  display: flex;
  justify-content: center;
  align-items: center;
}

.toolbar-button {
  flex: 1;
  height: 100%;
  border: 0;
  background: transparent;
  color: white;
  cursor: pointer;
  font-size: 14px;
}
</style>

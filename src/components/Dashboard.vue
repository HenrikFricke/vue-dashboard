<template>
  <div id="dashboard">
    <div v-for="(card, index) in cards" v-bind:key="index" v-bind:class="{ 'card--editMode': isEditMode }" class="card" v-bind:style="{ backgroundColor: card.backgroundColor }">
      <transition name="delete">
        <button v-if="isEditMode" class="delete" v-on:click="() => deleteCard({ index })"></button>
      </transition>
      <component v-bind:is="card.component" v-bind:store="card.store" v-bind:setKey="(key, value) => storeCardData({ index, key, value })"></component>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'dashboard',
  computed: mapGetters(['cards', 'isEditMode']),
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

.card:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  background-color: rgba(255, 255, 255, 0.3);
  transition: 300ms opacity;
}

.card--editMode:after {
  opacity: 1;
}

.delete {
  position: absolute;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  top: -12px;
  left: -12px;
  background-color: darkred;
  color: white;
  border: 1px solid #F0F0F0;
  cursor: pointer;
  z-index: 30;
}

.delete:hover {
  transition: 200ms transform;
  transform: scale(1.1);
}

.delete:focus,
.delete:active {
  outline: none;
}

.delete:before,
.delete:after {
  content: '';
  width: 12px;
  height: 1px;
  position: absolute;
  background-color: white;
  top: 11px;
  left: 5px;
}

.delete:before {
  transform: rotate(45deg)
}

.delete:after {
  transform: rotate(-45deg)
}

.delete-enter-active,
.delete-leave-active {
  transition: transform 300ms cubic-bezier(.17, .67, 0, 1.64), opacity 300ms cubic-bezier(.17, .67, 0, 1.64);
}

.delete-enter,
.delete-leave-to {
  transform: scale(0.3);
  opacity: 0;
}
</style>

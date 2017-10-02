<template>
  <div id="app-header">
    <ul class="menu">
      <li class="menu-item add">
        Add
        <ul class="plugins">
          <li v-for="plugin in plugins" v-bind:key="plugin.ID" class="pluginItem" v-on:click="() => addCard({ pluginID: plugin.ID })">
            {{plugin.LABEL}}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'app-header',
  computed: mapGetters(['plugins']),
  methods: mapActions(['addCard']),
};
</script>

<style scoped>
#app-header {
  width: 100%;
  height: 45px;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.25);
  background-color: white;
  text-align: center;
}

.menu {
  height: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.menu-item {
  height: 100%;
  padding: 0 25px;
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: white;
  transition: background-color 300ms;
  border-left: 1px solid rgba(199, 199, 199, 0.3);
  position: relative;
}

.menu-item:hover {
  background-color: rgba(199, 199, 199, 0.3);
}

.menu-item.add:hover .plugins,
.menu-item.add:focus .plugins {
  transform: scaleY(1);
}

.plugins {
  position: absolute;
  top: 100%;
  right: 0;
  width: 100%;
  background-color: #D6D6D6;
  list-style: none;
  margin: 0;
  padding: 15px 0 15px 0;
  transition: transform 300ms;
  transform-origin: top;
  transform: scaleY(0);
  z-index: 100;
}
</style>

<template>
  <div id="app-header">
    <ul class="menu">
      <transition name="add">
        <li class="menu-item add" v-if="isEditMode" v-on:click="togglePluginList">
          Add
          <transition name="plugins">
            <ul class="plugins" v-if="isPluginListVisible">
              <li v-for="plugin in plugins" v-bind:key="plugin.ID" class="pluginItem" v-on:click="() => addCard({ pluginID: plugin.ID })">
                {{plugin.LABEL}}
              </li>
            </ul>
          </transition>
        </li>
      </transition>
      <li class="menu-item edit" v-on:click="toggleEditMode">
        {{!isEditMode ? 'Edit' : 'Done'}}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'app-header',
  data() {
    return {
      isPluginListVisible: false,
    };
  },
  computed: mapGetters(['plugins', 'isEditMode']),
  methods: {
    ...mapActions(['addCard', 'toggleEditMode']),
    togglePluginList() {
      this.isPluginListVisible = !this.isPluginListVisible;
    },
  },
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
  z-index: 100;
}

.plugins-enter,
.plugins-leave-to {
  transform: scaleY(0);
}

.plugins-enter-to,
.plugins-leave {
  transform: scaleY(1);
}

.add-enter-active,
.add-leave-active {
  transition: transform 100ms, opacity 100ms;
  transform-origin: right;
}

.add-enter,
.add-leave-to {
  transform: scaleX(0.2);
  opacity: 0.1;
}
</style>

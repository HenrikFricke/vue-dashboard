<template>
  <li class="listitem">
    <button class="button" v-on:click="toggleOptions">
      <slot></slot>
      <span class="arrow" v-bind:class="{ up: isOptionListOpen }"></span>
    </button>
    <ul class="options" v-if="isOptionListOpen" v-on-clickaway="hideOptions">
      <li v-for="option in options" v-bind:key="option.label">
        <button v-on:click="() => selectItem(option.id)">
          {{option.label}}
        </button>
      </li>
    </ul>
  </li>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';

export default {
  name: 'select-list-item',
  mixins: [clickaway],
  data() {
    return {
      isOptionListOpen: false,
    };
  },
  methods: {
    toggleOptions() {
      this.isOptionListOpen = !this.isOptionListOpen;
    },

    hideOptions() {
      this.isOptionListOpen = false;
    },

    selectItem(id) {
      this.isOptionListOpen = false;
      this.clickHandler(id);
    },
  },
  props: ['options', 'clickHandler'],
};
</script>

<style scoped>
.listitem {
  position: relative;
}

.button {
  display: flex;
  width: 100%;
  text-align: left;
  justify-content: space-between;
  align-items: center;
  position: relative;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 1px solid #F0F0F0;
  background-color: #f2f2f2;
  cursor: pointer;
  padding: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  font-size: 14px;
  transition: background-color 300ms;
  padding: 8px 26px 8px 16px;
}

.button:hover {
  background-color: rgba(0, 0, 0, .1);
}

.button:focus {
  outline: none;
}

.arrow {
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #787878;
}

.arrow.up {
  border-top: none;
  border-bottom: 4px solid #787878;
}

.options {
  position: absolute;
  width: 100%;
  left: 0;
  top: 100%;
  margin: 0;
  padding: 0;
  border-bottom: 1px solid #F0F0F0;
  background-color: #f2f2f2;
  list-style: none;
  z-index: 20;
}

.options li {
  display: block;
}

.options button {
  display: block;
  border: none;
  background-color: transparent;
  cursor: pointer;
  width: 100%;
  padding: 16px;
  transition: background-color 300ms;
  text-align: left;
}

.options button:hover {
  background-color: rgba(0, 0, 0, .05);
}

.options button:focus {
  outline: none;
}
</style>

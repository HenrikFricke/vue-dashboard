<template>
  <li class="listitem">
    <span class="label">
      <slot></slot>
    </span>
    <button class="more" v-on:click="toggleOptions" v-if="options">
      <span class="square"></span>
      <span class="square"></span>
      <span class="square"></span>
    </button>
    <ul class="options" v-if="isOptionListOpen" v-on-clickaway="hideOptions">
      <li v-for="option in options" v-bind:key="option.label">
        <button v-on:click="option.clickHandler">
          {{option.label}}
        </button>
      </li>
    </ul>
  </li>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';

export default {
  name: 'list-item',
  data() {
    return {
      isOptionListOpen: false,
    };
  },
  props: ['options'],
  mixins: [clickaway],
  methods: {
    toggleOptions() {
      this.isOptionListOpen = !this.isOptionListOpen;
    },

    hideOptions() {
      this.isOptionListOpen = false;
    },
  },
};
</script>

<style scoped>
.listitem {
  display: flex;
  border-bottom: 1px solid #F0F0F0;
  text-align: left;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  align-items: center;
  position: relative;
}

.label {
  padding: 16px;
}

.more {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  margin: 0;
  width: 60px;
  border-left: 1px solid #F0F0F0;
  position: relative;
  background-color: transparent;
  margin: 0;
  border-top: none;
  border-right: none;
  border-bottom: none;
  padding: 16px;
  cursor: pointer;
  transition: background-color 300ms;
}

.more:hover {
  background-color: rgba(0, 0, 0, .05);
}

.more:focus {
  outline: none;
}

.square {
  display: block;
  width: 4px;
  height: 4px;
  position: relative;
  background-color: #787878;
  margin-top: 2px;
}

.options {
  position: absolute;
  right: 20px;
  top: 80%;
  margin: 0;
  padding: 0;
  width: 100px;
  border: 1px solid #F0F0F0;
  background-color: white;
  list-style: none;
  box-shadow: 0 0 0 2px rgba(0, 0, 0, .01);
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
  padding: 8px;
  transition: background-color 300ms;
}

.options button:hover {
  background-color: rgba(0, 0, 0, .05);
}

.options button:focus {
  outline: none;
}
</style>

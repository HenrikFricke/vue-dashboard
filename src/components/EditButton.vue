<template>
  <button v-on:click="toggleEditMode">
    Edit
  </button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'edit-button',
  methods: {
    ...mapActions(['toggleEditMode']),
  },
};
</script>

<style scoped>
button {
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.25);
  background-color: white;
  text-align: center;
  border: none;
  border-bottom-left-radius: 8px;
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px 20px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 200ms;
}

button:hover {
  background-color: #EDEDED;
}

button:focus {
  outline: none;
}
</style>

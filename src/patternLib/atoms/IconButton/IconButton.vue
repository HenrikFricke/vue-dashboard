<template>
  <button v-on:click="clickHandler">
    <i class="material-icons">
      <slot />
    </i>
  </button>
</template>

<script>
export default {
  name: 'pl-icon-button',
  props: {
    clickHandler: {
      type: Function,
      default: () => null,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/index";

button {
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }
}
</style>

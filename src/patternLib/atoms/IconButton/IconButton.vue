<template>
  <button class="pl-icon-button" @click="$emit('click', $event)">
    <i class="material-icons">
      <slot />
    </i>
  </button>
</template>

<script>
export default {
  name: 'pl-icon-button',
};
</script>

<style lang="scss" scoped>
@import "../../style/index";

.pl-icon-button {
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }
}
</style>

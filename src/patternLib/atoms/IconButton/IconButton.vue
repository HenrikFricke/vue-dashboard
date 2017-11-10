<template>
  <button class="pl-icon-button" @click="$emit('click', $event)">
    <pl-icon>
      <slot />
    </pl-icon>
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
  padding: 0;
  color: inherit;

  &:focus {
    outline: none;
  }
}
</style>

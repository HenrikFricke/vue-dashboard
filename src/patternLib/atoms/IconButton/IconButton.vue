<template>
  <button :class="classes" @click="$emit('click', $event)">
    <i class="material-icons">
      <slot />
    </i>
  </button>
</template>

<script>
export default {
  name: 'pl-icon-button',
  props: {
    small: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      classes: {
        'pl-icon-button': true,
        'pl-icon-button--small': this.small,
      },
    };
  },
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

.pl-icon-button--small .material-icons {
  font-size: $font-size-xl;
}
</style>

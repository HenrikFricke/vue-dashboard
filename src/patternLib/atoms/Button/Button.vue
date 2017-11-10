<template>
  <button :class="classes" @click="$emit('click', $event)">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'pl-button',
  props: {
    small: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      classes: {
        'pl-button': true,
        'pl-button--small': this.small,
      },
    };
  },
};
</script>

<style lang="scss">
@import "@material/elevation/mdc-elevation";
@import "../../style/index";

.pl-button {
  @include mdc-elevation(1);
  background-color: $white;
  border: 1px solid $grey-500;
  padding: $base*3 $base*4;
  font-size: $font-size-base;
  cursor: pointer;
  transition: background-color $transition-time-m;

  &:hover {
    background-color: $grey-500;
  }

  &:focus {
    outline: none;
  }
}

.pl-button--small {
  font-size: $font-size-s;
  padding: $base*2 $base*3;
}
</style>

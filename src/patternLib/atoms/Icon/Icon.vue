<template>
  <i :class="classes">
    <slot />
  </i>
</template>

<script>
export default {
  name: 'pl-icon',
  props: {
    small: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      classes: {
        'material-icons': true,
        'pl-icon': true,
        'pl-icon--small': this.small,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/index";

.pl-icon--small {
  font-size: $font-size-xl;
}
</style>

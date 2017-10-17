<template>
  <div class="pl-panel">
    <header class="pl-panel__header">
      <pl-icon-button class="pl-panel__back" small v-if="showBackButton" @click="$emit('back', $event)">
        arrow_back
      </pl-icon-button>
      <slot name="header"></slot>
    </header>
    <main class="pl-panel__body">
      <slot></slot>
    </main>
  </div>
</template>

<script>
export default {
  name: 'pl-panel',
  props: {
    showBackButton: {
      type: Boolean,
      default: false,
    },
  }
};
</script>

<style lang="scss">
@import "../../style/index";

.pl-panel {
  width: inherit;
  background-color: $white;
  border: 1px solid $grey-500;
  max-height: inherit;
  height: inherit;
}

.pl-panel__header {
  background-color: $grey-500;
  color: $grey-800;
  padding: $base*3 $base*4;
  font-size: $font-size-m;
  display: flex;
  align-items: center;
}

.pl-panel__body {
  display: block;
  overflow: auto;
  max-height: calc(100% - 46px);
}

.pl-panel__back {
  margin-right: $base*2;
}
</style>

<template>
  <transition name="panel">
    <div class="panel" v-if="isVisible">
      <header class="header">
        {{title}}
      </header>
      <main class="body">
        <slot></slot>
      </main>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'pl-panel',
  props: ['isVisible', 'title'],
};
</script>

<style lang="scss" scoped>
@import "@material/elevation/mdc-elevation";
@import "../../style/index";

.panel {
  width: 100%;
  background-color: $white;
  border: 1px solid $grey-500;
  box-sizing: border-box;
  @include mdc-elevation(8);
}

.panel-enter-active {
  transition: transform $transition-time-m cubic-bezier(.05, .76, 0, 1.54), opacity $transition-time-xs;
}

.panel-leave-active {
  transition: transform $transition-time-xs, opacity $transition-time-xs;
}

.panel-leave-to,
.panel-enter {
  transform: scale(0.9);
  opacity: 0;
}

.panel-enter-to,
.panel-leave {
  transform: scale(1);
  opacity: 1;
}

.header {
  background-color: $grey-500;
  color: $grey-800;
  padding: 16px;
}

.header-title {
  margin: 0;
  padding: 16px;
}

.body {
  display: block;
  height: calc(100% - 60px);
  overflow: auto;
}
</style>

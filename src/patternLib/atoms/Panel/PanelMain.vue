<template>
  <div class="pl-panel-main">
    <header class="pl-panel-main__header">
      <slot name="header"></slot>
    </header>
    <main class="pl-panel-main__body">
      <slot></slot>
    </main>
  </div>
</template>

<script>
export default {
  name: 'pl-panel-main',
};
</script>

<style lang="scss">
@import "../../style/index";

.pl-panel-main {
  width: 100%;
  box-sizing: border-box;
}

.pl-panel-main__header {
  background-color: $grey-500;
  color: $grey-800;
  padding: $base*4;
  font-size: $font-size-m;
}

.pl-panel-main__body {
  display: block;
  overflow: auto;
}
</style>

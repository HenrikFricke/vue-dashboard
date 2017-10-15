<template>
  <div class="pl-panel-sub">
    <button class="pl-panel-sub__back" @click="$emit('back', $event)">Back</button>
    <main class="pl-panel-sub__body">
      <slot></slot>
    </main>
  </div>
</template>

<script>
export default {
  name: 'pl-panel-sub',
};
</script>

<style lang="scss">
@import "../../style/index";

.pl-panel-sub {
  width: 100%;
  box-sizing: border-box;
}

.pl-panel-sub__back {
  display: block;
  width: 100%;
  background-color: $grey-500;
  color: $grey-800;
  padding: $base*2 $base*4;
  font-size: $font-size-base;
  border: none;
  cursor: pointer;
  text-align: left;
  transition: background-color $transition-time-m;

  &:hover {
    background-color: $grey-600;
  }

  &:focus {
    outline: none;
  }
}

.pl-panel-sub__body {
  display: block;
  overflow: auto;
}
</style>

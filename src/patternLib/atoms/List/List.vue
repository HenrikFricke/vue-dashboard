<template>
  <ul class="pl-list">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: 'pl-list',
};
</script>

<style>
.pl-list {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>

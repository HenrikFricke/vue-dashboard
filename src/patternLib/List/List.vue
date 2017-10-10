<template>
  <ul>
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: 'list',
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>

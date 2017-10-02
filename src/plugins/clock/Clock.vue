<template>
  <div id="clock">
    <h1>Clock</h1>
    {{store.timezone}}
    <button v-on:click="changeTimezone">Change</button>
  </div>
</template>

<script>
export default {
  name: 'clock',
  props: ['setKey', 'store'],
  methods: {
    changeTimezone() {
      const reverse = this.$props.store.timezone.split('').reverse().join('');
      this.$props.setKey('timezone', reverse);
    },
  },
};
</script>

<style>

</style>

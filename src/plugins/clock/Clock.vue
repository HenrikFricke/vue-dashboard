<template>
  <span id="clock">
    {{time}}
  </span>
</template>

<script>
export default {
  name: 'clock',
  props: ['setKey', 'store'],
  created() {
    setInterval(() => {
      this.time = this.getTimeString();
    }, 1000);
  },
  data() {
    return {
      time: this.getTimeString(),
    };
  },
  methods: {
    getTimeString() {
      const time = new Date();
      const hours = time.getHours();
      let minutes = time.getMinutes();

      if (minutes < 10) {
        minutes = `0${minutes}`;
      }

      return `${hours}:${minutes}`;
    },
  },
};
</script>

<style scoped>
#clock {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10vh;
}
</style>

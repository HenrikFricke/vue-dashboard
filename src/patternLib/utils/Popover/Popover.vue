<template>
  <div :class="classes" :style="customStyle">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'pl-popover',
  props: {
    customClasses: Object,
    customStyle: Object,
    elevation: {
      type: Number,
      default: 0,
    },
    bottomright: {
      type: Boolean,
      default: false,
    },
    offsetX: {
      type: Number,
      default: 0,
    },
    offsetY: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      classes: {
        'pl-popover': true,
        [`pl-popover--elevation-${this.elevation}`]: true,
        ...this.customClasses,
      }
    }
  },
  mounted() {
    if (this.$parent) {
      const parentRect = this.$parent.$el.getBoundingClientRect();

      if (this.bottomright) {
        this.$el.style.top = `${parentRect.y + parentRect.height + this.offsetY}px`;
        this.$el.style.right = `${(window.innerWidth - (parentRect.x + parentRect.width)) + this.offsetX}px`;
      } else {
        this.$el.style.top = `${parentRect.y + parentRect.height + this.offsetY}px`;
        this.$el.style.left = `${parentRect.x + this.offsetX}px`;
      }

      document.body.appendChild(this.$el);
      this.$el.style.display = 'block';
    }
  },
  destroyed() {
    if (document.body.contains(this.$el) && this.$el.className.indexOf('leave') === -1) {
      document.body.removeChild(this.$el);
    }
  },
};
</script>

<style lang="scss">
@import "@material/elevation/mdc-elevation";

.pl-popover {
  position: absolute;
  z-index: 50;
  display: none;
}

@for $i from 0 through 24 {
  .pl-popover--elevation-#{$i} {
    @include mdc-elevation($i);
  }
}
</style>

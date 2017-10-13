<template>
  <div class="vertical-more-menu">
    <pl-icon-button :clickHandler="toggleMenu">
      more_vert
    </pl-icon-button>
    <transition name="menu">
      <pl-popover v-on-clickaway="toggleMenu" v-if="isOpen" :customStyle="popoverStyling" :elevation="popoverElevation" bottomright :offsetX="popoveroffsetX" :offsetY="popoveroffsetY">
        <pl-list>
          <pl-list-item v-for="(item, index) in items" :key="index" :clickHandler="item.clickHandler" small>
            {{item.label}}
          </pl-list-item>
        </pl-list>
      </pl-popover>
    </transition>
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';

export default {
  name: 'pl-vertical-more-menu',
  mixins: [clickaway],
  props: {
    items: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      isOpen: false,
      popoverStyling: {
        width: '100px',
        backgroundColor: 'white',
      },
      popoverElevation: 4,
      popoverCorner: 'bottom-right',
      popoveroffsetX: 20,
      popoveroffsetY: -5,
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/index";

.vertical-more-menu {
  display: inline;
}

.menu-enter-active,
.menu-leave-active {
  transition: transform $transition-time-xxs, opacity $transition-time-xxs;
  transform-origin: top right;
}

.menu-enter,
.menu-leave-to {
  transform: scale(0.6);
  opacity: 0;
}

.menu-leave,
.menu-enter-to {
  transform: scale(1);
  opacity: 1;
}
</style>

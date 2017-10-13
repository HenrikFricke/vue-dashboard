<template>
  <div class="pl-vertical-more-menu">
    <pl-icon-button @click="toggleMenu">
      more_vert
    </pl-icon-button>
    <transition name="pl-vertical-more-menu">
      <pl-popover v-on-clickaway="toggleMenu" v-if="isOpen" :customStyle="popoverStyling" :elevation="popoverElevation" bottomright :offsetX="popoveroffsetX" :offsetY="popoveroffsetY">
        <pl-list>
          <pl-list-item v-for="(item, index) in items" :key="index" @click="item.clickHandler" clickable small>
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

<style lang="scss">
@import "../../style/index";

.pl-vertical-more-menu {
  display: inline;
}

.pl-vertical-more-menu-enter-active,
.pl-vertical-more-menu-leave-active {
  transition: transform $transition-time-xxs, opacity $transition-time-xxs;
  transform-origin: top right;
}

.pl-vertical-more-menu-enter,
.pl-vertical-more-menu-leave-to {
  transform: scale(0.6);
  opacity: 0;
}

.pl-vertical-more-menu-leave,
.pl-vertical-more-menu-enter-to {
  transform: scale(1);
  opacity: 1;
}
</style>

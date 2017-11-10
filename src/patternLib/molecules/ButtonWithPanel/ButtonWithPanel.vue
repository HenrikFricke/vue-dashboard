<template>
  <div class="pl-button-with-panel">
    <pl-button small @click="togglePanel">
      <slot name="button"></slot>
    </pl-button>
    <transition @enter="checkPanelHeight" name="pl-button-with-panel">
      <pl-popover ref="panel" v-if="isPanelOpen" :custom-classes="popoverClasses" :elevation="panelElevation" :offsetY="panelOffsetY" bottomright>
        <slot />
      </pl-popover>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'pl-button-with-panel',
  data() {
    return {
      isPanelOpen: false,
      panelElevation: 12,
      panelOffsetY: 16,
      popoverClasses: {
        'pl-button-with-panel__popover': true,
      },
    };
  },
  methods: {
    togglePanel() {
      this.isPanelOpen = !this.isPanelOpen;
    },
    checkPanelHeight() {
      if (this.$refs.panel) {
        const heightClass = 'pl-button-with-panel__popover--height';
        const panel = this.$refs.panel.$el;
        const panelHeight = panel.getBoundingClientRect().height;
        const maxPanelHeight = window.innerHeight - 100;

        const scrollHeight = panel.querySelector('.pl-panel__body').scrollHeight;
        const clientHeight = panel.querySelector('.pl-panel__body').clientHeight;

        if (panelHeight > maxPanelHeight) {
          panel.classList.add(heightClass);
        } else if (scrollHeight <= clientHeight) {
          panel.classList.remove(heightClass);
        }

        window.requestAnimationFrame(this.checkPanelHeight);
      }
    },
  },
};
</script>

<style lang="scss">
@import "../../style/index";

.pl-button-with-panel {
  display: block;
  position: absolute;
  top: $base*4;
  right: $base*4;
  width: $base*83;
  box-sizing: border-box;
  text-align: right;
  z-index: 10;
}

.pl-button-with-panel__popover {
  width: 300px;
}

.pl-button-with-panel__popover--height {
  height: calc(100vh - #{$base*25});
}

.pl-button-with-panel-enter-active {
  transition: transform $transition-time-m cubic-bezier(.05, .76, 0, 1.54), opacity $transition-time-xs;
}

.pl-button-with-panel-leave-active {
  transition: transform $transition-time-xs, opacity $transition-time-xs;
}

.pl-button-with-panel-leave-to,
.pl-button-with-panel-enter {
  transform: scale(0.9);
  opacity: 0;
}

.pl-button-with-panel-enter-to,
.pl-button-with-panel-leave {
  transform: scale(1);
  opacity: 1;
}
</style>

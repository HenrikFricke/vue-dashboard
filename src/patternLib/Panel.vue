<template>
  <div>
    <transition name="overlay">
      <div v-show="isVisible" class="overlay"></div>
    </transition>
    <transition name="wrapper">
      <div class="panel-wrapper" v-show="isVisible">
        <transition name="panel">
          <div class="panel" v-show="isVisible">
            <div class="header">
              <h3 class="header-title">{{title}}</h3>
              <span class="header-close" v-on:click="onCloseClick"></span>
            </div>
            <div class="body">
              <slot></slot>
            </div>
          </div>
        </transition>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'panel',
  props: ['onCloseClick', 'isVisible', 'title'],
};
</script>

<style scoped>
.panel-wrapper {
  width: 100vw;
  height: 100vh;
  position: absolute;
  overflow: hidden;
  top: 0;
  right: 0;
  z-index: 50;
}

@media (min-width: 400px) {
  .panel-wrapper {
    width: 33vw;
    min-width: 400px;
  }
}

.wrapper-enter-active,
.wrapper-leave-active {
  transition: visibility 300ms;
}

.panel {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: white;
  border-left: 1px solid #F0F0F0;
  box-sizing: border-box;
}

.panel-enter-active,
.panel-leave-active {
  transition: transform 300ms;
}

.panel-leave-to,
.panel-enter {
  transform: translateX(33vw);
}

.panel-enter-to,
.panel-leave {
  transform: translateX(0);
}

.overlay {
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.4);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 40;
}

.overlay-enter-active,
.overlay-leave-active {
  transition: opacity 300ms;
}

.overlay-leave-to,
.overlay-enter {
  opacity: 0;
}

.overlay-enter-to,
.overlay-leave {
  opacity: 1;
}

.header {
  display: flex;
  background-color: mediumaquamarine;
  color: white;
  height: 60px;
  justify-content: center;
  align-items: center;
}

.header-title {
  margin: 0;
  padding: 0 16px;
}

.header-close {
  display: block;
  width: 60px;
  height: 60px;
  border-left: 1px solid #F0F0F0;
  margin-right: 0;
  margin-left: auto;
  position: relative;
  cursor: pointer;
}

.header-close:before,
.header-close:after {
  content: '';
  width: 30px;
  height: 3px;
  background-color: #F0F0F0;
  position: absolute;
  top: 28px;
  left: 15px;
  border-radius: 2px;
}

.header-close:before {
  transform: rotate(45deg);
}

.header-close:after {
  transform: rotate(-45deg);
}

.body {
  display: block;
  height: calc(100vh - 60px);
  overflow: auto;
}
</style>

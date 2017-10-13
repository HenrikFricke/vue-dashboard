<template>
  <li class="listitem" :class="classes" v-on:click="handleClick">
    <span class="label">
      <slot></slot>
    </span>
    <span class="right">
      <slot name="right"></slot>
    </span>
  </li>
</template>

<script>
export default {
  name: 'pl-list-item',
  props: {
    small: {
      type: Boolean,
      default: false,
    },
    clickHandler: {
      type: Function,
    },
  },
  data() {
    return {
      classes: {
        'listitem--small': this.small,
        'listitem--clickable': this.clickHandler,
      },
    };
  },
  methods: {
    handleClick(e) {
      if (this.clickHandler) {
        this.clickHandler(e);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/index";

.listitem {
  display: flex;
  border-bottom: 1px solid #F0F0F0;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  position: relative;
  align-items: center;
}

.listitem--clickable {
  cursor: pointer;
  transition: background-color $transition-time-m;

  &:hover {
    background-color: $grey-500;
  }
}

.listitem--small {
  border-bottom: none;

  & .label {
    padding: 8px 16px;
    font-size: 12px;
  }
}

.listitem:last-child {
  border-bottom: none;
}

.label {
  padding: 12px 16px;
  font-size: 14px;
}

.right {
  margin-right: 0;
}
</style>

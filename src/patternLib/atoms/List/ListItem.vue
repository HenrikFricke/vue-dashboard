<template>
  <li class="listitem" :class="classes" @click="handleClick">
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
    clickable: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      classes: {
        'listitem--small': this.small,
        'listitem--clickable': this.clickable,
      },
    };
  },
  methods: {
    handleClick(e) {
      if (this.clickable) {
        this.$emit('click', e);
      }
    },
  },
};
</script>

<style lang="scss">
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
    padding: $base*2 $base*4;
    font-size: $font-size-s;
  }
}

.listitem:last-child {
  border-bottom: none;
}

.label {
  padding: $base*3 $base*4;
  font-size: $font-size-base;
}

.right {
  margin-right: $base;
}
</style>

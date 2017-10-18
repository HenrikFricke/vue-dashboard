<template>
  <li class="pl-list-item" :class="classes" @click="handleClick">
    <span class="pl-list-item__label">
      <slot></slot>
    </span>
    <span class="pl-list-item__right">
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
        'pl-list-item--small': this.small,
        'pl-list-item--clickable': this.clickable,
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

.pl-list-item {
  display: flex;
  border-bottom: 1px solid #F0F0F0;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  position: relative;
  align-items: center;
}

.pl-list-item--clickable {
  cursor: pointer;
  transition: background-color $transition-time-m;

  &:hover {
    background-color: $grey-500;
  }
}

.pl-list-item--small {
  border-bottom: none;

  & .pl-list-item__label {
    padding: $base*2 $base*4;
    font-size: $font-size-s;
  }
}

.pl-list-item:last-child {
  border-bottom: none;
}

.pl-list-item__label {
  padding: $base*3 $base*4;
  font-size: $font-size-base;
}

.pl-list-item__right {
  margin-right: $base;
}
</style>

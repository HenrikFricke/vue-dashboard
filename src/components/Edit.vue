<template>
  <pl-button-with-panel>
    <span slot="button">Edit</span>
    <pl-panel :show-back-button="activeView !== 'main'" @back="showView('main')">
      <span slot="header">
        {{title}}
      </span>
      <pl-icon-button slot="header" :style="{ 'margin-left': 'auto' } " @click="showView('add')" v-if="activeView === 'main'">
        add
      </pl-icon-button>
      <pl-list v-if="activeView === 'main'">
        <pl-list-item v-for="(card, index) in cards " v-bind:key="card.cardID">
          {{card.label}}
          <pl-vertical-more-menu :style="{ 'margin-right': '24px' }" :items="cardOptions(index)" slot="right" />
        </pl-list-item>
      </pl-list>
      <pl-list v-if="activeView === 'add'">
        <pl-list-item v-for="(plugin, index) in plugins " v-bind:key="index" clickable @click="addCard(plugin.ID)">
          {{plugin.LABEL}}
        </pl-list-item>
      </pl-list>
    </pl-panel>
  </pl-button-with-panel>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'edit',
  computed: mapGetters(['cards', 'plugins']),
  data() {
    return {
      activeView: 'main',
      title: 'Your cards',
    };
  },
  methods: {
    cardOptions(index) {
      console.log([
        {
          label: 'Delete',
          clickHandler: () => this.$store.dispatch('deleteCard', { index }),
        },
      ]);

      return [
        {
          label: 'Delete',
          clickHandler: () => this.$store.dispatch('deleteCard', { index }),
        },
      ];
    },
    addCard(id) {
      this.$store.dispatch('addCard', { pluginID: id });
      this.showView('main');
    },
    showView(view) {
      switch (view) {
        case 'add': {
          this.title = 'Add a card';
          break;
        }
        default: {
          this.title = 'Your cards';
        }
      }

      this.activeView = view;
    },
  },
};
</script>

<style scoped>

</style>

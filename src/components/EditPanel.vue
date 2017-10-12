<template>
  <Panel v-bind:isVisible="isEditMode" title="Edit">
    <List v-if="isEditMode">
      <SelectListItem v-bind:options="plugins" v-bind:clickHandler="addCard">
        Add new card
      </SelectListItem>
      <ListItem v-bind:options="cardOptions(index)" v-for="(card, index) in cards" v-bind:key="card.cardID">
        {{card.label}}
      </ListItem>
    </List>
  </Panel>
</template>

<script>
import { mapGetters } from 'vuex';

import {
  List,
  ListItem,
  Panel,
  SelectListItem,
} from '../patternLib';

export default {
  name: 'edit-panel',
  computed: {
    ...mapGetters(['isEditMode', 'cards']),
    plugins() {
      return this.$store.getters.plugins.map(plugin => ({
        id: plugin.ID,
        label: plugin.LABEL,
      }));
    },
  },
  methods: {
    cardOptions(index) {
      return [
        {
          label: 'Delete',
          clickHandler: () => this.$store.dispatch('deleteCard', { index }),
        },
      ];
    },
    addCard(id) {
      this.$store.dispatch('addCard', { pluginID: id });
    },
  },
  components: { Panel, List, ListItem, SelectListItem },
};
</script>

<style scoped>

</style>

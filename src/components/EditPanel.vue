<template>
  <Panel v-bind:isVisible="isEditMode" v-bind:onCloseClick="toggleEditMode" title="Edit">
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
import { mapActions, mapGetters } from 'vuex';

import Panel from '../patternLib/Panel/Panel';
import List from '../patternLib/List/List';
import ListItem from '../patternLib/List/ListItem';
import SelectListItem from '../patternLib/List/SelectListItem';

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
    ...mapActions(['toggleEditMode']),
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

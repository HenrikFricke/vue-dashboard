<template>
  <Panel v-bind:isVisible="isEditMode" v-bind:onCloseClick="toggleEditMode" title="Edit">
    <List>
      <ListItem v-bind:options="cardOptions(index)" v-for="(card, index) in cards" v-bind:key="card.cardID">
        {{card.label}}
      </ListItem>
    </List>
  </Panel>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import Panel from '../patternLib/Panel';
import List from '../patternLib/List';
import ListItem from '../patternLib/ListItem';

export default {
  name: 'edit-panel',
  computed: mapGetters(['isEditMode', 'cards']),
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
  },
  components: { Panel, List, ListItem },
};
</script>

<style scoped>

</style>

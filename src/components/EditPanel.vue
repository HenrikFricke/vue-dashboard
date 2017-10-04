<template>
  <Panel v-bind:isVisible="isEditMode" v-bind:onCloseClick="toggleEditMode" title="Edit" />
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import Panel from '../patternLib/Panel';

export default {
  name: 'edit-panel',
  computed: mapGetters(['isEditMode']),
  methods: {
    ...mapActions(['toggleEditMode']),
  },
  components: { Panel },
};
</script>

<style scoped>

</style>

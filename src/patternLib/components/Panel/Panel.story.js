import { storiesOf } from '@storybook/vue';

import {
  List,
  ListItem,
  Panel,
} from '../../';

storiesOf('Panel', module)
  .add('default', () => ({
    template: `
      <div v-bind:style="{ 'max-width': '350px', 'margin': '0 auto' }">
        <button v-on:click="togglePanel">Toggle panel</button>
        <div v-bind:style="{ 'max-width': '350px', 'position': 'relative', 'margin-top': '30px' }">
          <Panel v-bind:title="title" v-bind:isVisible="isVisible">
            <List>
              <ListItem options="[]">Option A</ListItem>
              <ListItem options="[]">Option B</ListItem>
              <ListItem options="[]">Option C</ListItem>
            </List>
          </Panel>
        </div>
      </div>
    `,
    data() {
      return {
        isVisible: true,
      };
    },
    components: { Panel, List, ListItem },
    methods: {
      togglePanel() {
        this.isVisible = !this.isVisible;
      },
    },
    computed: {
      title: () => 'My Panel',
    },
  }));

import { storiesOf } from '@storybook/vue';

import Panel from './Panel';

storiesOf('Panel', module)
  .add('default', () => ({
    template: `
      <div>
        <button v-on:click="togglePanel">Toggle panel</button>
        <Panel v-bind:title="title" v-bind:onCloseClick="togglePanel" v-bind:isVisible="isVisible">
          <p>Hello World</p>
        </Panel>
      </div>
    `,
    data() {
      return {
        isVisible: true,
      };
    },
    components: { Panel },
    methods: {
      togglePanel() {
        this.isVisible = !this.isVisible;
      },
    },
    computed: {
      title: () => 'My Panel',
    },
  }));

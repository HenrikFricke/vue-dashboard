import { storiesOf } from '@storybook/vue';

storiesOf('Molecules/ButtonWithPanel', module)
  .add('default', () => ({
    template: `
      <pl-button-with-panel>
        <span slot="button">Click me</span>
        <span slot="panel-header">Panel</span>
        <span slot="panel-body" :style="{'height':'300px', 'display': 'block'}">Body</span>
      </pl-button-with-panel>
    `,
  }));

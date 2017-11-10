import { storiesOf } from '@storybook/vue';

storiesOf('Molecules/ButtonWithPanel', module)
  .add('default', () => ({
    template: `
      <pl-button-with-panel>
        <span slot="button">Click me</span>
        <pl-panel>
          <span slot="header">Panel</span>
          <span :style="{'height':'300px', 'display': 'block'}">Body</span>
        </pl-panel>
      </pl-button-with-panel>
    `,
  }));

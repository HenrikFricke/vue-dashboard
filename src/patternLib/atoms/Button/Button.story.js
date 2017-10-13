import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';

storiesOf('Atoms/Button', module)
  .add('default', () => ({
    template: `
      <pl-button @click="action">I'm a button</pl-icon-button>
    `,
    methods: {
      action: action('button clicked'),
    },
  }))

  .add('small', () => ({
    template: `
      <pl-button @click="action" small>I'm a button</pl-icon-button>
    `,
    methods: {
      action: action('small button clicked'),
    },
  }));

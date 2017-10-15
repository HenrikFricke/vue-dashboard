import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';

storiesOf('Atoms/IconButton', module)
  .add('default', () => ({
    template: `
      <pl-icon-button @click="action">more_vert</pl-icon-button>
    `,
    methods: {
      action: action('button clicked'),
    },
  }))

  .add('small', () => ({
    template: `
      <pl-icon-button small @click="action">more_vert</pl-icon-button>
    `,
    methods: {
      action: action('button clicked'),
    },
  }));

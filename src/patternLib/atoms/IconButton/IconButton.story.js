import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';

storiesOf('Atoms/IconButton', module)
  .add('default', () => ({
    template: `
      <pl-icon-button :clickHandler="action('button clicked')">more_vert</pl-icon-button>
    `,
    methods: {
      action,
    },
  }));

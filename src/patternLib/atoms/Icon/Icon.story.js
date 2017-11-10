import { storiesOf } from '@storybook/vue';

storiesOf('Atoms/Icon', module)
  .add('default', () => ({
    template: `
      <pl-icon>code</pl-icon>
    `,
  }));

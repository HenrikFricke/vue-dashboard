import { storiesOf } from '@storybook/vue';

storiesOf('Atoms/Icon', module)
  .add('default', () => ({
    template: `
      <pl-icon>code</pl-icon>
    `,
  }))

  .add('small', () => ({
    template: `
      <pl-icon small>code</pl-icon>
    `,
  }));

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';

storiesOf('Atoms/List', module)
  .add('default', () => ({
    template: `
      <pl-list>
        <pl-list-item>Item 1</pl-list-item>
        <pl-list-item>Item 2</pl-list-item>
        <pl-list-item>Item 3</pl-list-item>
      </pl-list>
    `,
  }))

  .add('small', () => ({
    template: `
      <pl-list>
        <pl-list-item small>Item 1</pl-list-item>
        <pl-list-item small>Item 2</pl-list-item>
        <pl-list-item small>Item 3</pl-list-item>
      </pl-list>
    `,
  }))

  .add('clickable', () => ({
    template: `
      <pl-list>
        <pl-list-item :clickHandler="action('list item')">Item 1</pl-list-item>
        <pl-list-item :clickHandler="action('list item')">Item 2</pl-list-item>
        <pl-list-item :clickHandler="action('list item')">Item 3</pl-list-item>
      </pl-list>
    `,
    methods: {
      action,
    },
  }))

  .add('with right slot', () => ({
    template: `
      <pl-list>
        <pl-list-item>
          Item 1
          <pl-icon-button slot="right">more_vert</pl-icon-button>
        </pl-list-item>
        <pl-list-item>
          Item 2
          <pl-icon-button slot="right">more_vert</pl-icon-button>
        </pl-list-item>
        <pl-list-item>
          Item 3
          <pl-icon-button slot="right">more_vert</pl-icon-button>
        </pl-list-item>
      </pl-list>
    `,
  }));

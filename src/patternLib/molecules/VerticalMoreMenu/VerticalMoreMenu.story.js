import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';

storiesOf('Molecules/VerticalMoreMenu', module)
  .add('default', () => ({
    template: `
      <div v-bind:style="{ 'max-width': '300px', 'margin': '50px auto' }">
        <pl-vertical-more-menu :items="items" />
      </div>
    `,
    data() {
      return {
        items: [
          {
            label: 'Settings',
            clickHandler: action('settings clicked'),
          },
          {
            label: 'Delete',
            clickHandler: action('delete clicked'),
          },
        ],
      };
    },
  }));

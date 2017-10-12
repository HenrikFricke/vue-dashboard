import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';

import {
  List,
  ListItem,
  SelectListItem,
} from '../../';

storiesOf('List', module)
  .add('with ListItem', () => ({
    template: `
      <List>
        <ListItem v-bind:options="options">Item 1</ListItem>
        <ListItem v-bind:options="options">Item 2</ListItem>
        <ListItem v-bind:options="options">Item 3</ListItem>
      </List>
    `,
    components: { List, ListItem },
    computed: {
      options() {
        return [
          {
            label: 'Settings',
            clickHandler: action('Settings Option'),
          },
          {
            label: 'Delete',
            clickHandler: action('Delete Option'),
          },
        ];
      },
    },
  }))

  .add('with SelectListItem', () => ({
    template: `
      <List>
        <SelectListItem v-bind:clickHandler="clickHandler" v-bind:options="options">
          Item 1
        </SelectListItem>
      </List>
    `,
    components: { List, SelectListItem },
    methods: {
      clickHandler: action('click handler'),
    },
    computed: {
      options() {
        return [
          {
            label: 'Option A',
            id: 123,
          },
          {
            label: 'Option B',
            id: 456,
          },
        ];
      },
    },
  }));

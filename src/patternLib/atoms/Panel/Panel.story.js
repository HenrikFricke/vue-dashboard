import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';

storiesOf('Atoms/Panel', module)
  .add('default', () => ({
    template: `
      <div :style="{ 'max-width': '350px', 'margin': '0 auto' }">
        <button v-on:click="togglePanel">Toggle panel</button>
        <div :style="{ 'max-width': '350px', 'position': 'relative', 'margin-top': '30px' }">
          <pl-panel :title="title" :isVisible="isVisible">
            <pl-list>
              <pl-list-item>
                Option A
                <pl-vertical-more-menu :items="items" slot="right" />
              </pl-list-item>
              <pl-list-item>
                Option B
                <pl-vertical-more-menu :items="items" slot="right" />
              </pl-list-item>
              <pl-list-item>
                Option C
                <pl-vertical-more-menu :items="items" slot="right" />
              </pl-list-item>
            </pl-list>
          </pl-panel>
        </div>
      </div>
    `,
    data() {
      return {
        title: 'My Panel',
        isVisible: true,
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
    methods: {
      togglePanel() {
        this.isVisible = !this.isVisible;
      },
    },
  }));

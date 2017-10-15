import { storiesOf } from '@storybook/vue';

storiesOf('Atoms/Panel', module)
  .add('default', () => ({
    template: `
      <div :style="{ 'max-width': '350px' }">
        <pl-panel :show-back-button="activeView !== 'main'" @back="setView('main')">
          <span slot="header">{{title}}</span>
          <pl-list v-if="activeView === 'main'">
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
          <p :style="style" v-if="activeView === 'settings'">
            Settings
          </p>
          <p :style="style" v-if="activeView === 'delete'">
            Delete
          </p>
        </pl-panel>
      </div>
    `,
    data() {
      return {
        title: 'Panel',
        style: {
          padding: '16px',
        },
        activeView: 'main',
        items: [
          {
            label: 'Settings',
            clickHandler: () => this.setView('settings'),
          },
          {
            label: 'Delete',
            clickHandler: () => this.setView('delete'),
          },
        ],
      };
    },
    methods: {
      showMain() {
        this.subOpen = false;
      },
      setView(view) {
        switch (view) {
          case 'settings': {
            this.title = 'Settings';
            break;
          }
          case 'delete': {
            this.title = 'Delete';
            break;
          }
          default: {
            this.title = 'Panel';
          }
        }

        this.activeView = view;
      },
    },
  }));

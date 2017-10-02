import Vue from 'vue';
import Vuex from 'vuex';

import { mount } from 'avoriaz';

import Dashboard from '../../../src/components/Dashboard';
import Clock from '../../../src/plugins/clock/Clock';

Vue.use(Vuex);

describe('Dashboard', () => {
  let dispatch;
  let component;
  let store;
  let cards;

  beforeEach(() => {
    cards = [
      {
        id: 'clock',
        component: Clock,
        store: {
          key: 'value',
        },
      },
      {
        id: 'todo',
        component: Clock,
        store: {
          key: 'value',
        },
      },
    ];

    store = new Vuex.Store({
      getters: {
        cards: () => cards,
      },
    });

    dispatch = jasmine.createSpy('dispatch');
    store.dispatch = dispatch;

    component = mount(Dashboard, { globals: { $store: store } });
  });

  describe('template', () => {
    describe('cards', () => {
      it('should render two cards', () => {
        expect(component.find('.card').length).toBe(2);
      });

      it('should contain component of plugin', () => {
        const card = component.find('.card')[0];

        expect(card.contains(Clock)).toBeTruthy();
      });
    });
  });
});

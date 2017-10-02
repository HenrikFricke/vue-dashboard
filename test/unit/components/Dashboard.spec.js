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
        backgroundColor: 'red',
      },
      {
        id: 'todo',
        component: Clock,
        store: {
          key: 'value',
        },
        backgroundColor: 'blue',
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

  describe('cards', () => {
    let cardElements;

    beforeEach(() => {
      cardElements = component.find('.card');
    });

    it('should render two cards', () => {
      expect(cardElements.length).toBe(2);
    });

    it('should contain component of plugin', () => {
      expect(cardElements[0].contains(Clock)).toBeTruthy();
    });

    it('should use background color', () => {
      expect(cardElements[0].hasStyle('background-color', 'red'))
        .toBeTruthy();
    });
  });

  describe('toolbar', () => {
    describe('delete button', () => {
      it('should call proper action', () => {
        const deleteButton = component.find('.toolbar-button.delete')[0];
        deleteButton.trigger('click');

        expect(dispatch).toHaveBeenCalledWith('deleteCard', { index: 0 });
      });
    });
  });
});

import Vue from 'vue';
import Vuex from 'vuex';

import { mount } from 'avoriaz';

import AppHeader from '../../../src/components/AppHeader';

Vue.use(Vuex);

describe('AppHeader', () => {
  let dispatch;
  let component;
  let store;
  let plugins;

  beforeEach(() => {
    plugins = [
      {
        ID: 'clock',
        LABEL: 'Clock',
      },
      {
        ID: 'todo',
        LABEL: 'To-do list',
      },
    ];

    store = new Vuex.Store({
      getters: {
        plugins: () => plugins,
      },
    });

    dispatch = jasmine.createSpy('dispatch');
    store.dispatch = dispatch;

    component = mount(AppHeader, { globals: { $store: store } });
  });

  describe('template', () => {
    describe('list item to add a card', () => {
      it('should be present', () => {
        expect(component.find('li.add').length).toBe(1);
      });

      it('should contain list of plugins', () => {
        const pluginItems = component.find('li.add > ul > li');
        expect(pluginItems.length).toBe(2);
      });
    });

    describe('plugin list item', () => {
      it('should have proper label', () => {
        const pluginItems = component.find('.pluginItem');

        expect(pluginItems[0].text().trim()).toBe(plugins[0].LABEL);
      });

      it('should call action on click', () => {
        const pluginItems = component.find('.pluginItem');
        pluginItems[0].trigger('click');

        expect(dispatch).toHaveBeenCalledWith('addCard', {
          pluginID: plugins[0].ID,
        });
      });
    });
  });
});

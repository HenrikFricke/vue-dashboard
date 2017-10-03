import Vue from 'vue';
import Vuex from 'vuex';

import { mount } from 'avoriaz';

import AppHeader from '../../../src/components/AppHeader';

Vue.use(Vuex);

function getComponent(store, dispatch) {
  const vuexStore = new Vuex.Store(store);

  if (dispatch) {
    vuexStore.dispatch = dispatch;
  }

  return mount(AppHeader, { globals: { $store: vuexStore } });
}

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

    store = {
      getters: {
        plugins: () => plugins,
        isEditMode: () => false,
      },
    };

    dispatch = jasmine.createSpy('dispatch');
    store.dispatch = dispatch;

    component = getComponent(store, dispatch);
  });

  describe('template', () => {
    describe('edit button', () => {
      describe('edit mode disabled', () => {
        it('should have text `Edit`', () => {
          const editButton = component.find('li.edit')[0];
          expect(editButton.text().trim()).toBe('Edit');
        });

        it('should toggle edit mode on click', () => {
          const editButton = component.find('li.edit')[0];
          editButton.trigger('click');

          expect(dispatch).toHaveBeenCalledWith('toggleEditMode', jasmine.any(Object));
        });
      });

      describe('edit mode enabled', () => {
        it('should have text `Done`', () => {
          store.getters.isEditMode = () => true;
          component = getComponent(store, dispatch);
          const editButton = component.find('li.edit')[0];

          expect(editButton.text().trim()).toBe('Done');
        });
      });
    });

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

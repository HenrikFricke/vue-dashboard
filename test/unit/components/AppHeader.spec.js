import AppHeader from '../../../src/components/AppHeader';

import getComponent from '../helpers/getComponent';

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

    dispatch = jasmine.createSpy('dispatch');
  });

  describe('edit mode enabled', () => {
    beforeEach(() => {
      store = {
        getters: {
          plugins: () => plugins,
          isEditMode: () => true,
        },
      };

      component = getComponent(AppHeader, store, dispatch);
    });

    describe('edit button', () => {
      it('should have text `Done`', () => {
        const editButton = component.find('li.edit')[0];
        expect(editButton.text().trim()).toBe('Done');
      });

      it('should toggle edit mode on click', () => {
        const editButton = component.find('li.edit')[0];
        editButton.trigger('click');

        expect(dispatch).toHaveBeenCalledWith('toggleEditMode', jasmine.any(Object));
      });
    });

    describe('add button', () => {
      it('should be present', () => {
        expect(component.find('li.add').length).toBe(1);
      });
    });
  });

  describe('edit mode disabled', () => {
    beforeEach(() => {
      store = {
        getters: {
          plugins: () => plugins,
          isEditMode: () => false,
        },
      };

      component = getComponent(AppHeader, store, dispatch);
    });

    describe('edit button', () => {
      it('should have text `Edit`', () => {
        const editButton = component.find('li.edit')[0];

        expect(editButton.text().trim()).toBe('Edit');
      });
    });

    describe('add button', () => {
      it('should not be present', () => {
        expect(component.find('li.add').length).toBe(0);
      });
    });
  });
});

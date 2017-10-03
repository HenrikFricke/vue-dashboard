import Dashboard from '../../../src/components/Dashboard';
import Clock from '../../../src/plugins/clock/Clock';

import getComponent from '../helpers/getComponent';

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

    store = {
      getters: {
        cards: () => cards,
        isEditMode: () => false,
      },
    };

    dispatch = jasmine.createSpy('dispatch');

    component = getComponent(Dashboard, store, dispatch);
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

  describe('delete button', () => {
    describe('edit mode disabled', () => {
      it('should not be present', () => {
        expect(component.find('.delete').length).toBe(0);
      });
    });

    describe('edit mode enabled', () => {
      beforeEach(() => {
        store.getters.isEditMode = () => true;
        component = getComponent(Dashboard, store, dispatch);
      });

      it('should be present', () => {
        expect(component.find('.delete').length).toBeGreaterThan(0);
      });

      it('should call proper action', () => {
        const deleteButton = component.find('.delete')[0];
        deleteButton.trigger('click');

        expect(dispatch).toHaveBeenCalledWith('deleteCard', { index: 0 });
      });
    });
  });
});

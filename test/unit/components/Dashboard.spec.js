import Dashboard from '../../../src/components/Dashboard';
import Clock from '../../../src/plugins/clock/Clock';

import getComponent from '../helpers/getComponent';

describe('Dashboard', () => {
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
      },
    };

    component = getComponent(Dashboard, store);
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
});

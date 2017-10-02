import * as getters from '../../../src/store/getters';
import { initialState } from '../../../src/store/state';

describe('Getters', () => {
  let state;

  beforeEach(() => {
    state = initialState();
  });

  describe('cards', () => {
    it('should return cards with corresponding component', () => {
      const plugin = {
        ID: 'plugin',
        component: () => null,
      };

      const card = {
        id: plugin.ID,
        store: {},
      };

      state.plugins.push(plugin);
      state.cards.push(card);

      expect(getters.cards(state)).toEqual([{
        ...card,
        component: plugin.component,
      }]);
    });
  });
});

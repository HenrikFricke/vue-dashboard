import * as getters from '../getters';
import { initialState } from '../state';

describe('Getters', () => {
  let state;

  beforeEach(() => {
    state = initialState();
  });

  describe('cards', () => {
    it('should return cards with corresponding component', () => {
      const plugin = {
        ID: 'plugin',
        LABEL: 'Plugin',
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
        label: plugin.LABEL,
        component: plugin.component,
      }]);
    });
  });

  describe('randomCardBackgroundColor', () => {
    it('should return random color of list', () => {
      const color = getters.randomCardBackgroundColor(state);
      expect(state.cardBackgroundColors.includes(color)).toBeTruthy();
    });
  });

  describe('isEditMode', () => {
    it('should return false', () => {
      expect(getters.isEditMode(state)).toBeFalsy();
    });
  });
});

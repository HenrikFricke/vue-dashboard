import * as mutations from '../../../src/store/mutations';

import { initialState } from '../../../src/store/state';

describe('Mutations', () => {
  let state;

  beforeEach(() => {
    state = initialState();
  });

  describe('addPlugin', () => {
    it('should append plugin to array', () => {
      const plugin = {
        ID: 'plugin name',
      };

      mutations.addPlugin(state, { plugin });
      expect(state.plugins).toContain(plugin);
    });
  });

  describe('addCard', () => {
    it('should add card', () => {
      //eslint-disable-next-line
      const mutationsInject = require('inject-loader!../../../src/store/mutations');

      const addCard = mutationsInject({
        './getters': {
          randomCardBackgroundColor: () => 'red',
        },
      }).addCard;

      const cardInitialState = {
        key: 'value',
      };

      const plugin = {
        ID: 'plugin name',
        initialDataStore() {
          return cardInitialState;
        },
      };

      mutations.addPlugin(state, { plugin });
      addCard(state, { pluginID: plugin.ID });

      expect(state.cards[0]).toEqual({
        id: plugin.ID,
        store: cardInitialState,
        backgroundColor: 'red',
      });
    });
  });

  describe('storeCardData', () => {
    it('should store value in storage of the corresponding card', () => {
      const plugin = {
        ID: 'plugin name',
        initialDataStore() {
          return {};
        },
      };

      mutations.addPlugin(state, { plugin });
      mutations.addCard(state, { pluginID: plugin.ID });

      mutations.storeCardData(state, { index: 0, key: 'key', value: 'value' });

      expect(state.cards[0].store.key).toEqual('value');
    });
  });

  describe('deleteCard', () => {
    it('should delete card in array', () => {
      const card1 = {
        id: 0,
      };

      const card2 = {
        id: 1,
      };

      const card3 = {
        id: 2,
      };

      state.cards.push(card1);
      state.cards.push(card2);
      state.cards.push(card3);

      mutations.deleteCard(state, { index: 1 });
      expect(state.cards).toEqual([
        card1,
        card3,
      ]);
    });
  });
});

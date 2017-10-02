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
      mutations.addCard(state, { pluginID: plugin.ID });

      expect(state.cards[0]).toEqual({
        id: plugin.ID,
        store: cardInitialState,
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
});

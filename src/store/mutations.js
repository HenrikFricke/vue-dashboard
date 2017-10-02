import { randomCardBackgroundColor } from './getters';

export function addCard(state, payload) {
  const plugin = state.plugins.filter(p => p.ID === payload.pluginID)[0];
  const backgroundColor = randomCardBackgroundColor(state);

  state.cards.push({
    id: payload.pluginID,
    store: plugin.initialDataStore(),
    backgroundColor,
  });
}

export function addPlugin(state, payload) {
  state.plugins.push(payload.plugin);
}

export function storeCardData(state, payload) {
  state.cards[payload.index].store = {
    ...state.cards[payload.index].store,
    [payload.key]: payload.value,
  };
}

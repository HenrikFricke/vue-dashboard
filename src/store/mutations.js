export function addCard(state, payload) {
  const plugin = state.plugins.filter(p => p.ID === payload.pluginID)[0];

  state.cards.push({
    id: payload.pluginID,
    store: plugin.initialDataStore(),
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

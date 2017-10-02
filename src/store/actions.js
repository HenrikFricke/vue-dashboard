export function addCard({ commit }, payload) {
  commit('addCard', payload);
}

export function addPlugin({ commit }, payload) {
  commit('addPlugin', payload);
}

export function storeCardData({ commit }, payload) {
  commit('storeCardData', payload);
}

export function deleteCard({ commit }, payload) {
  commit('deleteCard', payload);
}

export function addCard({ commit }, payload) {
  commit('addCard', payload);
  commit('persistCards');
}

export function addPlugin({ commit }, payload) {
  commit('addPlugin', payload);
}

export function storeCardData({ commit }, payload) {
  commit('storeCardData', payload);
  commit('persistCards');
}

export function deleteCard({ commit }, payload) {
  commit('deleteCard', payload);
  commit('persistCards');
}

export function loadCardsFromStorage({ commit }) {
  commit('loadCardsFromStorage');
}

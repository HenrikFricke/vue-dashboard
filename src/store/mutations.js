import Vue from 'vue';

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

export function deleteCard(state, payload) {
  state.cards = [
    ...state.cards.slice(0, payload.index),
    ...state.cards.slice(payload.index + 1),
  ];
}

export function persistCards(state) {
  window.localStorage.setItem('cards', JSON.stringify(state.cards));
}

export function loadCardsFromStorage(state) {
  const cards = window.localStorage.getItem('cards');

  if (cards) {
    Vue.set(state, 'cards', JSON.parse(cards));
  }
}

export function toggleEditMode(state) {
  state.isEditMode = !state.isEditMode;
}

import Vue from 'vue';
import Vuex from 'vuex';

import { mount } from 'avoriaz';

Vue.use(Vuex);

export default function getComponent(component, store, dispatch) {
  const vuexStore = new Vuex.Store(store);

  if (dispatch) {
    vuexStore.dispatch = dispatch;
  }

  return mount(component, { globals: { $store: vuexStore } });
}

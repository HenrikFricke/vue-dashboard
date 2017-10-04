import Vue from 'vue';
import Vuex from 'vuex';

import { shallow } from 'avoriaz';

Vue.use(Vuex);

export default function getComponent(component, store, dispatch, propsData) {
  const vuexStore = new Vuex.Store(store);

  if (dispatch) {
    vuexStore.dispatch = dispatch;
  }

  return shallow(component, { globals: { $store: vuexStore }, propsData });
}

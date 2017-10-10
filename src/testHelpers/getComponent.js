import Vue from 'vue';
import Vuex from 'vuex';

import { mount } from 'avoriaz';

Vue.use(Vuex);

export default function getComponent(component, storeData, options) {
  const store = new Vuex.Store(storeData);
  return mount(component, {
    store,
    ...options,
  });
}

import Vue from 'vue';
import Vuex from 'vuex';

import { shallow } from 'avoriaz';

Vue.use(Vuex);

export default function getComponent(component, storeData, options) {
  const store = new Vuex.Store(storeData);
  return shallow(component, {
    store,
    ...options,
  });
}

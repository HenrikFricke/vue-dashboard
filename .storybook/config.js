import Vue from 'vue';
import { configure } from '@storybook/vue'

import patternLibrary from '../src/patternLib';
Vue.use(patternLibrary);

function loadStories() {
  const req = require.context('../src/patternLib', true, /.story\.js$/);
  req.keys().forEach(req);
}

configure(loadStories, module)

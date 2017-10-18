import Vue from 'vue';
import patternLib from './src/patternLib';

Vue.use(patternLib);

const context = require.context('./src/', true, /.spec\.js$/);
context.keys().forEach(context);

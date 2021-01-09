import Vue from 'vue'
import Vuex from 'vuex'
import Home from './modules/home'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex);
const debug = true;

export default new Vuex.Store({
  modules: {
    Home
  },
  plugins: debug ? [createLogger()] : []
})

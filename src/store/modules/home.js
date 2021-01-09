/**
 * home.js
 * 用于管理home模块
 */
import * as types from '../mutaion-type.js'
const HOME = {
  state: {
    number: 1
  },
  mutations: {
    [types.SET_NUM] (state, num) {
      state.number = num;
    }
  },
  actions: {},
  getters: {
    number: state => {
      return state.number
    }
  }
}

export default HOME

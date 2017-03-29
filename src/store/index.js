import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    clickBtn: 0,
    inputVal: 1
  },
  mutations: {
    addClick(state,inputVal) {
      state.clickBtn += Number(inputVal);
      console.log('addClick');
    },
    changeInput(state, val) {
      state.inputVal = val;
      console.log('changeInput')
    }
  },
  actions: {
    addClickTime({commit,state},inputVal) {
      setTimeout(() => {
        commit('addClick',inputVal);
        console.log('addClickTime');
      }, 2000);
    }
  }
})

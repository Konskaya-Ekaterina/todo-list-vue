import {createStore} from 'vuex'
import createPersistedState from "vuex-persistedstate";
import todoList from "./todoList";

const dataState = createPersistedState({
  paths: ['todoList']
})

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    todoList: todoList
  },
  plugins: [dataState],
})
export default {
  namespaced: true,
  state: {
    todoList: [],
    filter: 'all'
  },
  mutations: {
    ADD_TODO_ITEM(state, payload) {
      if (payload.newTodo.trim()) {
        const newTodoItem = {
          id: Date.now(),
          title: payload.newTodo,
          completed: false,
        };
        state.todoList.push(newTodoItem)
      }
    },
    DELETE_COMPLETED_TODO_ITEMS(state) {
      state.todoList = state.todoList.filter(todo => !todo.completed)
    },
    CHANGE_TODO_ITEM_STATUS(state, payload) {
      const changedTodoIndex = state.todoList.findIndex(todo => todo.id === payload.id)
      state.todoList[changedTodoIndex].completed = !state.todoList[changedTodoIndex].completed
    },
    SET_FILTER(state, payload) {
      state.filter = payload.filter
    }
  },
  actions: {
    async addTodo(context, payload) {
      context.commit('ADD_TODO_ITEM', payload)
    },
    async deleteCompletedTodos(context) {
      context.commit('DELETE_COMPLETED_TODO_ITEMS')
    },
    async changeTodoCompleteStatus(context, payload) {
      context.commit('CHANGE_TODO_ITEM_STATUS', payload)
    },
    async setFilter(context, payload) {
      context.commit('SET_FILTER', payload)
    }
  },
  getters: {
    getFilterType(state) {
      return state.filter
    },
    getFilteredList(state) {
      let filteredList = [...state.todoList]
      if (state.filter === "completed") {
        return filteredList.filter(todo => todo.completed);
      }
      if (state.filter === "active") {
        return filteredList.filter(todo => !todo.completed);
      } else {
        return filteredList
      }
    },
    getTodosActiveNumber(state) {
      const activeTodos = state.todoList.filter(todo => !todo.completed)
      return activeTodos.length
    },
    getTodosCompletedNumber(state) {
      const completedTodos = state.todoList.filter(todo => todo.completed)
      return completedTodos.length
    }
  }
}
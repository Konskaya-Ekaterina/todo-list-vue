<template>
  <ul v-if="filteredList.length" class="list">
    <todo-list-item
        v-for="todo of filteredList"
        :key="todo.id"
        :todo="todo"
    />
  </ul>
  <p v-else class="no-items-text">No todos</p>
</template>

<script>
import TodoListItem from "./TodoListItem";
import {mapGetters} from "vuex";

export default {
  name: "TodoList",
  components: {
    TodoListItem,
  },
  computed: {
    ...mapGetters('todoList', {getFilteredList: 'getFilteredList'}),

    filteredList() {
      return this.getFilteredList
    }
  },
}
</script>

<style lang="scss" scoped>

.no-items-text {
  padding: 10px 15px;
  text-align: center;
}

</style>
<template>
  <div class="todo-block">
    <form class="todo-block__form" @submit.prevent="addNewTodo">
      <input v-model="newTodo" class="todo-block__input" placeholder="What needs to be done?" type="text"/>
    </form>
    <todo-list/>
    <todo-control-panel/>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";
import TodoControlPanel from "@/components/TodoControlPanel";
import {mapActions} from 'vuex';

export default {
  name: "TodoView",
  data() {
    return {
      newTodo: '',
    };
  },
  components: {
    TodoList,
    TodoControlPanel,
  },
  methods: {
    ...mapActions('todoList', {addTodo: 'addTodo'}),

    addNewTodo() {
      this.addTodo({newTodo: this.newTodo})
      this.newTodo = "";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";

.todo-block {
  max-width: 700px;
  min-width: 450px;
  margin: 0 auto;
  border: 1px solid $dark-grey;

  &__form {
    position: relative;
    padding: 12px 15px 12px 50px;
    border-bottom: 2px solid $light-grey;

    &::before, &::after {
      content: '';
      width: 10px;
      height: 2px;
      position: absolute;
      top: calc(50% - 1px);
      background-color: $light-grey
    }

    &::before {
      left: 14px;
      transform: rotate(45deg);
    }

    &::after {
      left: 20px;
      transform: rotate(-45deg);
    }
  }

  &__input {
    width: 100%;
    font-size: 18px;
    border: none;
    outline: none;

    &::placeholder {
      color: $light-grey;
      font-style: italic;
    }
  }
}

</style>
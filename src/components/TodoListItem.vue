<template>
  <li class="list__item" @click="changeTodoStatus">
    <div :class="todo.completed ? 'list__item-checkbox-checked' : ''" class="list__item-checkbox" />
    <div :class="todo.completed ? 'list__item-text-checked' : ''" class="list__item-text">{{ todo.title }}</div>
  </li>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: 'TodoListItem',
  props: {
    todo: {
      type: Object,
      default: () => {
      }
    },
  },
  methods: {
    ...mapActions('todoList', {changeTodoCompleteStatus: 'changeTodoCompleteStatus'}),

    changeTodoStatus() {
      this.changeTodoCompleteStatus({id: this.todo.id})
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";

.list__item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 18px;
  border-bottom: 1px solid $light-grey;
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }

  &-checkbox {
    width: 0;
    position: relative;
    margin: 0;
    padding: 0;
    visibility: hidden;

    &::before {
      content: '';
      width: 22px;
      height: 22px;
      position: absolute;
      top: calc(50% - 12px);
      left: 10px;
      border: 1px solid rgba($light-grey, $alpha: 0.4);
      border-radius: 50%;
      visibility: visible;
    }

    &-checked {
      &::before {
        content: url("../assets/images/check-mark.svg");
        border: 1px solid $light-grey;
      }
    }
  }

  &-text {
    padding: 12px 15px 12px 50px;

    &-checked {
      color: $light-grey;
      text-decoration: line-through;
    }
  }
}

</style>
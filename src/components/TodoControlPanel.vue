<template>
  <div class="controls">
    <div class="controls__counter">{{ activeTodos }} item<span v-if="activeTodos !== 1">s</span> left</div>
    <div class="controls__filter">
      <div v-for="(type, index) in filterTypes" :key="index" class="controls__filter-item">
        <input
            :id="type.value"
            v-model="filter"
            :value="type.value"
            class="controls__filter-item-input"
            type="radio"
            @change="chooseFilterType"
        >
        <label :for="type.value"
               :style="{border: filter === type.value ? '1px solid #d5d5d5' : 'none'}"
               class="controls__filter-item-label"
        >{{ type.name }}</label>
      </div>
    </div>
    <button
        :style="{visibility: haveCompletedTodos ? 'visible' : 'hidden'}"
        class="controls__btn-clear"
        type="button"
        @click="clearCompletedTodos"
    >Clear completed
    </button>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "TodoControlPanel",
  data() {
    return {
      filterTypes: [
        {
          name: 'All',
          value: 'all'
        },
        {
          name: 'Active',
          value: 'active'
        },
        {
          name: 'Completed',
          value: 'completed'
        },
      ],
      filter: 'all',
    }
  },
  mounted() {
    this.setFilterType()
  },
  methods: {
    ...mapActions('todoList', {deleteCompletedTodos: 'deleteCompletedTodos', setFilter: 'setFilter'}),
    ...mapGetters('todoList', {getFilterType: 'getFilterType'}),

    setFilterType() {
      this.filter = this.getFilterType()
    },
    chooseFilterType() {
      this.setFilter({filter: this.filter})
    },
    clearCompletedTodos() {
      this.deleteCompletedTodos()
    }
  },
  computed: {
    ...mapGetters('todoList', {
      getTodosActiveNumber: 'getTodosActiveNumber',
      getTodosCompletedNumber: 'getTodosCompletedNumber'
    }),

    activeTodos() {
      return this.getTodosActiveNumber
    },
    haveCompletedTodos() {
      return this.getTodosCompletedNumber !== 0
    },
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";

.controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  color: $dark-grey;
  font-size: 14px;
  border-top: 1px solid $light-grey;

  &__counter {
    min-width: 100px;
  }

  &__filter {
    min-width: 180px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &-item {
      margin-right: 10px;

      &-input {
        display: none;
      }

      &-label {
        padding: 3px 7px;
        border: 1px solid transparent;
        border-radius: 3px;
        cursor: pointer;

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }

  &__btn {
    &-clear {
      color: inherit;
      font-family: inherit;
      font-size: inherit;
      background-color: transparent;
      border: none;
      outline: none;
      cursor: pointer;
    }
  }
}

</style>
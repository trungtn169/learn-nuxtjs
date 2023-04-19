<template>
  <div class="list-todo">
    <div class="d-flex align-center justify-space-between mb-5">
      <h2 class="mb-0">Todo Uncompleted</h2>
    </div>
    <v-row class="list-todo-wrapper">
      <v-col
        v-for="item in list.filter((todo) => !todo.completed)"
        :key="item.id"
        cols="12"
        lg="4"
      >
        <TodoReadyOnly :item="item" />
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import TodoReadyOnly from './TodoReadyOnly.vue'
export default {
  name: 'TodoCompleted',
  components: {
    TodoReadyOnly,
  },
  data() {
    return {
      list: [],
    }
  },
  computed: {
    ...mapState('modules/todo', ['listTodo']),
  },
  watch: {
    listTodo(newVal) {
      if (newVal) {
        this.list = newVal
      }
    },
  },
  created() {
    this.fetchData()
  },
  methods: {
    ...mapActions('modules/todo', ['getListTodo']),
    fetchData() {
      this.getListTodo()
      this.list = this.listTodo
    },
  },
}
</script>
<style lang=""></style>

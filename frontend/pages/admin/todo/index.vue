<template>
  <div class="list-todo">
    <div class="d-flex align-center justify-space-between mb-5">
      <h2 class="mb-0">Todo List</h2>
      <div>
        <v-btn color="accent" to="/admin/todo/add">Add New</v-btn>
        <v-btn color="primary" @click="handleDeleteAll">Delete All</v-btn>
      </div>
    </div>
    <v-row class="list-todo-wrapper">
      <v-col v-for="item in list" :key="item.id" cols="12">
        <TodoItem :item="item" />
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import TodoItem from '~/components/TodoItem.vue'
export default {
  name: 'ListAllTodo',
  components: {
    TodoItem,
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
    ...mapActions('modules/todo', ['getListTodo', 'deleteTodoAll']),
    fetchData() {
      this.getListTodo()
      this.list = this.listTodo
    },
    handleDeleteAll() {
      this.deleteTodoAll()
    },
  },
}
</script>
<style lang=""></style>

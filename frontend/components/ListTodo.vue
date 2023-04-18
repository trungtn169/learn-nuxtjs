<template>
  <div class="list-todo">
    <div class="d-flex align-center justify-space-between mb-5">
      <h2 class="mb-0">Todo List</h2>
      <v-btn color="primary" @click="handleDeleteAll">Delete All</v-btn>
    </div>
    <v-row class="list-todo-wrapper">
      <v-col v-for="item in list" :key="item.id" cols="12" lg="4">
        <Todo :item="item" />
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import Todo from './TodoItem.vue'
export default {
  name: 'ListTodo',
  components: {
    Todo,
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

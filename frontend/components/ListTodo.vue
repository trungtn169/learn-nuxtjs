<template>
  <div class="list-todo">
    <h2 class="mb-3">Todo List</h2>
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
    listTodo(val) {
      console.log(val)
      console.log(this.listTodo)
      // this.list = [...this.listTodo]
    },
  },
  created() {
    this.getListTodo()
  },
  methods: {
    ...mapActions('modules/todo', ['getListTodo']),
  },
}
</script>
<style lang=""></style>

<template>
  <div class="list-todo">
    <div class="d-flex align-center justify-space-between mb-5">
      <h2 class="mb-0">Todo Completed</h2>
    </div>
    <v-row class="list-todo-wrapper">
      <v-col v-for="item in list" :key="item.id" cols="12" lg="4">
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
    ...mapState('modules/todo', ['listTodoCompleted']),
  },
  watch: {
    listTodoCompleted(newVal) {
      if (newVal) {
        this.list = newVal
      }
    },
  },
  created() {
    this.fetchData()
  },
  methods: {
    ...mapActions('modules/todo', ['getListTodoCompleted']),
    fetchData() {
      this.getListTodoCompleted()
      this.list = this.listTodoCompleted
    },
  },
}
</script>
<style lang=""></style>

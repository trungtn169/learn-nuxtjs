<template>
  <div>
    <v-btn color="primary" to="/admin/todo" class="mt-5">View All</v-btn>
    <AddTodo class="mt-5" />
  </div>
</template>
<script>
import AddTodo from '~/components/AddTodo.vue'
export default {
  name: 'AddTodoPage',
  components: {
    AddTodo,
  },
}
</script>
<style lang=""></style>

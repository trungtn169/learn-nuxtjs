<template>
  <v-row justify="center" align="start">
    <v-col cols="6" class="mt-5 max-auto">
      <AddTodo />
    </v-col>
    <v-col cols="6" class="mt-5 max-auto">
      <ReportTodo />
    </v-col>
    <v-col cols="12" class="mt-5">
      <ListTodo />
    </v-col>
  </v-row>
</template>

<script>
import AddTodo from '~/components/AddTodo.vue'
import ListTodo from '~/components/ListTodo.vue'
import ReportTodo from '~/components/ReportTodo.vue'
export default {
  name: 'IndexPage',
  components: {
    AddTodo,
    ListTodo,
    ReportTodo,
  },
  layout: 'homepage',
}
</script>

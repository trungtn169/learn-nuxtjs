<template>
  <v-row justify="center" align="center">
    <AddTodo />
  </v-row>
</template>

<script>
import AddTodo from '~/components/AddTodo.vue'
export default {
  name: 'IndexPage',
  components: {
    AddTodo,
  },
  layout: 'homepage',
}
</script>

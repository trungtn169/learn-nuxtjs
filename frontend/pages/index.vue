<template>
  <v-row justify="center" align="start">
    <v-col cols="12" class="mt-5">
      <TodoCompleted />
      <TodoUncompleted class="mt-10" />
    </v-col>
  </v-row>
</template>

<script>
import TodoUncompleted from '~/components/TodoUncompleted.vue'
import TodoCompleted from '~/components/TodoCompleted.vue'
export default {
  name: 'IndexPage',
  components: {
    TodoUncompleted,
    TodoCompleted,
  },
  layout: 'homepage',
  head() {
    return {
      title: 'Home Page',
    }
  },
}
</script>

<template>
  <v-card class="todo-item secondary">
    <v-card-title :class="{ 'text-decoration-line-through': item.completed }">
      {{ item.title }}
    </v-card-title>
    <v-card-text>
      {{ item.description }}
      <p>Status: {{ status }}</p>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions class="d-flex align-center justify-end">
      <v-btn color="primary" depressed><v-icon small>mdi-pencil</v-icon></v-btn>
      <v-btn color="accent" depressed><v-icon small>mdi-delete</v-icon></v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  name: 'TodoItem',
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {}
  },
  computed: {
    status() {
      return this.item.completed ? 'completed' : 'not yet'
    },
  },
}
</script>
<style lang=""></style>

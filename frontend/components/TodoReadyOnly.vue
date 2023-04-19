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
    <v-card-actions class="d-flex align-center justify-center">
      <v-btn color="primary" depressed :to="`todo/${item.slug}`">
        <v-icon small>mdi-information-variant</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  name: 'TodoReadyOnly',
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {}
  },
  computed: {
    status() {
      return this.item.completed ? 'Completed' : 'Not yet completed'
    },
  },
}
</script>
<style lang=""></style>

<template>
  <div class="add-todo">
    <h2>Form add todo</h2>
    <!-- <v-form ref="formAddTodo" v-model="valid" lazy-validation> -->
    <v-text-field
      v-model="title"
      :rules="titleRules"
      required
      placeholder="Title"
      hide-details="auto"
    ></v-text-field>
    <v-text-field
      v-model="description"
      placeholder="Description"
      hide-details="auto"
    ></v-text-field>
    <v-checkbox
      v-model="completed"
      label="Status (check for the mark to do is completed)"
    ></v-checkbox>
    <div class="text-center">
      <v-btn
        depressed
        :disabled="!isValid"
        color="primary"
        @click="handleAddTodo"
      >
        <v-icon>mdi-checkbox-marked-circle</v-icon>Add
      </v-btn>
    </div>
    <!-- </v-form> -->
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'AddTodo',
  data() {
    return {
      isValid: true,
      title: '',
      description: '',
      completed: false,
      titleRules: [
        (v) => !!v || 'Title is required',
        (v) => v.length >= 3 || 'Name must be greater than 03 characters',
      ],
    }
  },
  methods: {
    ...mapActions('modules/todo', ['addTodo', 'getListTodo']),
    validate() {
      this.$refs.formAddTodo.validate()
    },
    resetForm() {
      this.title = ''
      this.description = ''
      this.completed = false
    },
    handleAddTodo() {
      this.addTodo({
        title: this.title,
        description: this.description,
        completed: this.completed,
      })
      this.resetForm()
      this.getListTodo()
    },
  },
}
</script>
<style lang=""></style>

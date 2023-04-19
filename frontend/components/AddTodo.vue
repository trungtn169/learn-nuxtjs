<template>
  <div class="add-todo">
    <h2>Form add todo</h2>
    <v-form ref="formAddTodo" v-model="isValid" lazy-validation>
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
          color="primary"
          @click="handleAddTodo"
          :loading="isLoading"
        >
          <v-icon>mdi-checkbox-marked-circle</v-icon>Add
        </v-btn>
      </div>
    </v-form>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'AddTodo',
  data() {
    return {
      isValid: false,
      title: '',
      description: '',
      completed: false,
      titleRules: [
        (v) => !!v || 'Title is required',
        (v) => v.length >= 3 || 'Name must be greater than 03 characters',
      ],
      isLoading: false,
    }
  },
  methods: {
    ...mapActions('modules/todo', ['addTodo', 'getListTodo']),
    validate() {
      return this.$refs.formAddTodo.validate()
    },
    handleAddTodo() {
      if (this.validate()) {
        this.isLoading = true
        const slug = this.title
          .toLowerCase()
          .trim()
          .replace(/[^\w\s-]/g, '')
          .replace(/[\s_-]+/g, '-')
          .replace(/^-+|-+$/g, '')
        this.addTodo({
          title: this.title,
          slug,
          description: this.description,
          completed: this.completed,
        })
        this.getListTodo()
        this.$refs.formAddTodo.resetValidation()
        setTimeout(() => {
          this.isLoading = false
        }, 1000)
      }
    },
  },
}
</script>
<style lang=""></style>

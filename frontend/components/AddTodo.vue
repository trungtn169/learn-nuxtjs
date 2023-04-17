<template>
  <v-col class="add-todo">
    <v-form ref="formAddTodo" v-model="valid" lazy-validation>
      <v-text-field
        v-model="title"
        :rules="titleRules"
        required
        label="Add Title"
      ></v-text-field>
      <v-btn
        depressed
        :disabled="!valid"
        color="primary"
        class="mr-4"
        @click="validate"
      >
        Add
      </v-btn>
    </v-form>
  </v-col>
</template>
<script>
export default {
  name: 'AddTodo',
  data() {
    return {
      valid: false,
      title: '',
      titleRules: [
        (v) => !!v || 'Title is required',
        (v) => v.length >= 3 || 'Name must be greater than 03 characters',
      ],
    }
  },
  methods: {
    validate() {
      this.$refs.formAddTodo.validate()
    },
  },
}
</script>
<style lang=""></style>

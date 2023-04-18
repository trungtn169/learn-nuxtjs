import { API_TODO } from '~/store/api/todo'
export default {
  async addTodo({ commit }, payload) {
    await this.$axios
      .$post(API_TODO, payload)
      .then((res) => {
        commit('addTodo', res)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  async getListTodo({ commit }) {
    await this.$axios
      .$get(API_TODO)
      .then((res) => {
        commit('getListTodo', res)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  async deleteTodo({ commit }, payload) {
    await this.$axios
      .$delete(`${API_TODO}/${payload}`)
      .then(() => {
        commit('deleteTodo', payload)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  async deleteTodoAll({ commit }) {
    await this.$axios
      .$delete(API_TODO)
      .then(() => {
        commit('deleteTodoAll')
      })
      .catch((err) => {
        console.log(err)
      })
  },
}

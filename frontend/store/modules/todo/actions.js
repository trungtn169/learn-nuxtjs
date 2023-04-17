import { API_TODO } from '~/store/api/todo'
export default {
  async addTodo({ commit }, payload) {
    await this.$axios
      .$post(API_TODO, payload)
      .then()
      .catch((err) => {
        console.log(err)
      })
  },
  async getListTodo({ commit }) {
    await this.$axios
      .$get(API_TODO)
      .then((res) => {
        commit('setListTodo', res)
      })
      .catch((err) => {
        console.log(err)
      })
  },
}

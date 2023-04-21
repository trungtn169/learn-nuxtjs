import { API_POST } from '~/store/api/post'
export default {
  async addPost({ commit }, payload) {
    await this.$axios
      .$post(API_POST.addPost, payload)
      .then((res) => {
        commit('addPost', res)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  async getListPost({ commit }) {
    await this.$axios
      .$get(API_POST.getPost)
      .then((res) => {
        commit('getListPost', res)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  async getListPostCompleted({ commit }) {
    await this.$axios
      .$get(API_POST.getPostCompleted)
      .then((res) => {
        commit('getListPostCompleted', res)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  async deletePost({ commit }, payload) {
    await this.$axios
      .$delete(API_POST.deletePost + payload)
      .then(() => {
        commit('deletePost', payload)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  async deletePostAll({ commit }) {
    await this.$axios
      .$delete(API_POST.deletePostAll)
      .then(() => {
        commit('deletePostAll')
      })
      .catch((err) => {
        console.log(err)
      })
  },
}

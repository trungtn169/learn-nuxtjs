import { API_TAG } from '~/store/api/tag'
export default {
  async addTag({ commit }, payload) {
    await this.$axios
      .$post(API_TAG.addTag, payload)
      .then((res) => {
        commit('addTag', res)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  async getListTag({ commit }) {
    await this.$axios
      .$get(API_TAG.getTag)
      .then((res) => {
        commit('getListTag', res)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  async getListTagCompleted({ commit }) {
    await this.$axios
      .$get(API_TAG.getTagCompleted)
      .then((res) => {
        commit('getListTagCompleted', res)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  async deleteTag({ commit }, payload) {
    await this.$axios
      .$delete(API_TAG.deleteTag + payload)
      .then(() => {
        commit('deleteTag', payload)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  async deleteTagAll({ commit }) {
    await this.$axios
      .$delete(API_TAG.deleteTagAll)
      .then(() => {
        commit('deleteTagAll')
      })
      .catch((err) => {
        console.log(err)
      })
  },
}

import { API_CATEGORY } from '~/store/api/category'
export default {
  async addCategory({ commit }, payload) {
    await this.$axios
      .$post(API_CATEGORY.addCategory, payload)
      .then((res) => {
        commit('addCategory', res)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  async getListCategory({ commit }) {
    await this.$axios
      .$get(API_CATEGORY.getCategory)
      .then((res) => {
        commit('getListCategory', res)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  async deleteCategory({ commit }, payload) {
    await this.$axios
      .$delete(API_CATEGORY.deleteCategory + payload)
      .then(() => {
        commit('deleteCategory', payload)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  async deleteCategoryAll({ commit }) {
    await this.$axios
      .$delete(API_CATEGORY.deleteCategoryAll)
      .then(() => {
        commit('deleteCategoryAll')
      })
      .catch((err) => {
        console.log(err)
      })
  },
}

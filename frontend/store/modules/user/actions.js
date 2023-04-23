import { API_USER } from '~/store/api/user'
export default {
  async addUser({ commit }, payload) {
    await this.$axios
      .$post(API_USER.addUser, payload)
      .then((res) => {
        commit('addUser', res)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  async getListUser({ commit }) {
    await this.$axios
      .$get(API_USER.getUser)
      .then((res) => {
        commit('getListUser', res)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  async getUserLogin({ commit }) {
    await this.$axios
      .$get(API_USER.getUser)
      .then((res) => {
        console.log(res)
        commit('getUserLogin', res[0].userName)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  async deleteUser({ commit }, payload) {
    await this.$axios
      .$delete(API_USER.deleteUser + payload)
      .then(() => {
        commit('deleteUser', payload)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  async deleteUserAll({ commit }) {
    await this.$axios
      .$delete(API_USER.deleteUserAll)
      .then(() => {
        commit('deleteUserAll')
      })
      .catch((err) => {
        console.log(err)
      })
  },
}

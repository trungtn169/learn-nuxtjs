export default {
  addUser(state, payload) {
    state.listUser.push(payload)
  },
  getListUser(state, payload) {
    state.listUser = payload
  },
  getUserLogin(state, payload) {
    state.userLogged = payload
  },
  deleteUser(state, payload) {
    state.listUser = state.listUser.filter((post) => post.id !== payload)
  },
  deleteUserAll(state) {
    state.listUser = []
  },
}
